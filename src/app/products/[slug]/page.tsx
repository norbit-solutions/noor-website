"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import ProductInfo from "@/components/products/ProductInfo";
import RecommendedProducts from "@/components/products/RecommendedProducts";
import Footer from "@/components/layout/Footer";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductInfo product={product} />
      <RecommendedProducts
        currentId={product.id}
        categorySlug={product.category}
      />
      <Footer />
    </main>
  );
}
