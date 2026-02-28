"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const SUPPLIERS = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
  logo: `/images/brand-logos/${i + 1}.png`,
}));

export default function SuppliersGrid() {
  const t = useTranslations("Suppliers");

  return (
    <section className="relative overflow-hidden bg-gray-50 px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-full " />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-emerald-600">
            {t("subtitle")}
          </span>
          <h2 className="text-stylish text-black">{t("title")}</h2>
          {/* <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black">
            {t("description")}
          </p> */}
        </div>

        {/* Suppliers Logo Grid */}
        <div
          className="grid grid-cols-2 gap-px bg-gray-200 sm:grid-cols-3 md:grid-cols-4 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {SUPPLIERS.map((supplier, index) => (
            <div
              key={supplier.id}
              className="group relative flex h-40 flex-col items-center justify-center bg-white p-8 transition-all duration-500  hover:z-10"
              // data-aos="fade-in"
              // data-aos-delay={100 + index * 50}
            >
              <div className="relative flex h-full w-full items-center justify-center grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
