import type { Metadata } from "next";

import AdminProductManager from "@/components/admin/AdminProductManager";

export const metadata: Metadata = {
  title: "Velora || Admin Products",
  description: "Admin product creation flow with Cloudinary image upload",
};

export default function AdminProductsNewPage() {
  return <AdminProductManager />;
}
