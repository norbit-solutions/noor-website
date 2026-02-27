"use client";

import { useTranslations } from "next-intl";

export default function ContactMap() {
  const t = useTranslations("ContactPage.mapSection");

  return (
    <section className="bg-gray-50 py-24 lg:py-32 overflow-hidden">
      <div className="px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 text-center" data-aos="fade-down">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400">
            {t("subtitle")}
          </span>
          <h2 className="text-4xl font-light text-black mb-4 md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#06ac5e] leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Map */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Decorative frame corners */}
          <div className="absolute left-4 top-4 z-10 h-8 w-8 border-l-2 border-t-2 border-white/80" />
          <div className="absolute right-4 top-4 z-10 h-8 w-8 border-r-2 border-t-2 border-white/80" />
          <div className="absolute bottom-4 left-4 z-10 h-8 w-8 border-b-2 border-l-2 border-white/80" />
          <div className="absolute bottom-4 right-4 z-10 h-8 w-8 border-b-2 border-r-2 border-white/80" />

          <iframe
            title="NOOR Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63525.07975396938!2d18.5196!3d4.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1093702a0c2f19fb%3A0xf81c3eaaf7c41a8c!2sBangui%2C%20Central%20African%20Republic!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            className="h-[400px] w-full border-0 grayscale transition-all duration-500 hover:grayscale-0 lg:h-[500px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
