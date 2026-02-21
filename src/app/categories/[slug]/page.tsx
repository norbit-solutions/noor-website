"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/products";
import CategoryHero from "@/components/products/CategoryHero";
import ProductGrid from "@/components/products/ProductGrid";
import Footer from "@/components/layout/Footer";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <CategoryHero categoryKey={category.key} />
      <ProductGrid categorySlug={slug} />
      <Footer />
    </main>
  );
}
