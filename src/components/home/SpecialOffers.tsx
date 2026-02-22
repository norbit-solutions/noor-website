"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BulkOrders() {
  const t = useTranslations("SpecialOffers");

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <div
            className="max-w-xl text-center lg:text-left"
            data-aos="fade-right"
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400">
              {t("subtitle")}
            </span>
            <h2 className="text-stylish mb-6 text-white">{t("title")}</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              {t("description")}
            </p>

            {/* Benefits */}
            <div className="mb-10 flex flex-wrap justify-center gap-6 lg:justify-start">
              <div className="text-center">
                <span className="block text-4xl font-bold text-white">
                  {t("benefits.discount.value")}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  {t("benefits.discount.label")}
                </span>
              </div>
              <div className="h-16 w-px bg-gray-700" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-white">
                  {t("benefits.response.value")}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  {t("benefits.response.label")}
                </span>
              </div>
              <div className="h-16 w-px bg-gray-700" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-white">
                  {t("benefits.delivery.value")}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  {t("benefits.delivery.label")}
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-white border-2 border-white hover:border-white/50"
            >
              {t("requestQuote")}
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

          {/* Right Content - Services Grid */}
          <div
            className="w-full max-w-md border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm"
            data-aos="fade-left"
          >
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-white">
              {t("whatWeOffer")}
            </h3>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { key: "bulkSupply" },
                { key: "logistics" },
                { key: "b2bDeals" },
                { key: "partnership" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group border border-gray-700 cursor-grabbing bg-black p-4 text-center transition-all duration-300 hover:border-white/30 hover:bg-gray-800"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 200}
                >
                  {/* <span className="mb-2 block text-2xl">{item.icon}</span> */}
                  <h4 className="text-sm font-semibold text-white">
                    {t(`services.${item.key}.title`)}
                  </h4>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                    {t(`services.${item.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 border-t border-gray-800 pt-6 text-center">
              <span className="text-xs text-gray-500">
                {t("callForInquiries")}
              </span>
              <p className="mt-1 text-lg font-bold tracking-widest text-white">
                {t("phone")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
