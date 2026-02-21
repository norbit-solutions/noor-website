"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { PRODUCTS } from "@/app/data/products";
import ProductCard from "@/app/components/products/ProductCard";

const FEATURED_IDS = ["1", "2", "4", "6", "7"];
const featuredProducts = PRODUCTS.filter((p) => FEATURED_IDS.includes(p.id));

export default function FeaturedProducts() {
  const t = useTranslations("FeaturedProducts");
  return (
    <section className="relative bg-white mb-20 -pb-20 px-6 py-12 flex flex-col gap-16 sm:px-12 md:px-16 lg:px-20">
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-black"
        data-aos="scale-x-full"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
        data-aos-anchor-placement="bottom-bottom"
      />
      {/* Section Header */}
      <div className="text-center" data-aos="fade-up">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
          {t("subtitle")}
        </span>
        <h2 className="text-stylish text-black">{t("title")}</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-x-1 gap-y-8 lg:grid-cols-4">
        {featuredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 flex justify-center" data-aos="fade-up">
        <Link
          href="/products"
          className="group text-center text-stylish text-sm! text-black relative  after:content-[''] after:absolute after:left-0 after:-bottom-1
         after:h-[2px] after:w-0 after:bg-current
         after:transition-all after:duration-300 hover:after:w-full cursor-pointer inline-flex items-center gap-2 text-sm! uppercase tracking-widest text-black transition-opacity hover:opacity-70"
        >
          {t("viewAll")}
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
