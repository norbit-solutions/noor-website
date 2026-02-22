"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Product } from "@/data/products";
import ImageCarousel from "./ImageCarousel";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const t = useTranslations("ProductDetail");
  const pt = useTranslations("FeaturedProducts");

  const name = pt(`products.${product.nameKey}.name`);
  const category = pt(`products.${product.nameKey}.category`);
  const description = pt(`descriptions.${product.descriptionKey}`);

  return (
    <section className="bg-white">
      <div className="w-full flex flex-col gap-8">
        {/* Back button */}
        {/* <div className="mb-6">
          <Link
            href={`/categories/${product.category}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity uppercase tracking-widest"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            {t("backToCategory")}
          </Link>
        </div> */}

        {/* Images */}
        <div className="" data-aos="fade-up" data-aos-duration="800">
          <ImageCarousel images={product.images} alt={name} />
        </div>

        {/* Details */}
        <div
          className="grid lg:grid-cols-2 lg:gap-20 mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Title & Basic Info */}
          <div className="px-6 sm:px-8 lg:px-12">
            <h1 className="text-2xl sm:text-3xl font-medium text-black mb-4">
              {name}
            </h1>
            <div className="text-sm text-gray-500 mb-6">{category}</div>

            <div className="flex flex-col gap-2 text-sm mb-8">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">{t("sku")}:</span>
                <span className="font-medium text-black">{product.sku}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    product.inStock ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span className="font-medium text-black">
                  {product.inStock ? t("inStock") : t("availability")}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Description, Specs, CTA */}
          <div className=" flex flex-col gap-4 px-6 sm:px-8 lg:px-12">
            <div className="">
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Specifications */}
            {product.specs.length > 0 && (
              <div className="flex flex-col gap-6">
                <div className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100"
                    >
                      <span className="text-sm text-gray-500">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium text-black">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <Link
                href="/#contact"
                className="w-full flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest border border-black relative overflow-hidden group transition-colors"
              >
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  {t("requestQuote")}
                </span>
              </Link>
              <Link
                href="/#contact"
                className="w-full flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 relative overflow-hidden group transition-colors"
              >
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  {t("contactUs")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
