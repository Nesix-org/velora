"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

import ProductImageUploader from "@/components/admin/ProductImageUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  loadAdminProducts,
  saveAdminProducts,
} from "@/lib/admin-product-storage";
import { getProductImageUrl } from "@/lib/cloudinary-url";
import type {
  AdminProduct,
  AdminProductDraft,
  ProductImage,
} from "@/lib/product-types";

const INITIAL_FORM: AdminProductDraft = {
  name: "",
  price: "",
  discount: "",
  category: "men-clothes",
  description: "",
};

export default function AdminProductManager() {
  const [form, setForm] = useState<AdminProductDraft>(INITIAL_FORM);
  const [image, setImage] = useState<ProductImage | null>(null);
  const [deletingProductId, setDeletingProductId] = useState<number | null>(null);
  const [products, setProducts] = useState<AdminProduct[]>(() =>
    loadAdminProducts(),
  );

  function updateField<K extends keyof AdminProductDraft>(
    key: K,
    value: AdminProductDraft[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function deleteProductImage(publicId: string) {
    const response = await fetch("/api/admin/product-images", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicId }),
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      throw new Error(data.error ?? "Failed to delete product image.");
    }
  }

  async function resetForm(options?: { cleanupImage?: boolean }) {
    if (options?.cleanupImage && image?.publicId) {
      await deleteProductImage(image.publicId);
    }

    setForm(INITIAL_FORM);
    setImage(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!image) {
      toast.error("Upload a product image before saving.");
      return;
    }

    const price = Number(form.price);
    if (!form.name.trim() || Number.isNaN(price) || price <= 0) {
      toast.error("Enter a valid product name and price.");
      return;
    }

    const nextProduct: AdminProduct = {
      id: Date.now(),
      name: form.name.trim(),
      price,
      discount: form.discount.trim() || "0%",
      rating: 4.5,
      reviews: "(0 reviews)",
      category: form.category,
      description: form.description.trim(),
      image,
      createdAt: new Date().toISOString(),
    };

    const nextProducts = [nextProduct, ...products];
    setProducts(nextProducts);
    saveAdminProducts(nextProducts);
    setForm(INITIAL_FORM);
    setImage(null);
    toast.success("Product saved to local admin storage.");
  }

  async function handleReset() {
    try {
      await resetForm({ cleanupImage: true });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to reset form.",
      );
    }
  }

  async function handleDeleteProduct(productId: number) {
    const productToDelete = products.find((product) => product.id === productId);

    if (!productToDelete) {
      toast.error("Product not found.");
      return;
    }

    setDeletingProductId(productId);

    try {
      if (productToDelete.image.publicId) {
        await deleteProductImage(productToDelete.image.publicId);
      }

      const nextProducts = products.filter((product) => product.id !== productId);
      setProducts(nextProducts);
      saveAdminProducts(nextProducts);
      toast.success("Product and Cloudinary image deleted.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete product.",
      );
    } finally {
      setDeletingProductId(null);
    }
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Product Management</h1>
        <p className="text-muted-foreground">
          Create products with Cloudinary-hosted images and save them to local
          admin storage.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>New Product</CardTitle>
            <CardDescription>
              Add a product record with its pricing, category, description, and
              image.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Product name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Grey Casual Shoe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={form.category}
                    onChange={(event) => updateField("category", event.target.value)}
                    className="border-input bg-background h-9 w-full rounded-md border px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    <option value="men-clothes">Men clothes</option>
                    <option value="men-footwear">Men footwear</option>
                    <option value="women-clothes">Women clothes</option>
                    <option value="women-footwear">Women footwear</option>
                    <option value="scarf">Scarf</option>
                    <option value="necklace">Necklace</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={(event) => updateField("price", event.target.value)}
                    placeholder="190"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Discount</Label>
                  <Input
                    id="discount"
                    value={form.discount}
                    onChange={(event) =>
                      updateField("discount", event.target.value)
                    }
                    placeholder="-30%"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={form.description}
                  onChange={(event) =>
                    updateField("description", event.target.value)
                  }
                  placeholder="Write a short product description."
                />
              </div>

              <div className="space-y-2">
                <ProductImageUploader
                  value={image}
                  onChange={setImage}
                  folder={`products/admin/${form.category}`}
                  alt={form.name || "Velora product"}
                  label="Primary product image"
                  showPreview={false}
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit">Save product</Button>
                <Button type="button" variant="outline" onClick={handleReset}>
                  Reset form
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saved Products</CardTitle>
            <CardDescription>
              Deleting a saved product also deletes its image from Cloudinary.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {products.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No saved products yet.
              </p>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col gap-4 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={getProductImageUrl(product.image, {
                            width: 160,
                            height: 160,
                          })}
                          alt={product.image.alt || product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ${product.price.toFixed(2)} · {product.category.replace(/-/g, " ")}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {product.image.publicId}
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleDeleteProduct(product.id)}
                      disabled={deletingProductId === product.id}
                    >
                      {deletingProductId === product.id ? "Deleting..." : "Delete product"}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
