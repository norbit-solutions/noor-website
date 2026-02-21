"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/app/data/products";
import ProductInfo from "@/app/components/products/ProductInfo";
import RecommendedProducts from "@/app/components/products/RecommendedProducts";
import Footer from "@/app/components/layout/Footer";

export default function CategoryProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; productSlug: string }>;
}) {
  const { slug, productSlug } = use(params);
  const product = getProductBySlug(productSlug);

  if (!product || product.category !== slug) {
    notFound();
  }

  return (
    <main>
      <ProductInfo product={product} />
      <RecommendedProducts currentId={product.id} categorySlug={slug} />
      <Footer />
    </main>
  );
}
