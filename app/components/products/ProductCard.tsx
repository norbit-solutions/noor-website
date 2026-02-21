"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Product } from "@/app/data/products";

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
  const pt = useTranslations("FeaturedProducts");

  return (
    <Link
      href={`/categories/${categorySlug || product.category}/${product.slug}`}
      className="group block"
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 80, 400)}
      data-aos-duration="800"
    >
      <div className="relative aspect-[4/5] w-full bg-[#f6f6f6] overflow-hidden mb-4">
        <Image
          src={product.images[0]}
          alt={pt(`products.${product.nameKey}.name`)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="px-1">
        {product.isNew && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1 block">
            {t("new")}
          </span>
        )}
        <h3 className="text-sm font-medium text-black group-hover:text-gray-600 transition-colors">
          {pt(`products.${product.nameKey}.name`)}
        </h3>
        <span className="text-sm text-gray-500 mt-1 block">
          {pt(`products.${product.nameKey}.category`)}
        </span>
      </div>
    </Link>
  );
}
