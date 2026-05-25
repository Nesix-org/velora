import type { Metadata } from "next";

import ImageUploadDemo from "./upload-demo";

export const metadata: Metadata = {
  title: "Velora || Image Upload Demo",
  description: "Cloudinary-backed product image upload demo",
};

export default function ImageUploadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold">Product Image Upload Demo</h1>
        <p className="text-muted-foreground">
          Use this page to verify Cloudinary upload, preview, and delete before
          wiring the uploader into an admin product form.
        </p>
      </div>
      <ImageUploadDemo />
    </div>
  );
}
