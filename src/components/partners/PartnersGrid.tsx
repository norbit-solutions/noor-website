"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const ALL_PARTNERS = Array.from({ length: 56 }, (_, i) => ({
  id: i + 1,
  name: `Partner ${i + 1}`,
  logo: `/images/brands/${i + 1}.png`,
}));

export default function PartnersGrid() {
  const t = useTranslations("PartnersPage");

  return (
    <section className="bg-gray-50  py-24 ">
      <div className=" flex flex-col gap-8">
        {/* Section Header */}
        <div
          className="mb-4 text-center px-6 sm:px-12 md:px-16 lg:px-20"
          data-aos="fade-up"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#06ac5e]">
            {t("gridSubtitle")}
          </span>
          <h2 className="text-stylish text-black">{t("gridTitle")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
            {t("gridDescription")}
          </p>
        </div>

        {/* Partners Logo Grid */}
        <div
          className="grid grid-cols-3 px-6 md:px-0 w-full gap-px overflow-hidden  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {ALL_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="group relative flex aspect-square flex-col items-center justify-center bg-white p-6 transition-all duration-500 hover:z-10 "
            >
              <div className="relative flex h-full w-full items-center justify-center opacity-50 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Hover bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#06ac5e] transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Bottom count label */}
        <div
          className="mt-10 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-sm text-gray-500">
            {t("partnering")}{" "}
            <span className="font-semibold text-[#06ac5e]">
              {t("partnersCount")}
            </span>{" "}
            {t("partnersLabel")}
          </p>
        </div>
      </div>
    </section>
  );
}
