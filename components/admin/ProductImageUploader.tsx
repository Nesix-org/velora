"use client";

import Image from "next/image";
import Script from "next/script";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getProductImageUrl } from "@/lib/cloudinary-url";
import type { ProductImage } from "@/lib/product-types";

declare global {
  interface Window {
    cloudinary?: {
      createUploadWidget: (
        options: Record<string, unknown>,
        callback: (
          error: { message?: string } | null,
          result: {
            event?: string;
            info?: {
              public_id: string;
              secure_url: string;
              width?: number;
              height?: number;
              format?: string;
            };
          },
        ) => void,
      ) => {
        open: () => void;
      };
    };
  }
}

type ProductImageUploaderProps = {
  value: ProductImage | null;
  onChange: (image: ProductImage | null) => void;
  folder?: string;
  alt?: string;
  label?: string;
  showPreview?: boolean;
};

export default function ProductImageUploader({
  value,
  onChange,
  folder = "products",
  alt,
  label = "Product image",
  showPreview = true,
}: ProductImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const widgetLoadedRef = useRef(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function deleteImageByPublicId(publicId: string) {
    const response = await fetch("/api/admin/product-images", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicId }),
    });

    const data = (await response.json()) as { error?: string };

    if (!response.ok) {
      throw new Error(data.error ?? "Delete failed.");
    }
  }

  async function cleanupPreviousImage(previousPublicId: string, nextPublicId: string) {
    if (!previousPublicId || previousPublicId === nextPublicId) {
      return;
    }

    try {
      await deleteImageByPublicId(previousPublicId);
    } catch {
      setError("Image uploaded, but the previous asset could not be cleaned up.");
    }
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);

      if (alt) {
        formData.append("alt", alt);
      }

      const response = await fetch("/api/admin/product-images", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as {
        error?: string;
        image?: ProductImage;
      };

      if (!response.ok || !data.image) {
        throw new Error(data.error ?? "Upload failed.");
      }

      const previousPublicId = value?.publicId;
      onChange(data.image);

      if (previousPublicId) {
        await cleanupPreviousImage(previousPublicId, data.image.publicId);
      }
    } catch (uploadError) {
      setError(
        uploadError instanceof Error ? uploadError.message : "Upload failed.",
      );
    } finally {
      setIsUploading(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  async function handleRemoveImage() {
    if (!value?.publicId) {
      onChange(null);
      return;
    }

    setError(null);
    setIsDeleting(true);

    try {
      await deleteImageByPublicId(value.publicId);
      onChange(null);
    } catch (deleteError) {
      setError(
        deleteError instanceof Error ? deleteError.message : "Delete failed.",
      );
    } finally {
      setIsDeleting(false);
    }
  }

  async function handleWidgetUpload() {
    if (!widgetLoadedRef.current || !window.cloudinary) {
      setError("Cloudinary upload widget is still loading.");
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      const response = await fetch("/api/admin/product-images/signature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ folder }),
      });

      const data = (await response.json()) as {
        apiKey?: string;
        cloudName?: string;
        error?: string;
        folder?: string;
        signature?: string;
        timestamp?: number;
      };

      if (
        !response.ok ||
        !data.apiKey ||
        !data.cloudName ||
        !data.folder ||
        !data.signature ||
        !data.timestamp
      ) {
        throw new Error(data.error ?? "Failed to initialize upload widget.");
      }

      await new Promise<void>((resolve, reject) => {
        const widget = window.cloudinary?.createUploadWidget(
          {
            apiKey: data.apiKey,
            cloudName: data.cloudName,
            folder: data.folder,
            sources: ["local", "url", "camera"],
            multiple: false,
            resourceType: "image",
            maxFileSize: 5 * 1024 * 1024,
            clientAllowedFormats: ["jpg", "jpeg", "png", "webp", "avif"],
            useFilename: true,
            uniqueFilename: true,
            uploadSignature: data.signature,
            uploadSignatureTimestamp: data.timestamp,
          },
          async (widgetError, result) => {
            if (widgetError) {
              reject(new Error(widgetError.message ?? "Widget upload failed."));
              return;
            }

            if (result.event === "success" && result.info) {
              const nextImage: ProductImage = {
                publicId: result.info.public_id,
                url: result.info.secure_url,
                width: result.info.width,
                height: result.info.height,
                format: result.info.format,
                alt,
              };

              const previousPublicId = value?.publicId;
              onChange(nextImage);

              if (previousPublicId) {
                await cleanupPreviousImage(previousPublicId, nextImage.publicId);
              }

              resolve();
              return;
            }

            if (result.event === "close") {
              resolve();
            }
          },
        );

        if (!widget) {
          reject(new Error("Failed to create upload widget."));
          return;
        }

        widget.open();
      });
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Widget upload failed.",
      );
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <Card className="gap-4">
      <Script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        strategy="lazyOnload"
        onLoad={() => {
          widgetLoadedRef.current = true;
        }}
      />

      <CardHeader className="gap-1">
        <CardTitle>{label}</CardTitle>
        <CardDescription>
          Upload one image at a time with Cloudinary. Supported types: JPG, PNG,
          WEBP, AVIF. Max size: 5MB.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button
          type="button"
          variant="outline"
          onClick={handleWidgetUpload}
          disabled={isUploading || isDeleting}
        >
          {isUploading ? "Opening uploader..." : "Upload with Cloudinary"}
        </Button>

        <div className="text-center text-xs text-muted-foreground">or</div>

        <Input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading || isDeleting}
        />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        {value && showPreview ? (
          <div className="space-y-3">
            <div className="relative h-64 overflow-hidden rounded-lg border bg-muted">
              <Image
                src={getProductImageUrl(value, { width: 900, height: 900 })}
                alt={value.alt ?? "Uploaded product image"}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">publicId:</span>{" "}
                {value.publicId}
              </p>
              <p>
                <span className="font-medium text-foreground">Delivery URL:</span>{" "}
                {getProductImageUrl(value, { width: 900, height: 900 })}
              </p>
            </div>
            <Button
              type="button"
              variant="destructive"
              onClick={handleRemoveImage}
              disabled={isDeleting}
            >
              {isDeleting ? "Removing..." : "Remove image"}
            </Button>
          </div>
        ) : value ? (
          <div className="rounded-lg border bg-muted/30 px-4 py-4 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Image ready:</span>{" "}
              {value.publicId}
            </p>
            <div className="mt-3">
              <Button
                type="button"
                variant="destructive"
                onClick={handleRemoveImage}
                disabled={isDeleting}
              >
                {isDeleting ? "Removing..." : "Remove image"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed px-4 py-10 text-center text-sm text-muted-foreground">
            {isUploading ? "Uploading image..." : "No product image uploaded yet."}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
