"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const FEATURED_PARTNERS = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Partner ${i + 1}`,
  logo: `/images/brand-logos/${i + 1}.png`,
}));

export default function BrandsCarousel() {
  const t = useTranslations("Brands");

  return (
    <section className="bg-gray-50 px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#06ac5e]">
            {t("subtitle")}
          </span>
          <h2 className="text-stylish text-black">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
            {t("description")}
          </p>
        </div>

        {/* Featured Partners — Clean Grid */}
        <div
          className="mb-12 grid grid-cols-2 gap-px overflow-hidden bg-gray-200 sm:grid-cols-3 md:grid-cols-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {FEATURED_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="group relative flex h-32 items-center justify-center bg-white p-6 transition-all duration-500 "
            >
              <div className="relative h-full w-full opacity-40 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Partners Page */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="mb-6 text-sm text-gray-500">
            {t("partnering")}{" "}
            <span className="font-semibold text-[#06ac5e]">
              {t("brandsCount")}
            </span>{" "}
            {t("brandsLabel")}
          </p>
          <Link
            href="/partners"
            className="group inline-flex items-center gap-3 border border-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            {t("viewAll")}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
