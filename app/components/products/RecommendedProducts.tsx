"use client";

import { useTranslations } from "next-intl";
import { getRecommendedProducts } from "@/app/data/products";
import ProductCard from "./ProductCard";

interface RecommendedProductsProps {
  currentId: string;
  categorySlug?: string;
}

export default function RecommendedProducts({
  currentId,
  categorySlug,
}: RecommendedProductsProps) {
  const t = useTranslations("ProductDetail");

  const products = getRecommendedProducts(currentId, undefined, 4);

  if (products.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className=" px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-400 block mb-2">
            {t("recommendedSubtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-black">
            {t("recommended")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              categorySlug={categorySlug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
