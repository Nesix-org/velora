import { NextRequest, NextResponse } from "next/server";

import { deleteProductImage, uploadProductImage } from "@/lib/cloudinary";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");
  const folder = formData.get("folder");
  const alt = formData.get("alt");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "An image file is required." },
      { status: 400 },
    );
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { error: "Only image uploads are allowed." },
      { status: 400 },
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "Image size must be 5MB or less." },
      { status: 400 },
    );
  }

  const arrayBuffer = await file.arrayBuffer();
  const image = await uploadProductImage({
    file: Buffer.from(arrayBuffer),
    fileName: file.name,
    mimeType: file.type,
    folder: typeof folder === "string" && folder.length > 0 ? folder : "products",
    alt: typeof alt === "string" && alt.length > 0 ? alt : undefined,
  });

  return NextResponse.json({ image }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const body = (await request.json()) as { publicId?: string };

  if (!body.publicId) {
    return NextResponse.json(
      { error: "A publicId is required for image deletion." },
      { status: 400 },
    );
  }

  const result = await deleteProductImage(body.publicId);

  return NextResponse.json({ result });
}
