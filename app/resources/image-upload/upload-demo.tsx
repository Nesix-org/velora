"use client";

import { useState } from "react";

import ProductImageUploader from "@/components/admin/ProductImageUploader";
import type { ProductImage } from "@/lib/product-types";

export default function ImageUploadDemo() {
  const [image, setImage] = useState<ProductImage | null>(null);

  return (
    <div className="space-y-6">
      <ProductImageUploader
        value={image}
        onChange={setImage}
        folder="products/demo"
        alt="Velora product upload demo"
      />

      <div className="rounded-xl border bg-card p-6">
        <h2 className="mb-3 text-lg font-semibold">Current image payload</h2>
        <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-50">
          {JSON.stringify(image, null, 2)}
        </pre>
      </div>
    </div>
  );
}
