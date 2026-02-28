"use client";

import { useTranslations } from "next-intl";

const STATS = [
  { id: 1, key: "years" as const },
  { id: 2, key: "projects" as const },
  { id: 3, key: "clients" as const },
  { id: 4, key: "products" as const },
];

export default function Statistics() {
  const t = useTranslations("Statistics");

  return (
    <section className="relative overflow-hidden bg-gray-50 px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      {/* Background Accent */}
      <div
        className="absolute left-0 top-0 h-full w-1/3"
        data-aos="fade-right"
        data-aos-duration="1500"
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#06ac5e]">
            {t("subtitle")}
          </span>
          <h2 className="text-stylish text-black">{t("title")}</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Value */}
              <div className="mb-4 overflow-hidden">
                <span
                  className="block text-5xl font-extralight text-black transition-all duration-1000 group-hover:-translate-y-2 sm:text-6xl lg:text-7xl"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 200}
                >
                  {t(`stats.${stat.key}.value`)}
                </span>
              </div>

              {/* Label */}
              <h3 className="mb-2 text-sm font-light uppercase tracking-wider  text-black">
                {t(`stats.${stat.key}.label`)}
              </h3>

              {/* Description */}
              <p className="text-xs text-black">
                {t(`stats.${stat.key}.description`)}
              </p>

              {/* Decorative Line */}
              <div className="mx-auto mt-6 h-px w-12 bg-black transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
