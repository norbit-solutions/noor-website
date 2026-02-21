"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PRODUCTS = [
  {
    id: 1,
    key: "paperReam" as const,
    price: "3 500 FCFA",
    image: "/images/products/paper-ream.jpg",
    link: "#",
    isNew: true,
  },
  {
    id: 2,
    key: "printer" as const,
    price: "185 000 FCFA",
    image: "/images/products/printer.jpg",
    link: "#",
    isNew: false,
  },
  // {
  //   id: 3,
  //   key: "generator" as const,
  //   price: "450 000 FCFA",
  //   image: "/images/products/notebook.jpg",
  //   link: "#",
  //   isNew: true,
  // },
  {
    id: 4,
    key: "cornSeeds" as const,
    price: "25 000 FCFA",
    image: "/images/products/corn-seeds.jpg",
    link: "#",
    isNew: false,
  },
  // {
  //   id: 5,
  //   key: "inkCartridges" as const,
  //   price: "12 000 FCFA",
  //   image: "/images/products/bulb.jpg",
  //   link: "#",
  //   isNew: true,
  // },
  {
    id: 6,
    key: "officeFurniture" as const,
    price: "95 000 FCFA",
    image: "/images/products/office-furnitures.jpg",
    link: "#",
    isNew: false,
  },
  {
    id: 7,
    key: "technicalTools" as const,
    price: "35 000 FCFA",
    image: "/images/products/car-parts.jpg",
    link: "#",
    isNew: false,
  },
  // {
  //   id: 8,
  //   key: "fertilizer" as const,
  //   price: "18 000 FCFA",
  //   image: "/images/products/filter.jpg",
  //   link: "#",
  //   isNew: true,
  // },
];

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
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {PRODUCTS.map((product, index) => (
          <Link
            key={product.id}
            href={product.link}
            className="group block"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            {/* Image Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={t(`products.${product.key}.name`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* New Badge */}
              {product.isNew && (
                <span className="absolute left-3 top-3 bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {t("new")}
                </span>
              )}
              {/* Quick View Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                <span className="translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-transform duration-300 group-hover:translate-y-0">
                  {t("viewDetails")}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-1 text-center">
              <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                {t(`products.${product.key}.category`)}
              </span>
              <h3 className="text-sm font-medium text-black transition-colors group-hover:text-gray-600">
                {t(`products.${product.key}.name`)}
              </h3>
              <p className="text-sm font-semibold text-black">
                {product.price}
              </p>
            </div>
          </Link>
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
