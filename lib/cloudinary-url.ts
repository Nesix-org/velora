import type { ProductImage } from "@/lib/product-types";

type CloudinaryUrlOptions = {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "scale" | "thumb";
};

function getCloudinaryCloudName() {
  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ??
    process.env.CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    throw new Error(
      "Missing Cloudinary cloud name. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME or CLOUDINARY_CLOUD_NAME.",
    );
  }

  return cloudName;
}

function getCloudinaryCloudNameFromUrl(url: string) {
  const match = url.match(/^https:\/\/res\.cloudinary\.com\/([^/]+)\/image\/upload\//);
  return match?.[1] ?? null;
}

export function getCloudinaryImageUrl(
  publicId: string,
  options?: CloudinaryUrlOptions,
) {
  const transformations = [
    "f_auto",
    "q_auto",
    "dpr_auto",
    options?.crop ? `c_${options.crop}` : "c_fill",
    typeof options?.width === "number" ? `w_${options.width}` : null,
    typeof options?.height === "number" ? `h_${options.height}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${getCloudinaryCloudName()}/image/upload/${transformations}/${publicId}`;
}

export function getProductImageUrl(
  image: Pick<ProductImage, "publicId" | "url">,
  options?: CloudinaryUrlOptions,
) {
  if (!image.publicId) {
    return image.url;
  }

  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ??
    process.env.CLOUDINARY_CLOUD_NAME ??
    getCloudinaryCloudNameFromUrl(image.url);

  if (!cloudName) {
    return image.url;
  }

  const transformations = [
    "f_auto",
    "q_auto",
    "dpr_auto",
    options?.crop ? `c_${options.crop}` : "c_fill",
    typeof options?.width === "number" ? `w_${options.width}` : null,
    typeof options?.height === "number" ? `h_${options.height}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${image.publicId}`;
}
