"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
  categorySlug?: string;
}

export default function ProductCard({
  product,
  index = 0,
  categorySlug,
}: ProductCardProps) {
  const t = useTranslations("ProductsPage");

  return (
    <Link
      href={`/categories/${categorySlug || product.categorySlug}/${product.slug}`}
      className="group block"
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 80, 400)}
      data-aos-duration="800"
    >
      <div className="relative aspect-[4/5] w-full bg-[#f6f6f6] overflow-hidden mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* New Badge */}
        {product.isNew && (
          <span className="absolute left-3 top-3 z-10 bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            {t("new")}
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
          <span className="translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-transform duration-300 group-hover:translate-y-0">
            {t("viewDetails")}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-1">
        <h3 className="text-sm font-medium text-black group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <span className="text-sm text-[#06ac5e] mt-1 block">
          {product.categoryName}
        </span>
      </div>
    </Link>
  );
}
