"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const FEATURES = [
  {
    id: 1,
    key: "quality" as const,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    key: "speed" as const,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    key: "support" as const,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    key: "trust" as const,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  return (
    <section className="py-8 mb-10 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Images Composition */}
          <div
            className="relative h-[500px] lg:h-[600px] w-full rounded-3xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/banner.jpg"
                alt="Quality Products"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Secondary Image */}
            <div
              className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Image
                src="/images/categories/stationery.jpg"
                alt="Professional Equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 bg-white p-5 lg:p-6 rounded-2xl shadow-xl flex items-center gap-4 z-10"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-black text-white rounded-full flex items-center justify-center">
                <span className="text-xl lg:text-2xl font-bold">15+</span>
              </div>
              <div>
                <p className="text-xs lg:text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {t("stats.years")}
                </p>
                <p className="text-base lg:text-lg font-bold text-black">
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center">
            <div data-aos="fade-up" data-aos-duration="1000">
              <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-sm font-medium text-gray-900 mb-6">
                {t("subtitle")}
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
                {t("title")}{" "}
                <span className="font-semibold">{t("titleHighlight")}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                {t("description")}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.id}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  data-aos-duration="800"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-100"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {[
            { value: "15+", labelKey: "years" },
            { value: "50K+", labelKey: "products" },
            { value: "10K+", labelKey: "clients" },
            { value: "99%", labelKey: "satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-4xl md:text-5xl font-light text-black mb-3">
                {stat.value}
              </span>
              <span className="block text-sm font-medium uppercase tracking-widest text-gray-400">
                {t(`stats.${stat.labelKey}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
