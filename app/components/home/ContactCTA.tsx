"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactCTA() {
  const t = useTranslations("Contact");

  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 sm:px-12 md:px-16 lg:px-20">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/images/banner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Decorative Line */}
        <div
          className="mx-auto mb-8 h-px w-20 bg-white/30"
          data-aos="scale-x"
          data-aos-duration="800"
        />

        {/* Section Header */}
        <div data-aos="fade-up">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400">
            {t("subtitle")}
          </span>
          <h2 className="text-stylish mb-6 text-white">{t("title")}</h2>
          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-gray-400">
            {t("description")}
          </p>
        </div>

        {/* Contact Options */}
        <div
          className="mb-12 grid gap-8 sm:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Phone */}
          <div className="group text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-gray-700 transition-colors duration-300 group-hover:border-white group-hover:bg-white">
              <svg
                className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white">
              {t("phone.title")}
            </h3>
            <p className="text-sm text-gray-500">{t("phone.value")}</p>
          </div>

          {/* Email */}
          <div className="group text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-gray-700 transition-colors duration-300 group-hover:border-white group-hover:bg-white">
              <svg
                className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white">
              {t("email.title")}
            </h3>
            <p className="text-sm text-gray-500">{t("email.value")}</p>
          </div>

          {/* Location */}
          <div className="group text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-gray-700 transition-colors duration-300 group-hover:border-white group-hover:bg-white">
              <svg
                className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-white">
              {t("location.title")}
            </h3>
            <p className="text-sm text-gray-500">{t("location.value")}</p>
          </div>
        </div>

        {/* CTA Button */}
        <div data-aos="fade-right" data-aos-delay="600">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 border border-white bg-transparent px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            {t("cta")}
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

        {/* Decorative Line */}
        <div
          className="mx-auto mt-12 h-px w-20 bg-white/30"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="600"
        />
      </div>
    </section>
  );
}
