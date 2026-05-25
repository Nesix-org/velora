import { v2 as cloudinary } from "cloudinary";
import type { ProductImage } from "@/lib/product-types";

type UploadProductImageParams = {
  file: Buffer;
  fileName: string;
  mimeType: string;
  folder?: string;
  alt?: string;
};

function getConfiguredCloudinary() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Missing Cloudinary environment variables. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env.local and restart the dev server.",
    );
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  return cloudinary;
}

export function getCloudinaryImageUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    crop?: "fill" | "fit" | "scale" | "thumb";
  },
) {
  return getConfiguredCloudinary().url(publicId, {
    fetch_format: "auto",
    quality: "auto",
    dpr: "auto",
    secure: true,
    transformation: [
      {
        crop: options?.crop ?? "fill",
        width: options?.width,
        height: options?.height,
      },
    ],
  });
}

export async function uploadProductImage({
  file,
  fileName,
  mimeType,
  folder = "products",
  alt,
}: UploadProductImageParams): Promise<ProductImage> {
  const dataUri = `data:${mimeType};base64,${file.toString("base64")}`;
  const uploadResult = await getConfiguredCloudinary().uploader.upload(dataUri, {
    folder,
    resource_type: "image",
    public_id: fileName.replace(/\.[^/.]+$/, ""),
    overwrite: false,
    unique_filename: true,
    use_filename: true,
  });

  return {
    publicId: uploadResult.public_id,
    url: uploadResult.secure_url,
    width: uploadResult.width,
    height: uploadResult.height,
    format: uploadResult.format,
    alt,
  };
}

export async function deleteProductImage(publicId: string) {
  return getConfiguredCloudinary().uploader.destroy(publicId, {
    resource_type: "image",
    invalidate: true,
  });
}

export { cloudinary };
