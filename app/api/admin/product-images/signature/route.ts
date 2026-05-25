import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

const allowedFolders = new Set([
  "products",
  "products/demo",
  "products/admin/men-clothes",
  "products/admin/men-footwear",
  "products/admin/women-clothes",
  "products/admin/women-footwear",
  "products/admin/scarf",
  "products/admin/necklace",
]);

export const runtime = "nodejs";

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Missing Cloudinary environment variables. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
    );
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  return { cloudName, apiKey, apiSecret };
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    folder?: string;
    publicId?: string;
  };

  const folder =
    typeof body.folder === "string" && allowedFolders.has(body.folder)
      ? body.folder
      : "products";

  const timestamp = Math.round(Date.now() / 1000);
  const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
  const paramsToSign: Record<string, string | number> = {
    folder,
    resource_type: "image",
    timestamp,
    unique_filename: "true",
    use_filename: "true",
  };

  if (body.publicId) {
    paramsToSign.public_id = body.publicId;
  }

  const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);

  return NextResponse.json({
    apiKey,
    cloudName,
    folder,
    signature,
    timestamp,
  });
}
