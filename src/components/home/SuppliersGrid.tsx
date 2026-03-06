"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const SUPPLIERS = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  name: `Supplier ${i + 1}`,
  logo: `/images/brand-logos/${i + 1}.png`,
}));

const ROW_A = SUPPLIERS.slice(0, 18);
const ROW_B = SUPPLIERS.slice(18, 36);

export default function SuppliersGrid() {
  const t = useTranslations("Suppliers");

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-emerald-600">
            {t("subtitle")}
          </span>
          <h2 className="text-stylish text-black">{t("title")}</h2>
        </div>
      </div>

      {/* Marquee Row 1 — Scrolls Left */}
      <div className="relative mb-4" data-aos="fade-left" data-aos-delay="100">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent" />
        <div className="flex animate-scroll-suppliers">
          {[...ROW_A, ...ROW_A].map((supplier, idx) => (
            <div
              key={`sa-${idx}`}
              className="group mx-3 flex h-20 w-36 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white px-4 transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
            >
              <div className="relative h-full w-full opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — Scrolls Right */}
      <div className="relative" data-aos="fade-right" data-aos-delay="200">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent" />
        <div className="flex animate-scroll-reverse-suppliers">
          {[...ROW_B, ...ROW_B].map((supplier, idx) => (
            <div
              key={`sb-${idx}`}
              className="group mx-3 flex h-20 w-36 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white px-4 transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
            >
              <div className="relative h-full w-full opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
