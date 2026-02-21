"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutCTA() {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-24 lg:py-32 bg-black overflow-hidden">
      <div className=" px-6 sm:px-12 lg:px-20">
        <div className=" text-center">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t("ctaTitle")}
          </h2>
          <p
            className="text-lg text-white/60 mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {t("ctaDescription")}
          </p>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gray-100 transition-colors duration-300 rounded-full"
            >
              {t("ctaButton")}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
