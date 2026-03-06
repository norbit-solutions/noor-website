"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PartnersCTA() {
  const t = useTranslations("PartnersPage");

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#06ac5e]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#06ac5e]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          className="mb-6 text-xl font-light uppercase tracking-[0.2em] text-white md:text-2xl"
          data-aos="fade-up"
        >
          {t("ctaTitle")}
        </h2>
        <p
          className="mb-10 text-sm leading-relaxed text-gray-400 md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("ctaDescription")}
        </p>
        <Link
          href="/contact"
          className="inline-block border border-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("ctaButton")}
        </Link>
      </div>
    </section>
  );
}
