"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/app/data/products";
import ProductInfo from "@/app/components/products/ProductInfo";
import RecommendedProducts from "@/app/components/products/RecommendedProducts";
import Footer from "@/app/components/layout/Footer";

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
