"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactCTASection() {
  const t = useTranslations("ContactPage");

  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative px-6 sm:px-12 lg:px-20">
        <div className="text-center">
          <h2
            className="text-4xl font-light text-white mb-6 leading-tight md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t("ctaTitle")}
          </h2>
          <p
            className="mx-auto mb-12 max-w-2xl text-lg text-white/60 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {t("ctaDescription")}
          </p>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <Link
              href="tel:+23672000000"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-colors duration-300 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              {t("ctaButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
