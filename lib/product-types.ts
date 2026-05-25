export type ProductImage = {
  publicId: string;
  url: string;
  width?: number;
  height?: number;
  format?: string;
  alt?: string;
};

export type AdminProduct = {
  id: number;
  name: string;
  price: number;
  discount: string;
  rating: number;
  reviews: string;
  category: string;
  description: string;
  image: ProductImage;
  createdAt: string;
};

export type AdminProductDraft = {
  name: string;
  price: string;
  discount: string;
  category: string;
  description: string;
};
