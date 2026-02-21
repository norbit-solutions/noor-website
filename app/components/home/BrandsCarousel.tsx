"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const BRANDS = [
  { id: 1, name: "Samsung", logo: "/images/brands/samsung.png" },
  { id: 2, name: "LG", logo: "/images/brands/samsung.png" },
  { id: 3, name: "Sony", logo: "/images/brands/samsung.png" },
  { id: 4, name: "Philips", logo: "/images/brands/samsung.png" },
  { id: 5, name: "Bosch", logo: "/images/brands/samsung.png" },
  { id: 6, name: "Honda", logo: "/images/brands/samsung.png" },
  { id: 7, name: "Toyota", logo: "/images/brands/samsung.png" },
  { id: 8, name: "Nestle", logo: "/images/brands/samsung.png" },
];

export default function BrandsCarousel() {
  const t = useTranslations("Brands");

  return (
    <section className="overflow-hidden bg-gray-50 px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      {/* Section Header */}
      <div className="mb-16 text-center" data-aos="fade-right">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
          {t("subtitle")}
        </span>
        <h2 className="text-stylish text-black">{t("title")}</h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative" data-aos="fade-left" data-aos-delay="200">
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll">
          {/* First Set */}
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group mx-8 flex h-24 w-40 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-full w-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}

          {/* Duplicate Set for Seamless Loop */}
          {BRANDS.map((brand) => (
            <div
              key={`dup-${brand.id}`}
              className="group mx-8 flex h-24 w-40 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-full w-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Count */}
      <div
        className="mt-12 text-center"
        data-aos="fade-top"
        data-aos-delay="400"
      >
        <p className="text-sm text-gray-500">
          {t("partnering")}{" "}
          <span className="font-semibold text-black">{t("brandsCount")}</span>{" "}
          {t("brandsLabel")}
        </p>
      </div>
    </section>
  );
}
