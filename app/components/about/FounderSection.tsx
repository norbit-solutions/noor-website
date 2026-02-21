"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FounderSection() {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">
            {t("founderSubtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-black">
            {t("founderTitle")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left: Founder Image */}
          <div
            className="lg:col-span-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/banner.jpg"
                  alt={t("founderName")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Name overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {t("founderName")}
                  </h3>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    {t("founderRole")}
                  </p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-6 -left-6 w-24 h-24 opacity-10">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-black" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio Content */}
          <div
            className="lg:col-span-3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Born info */}
            <div
              className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-white shadow-sm mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <svg
                className="w-4 h-4 text-gray-400"
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
              <span className="text-sm text-gray-600">{t("founderBorn")}</span>
            </div>

            <div className="space-y-6">
              <p
                className="text-gray-600 text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                {t("founderBio1")}
              </p>
              <p
                className="text-gray-600 text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                {t("founderBio2")}
              </p>
              <p
                className="text-gray-600 text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
              >
                {t("founderBio3")}
              </p>
            </div>

            {/* Quote */}
            <div
              className="mt-12 pl-8 border-l-2 border-black"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <blockquote className="text-xl italic text-gray-800 font-light leading-relaxed">
                &ldquo;Business success comes from building genuine
                relationships based on trust, transparency, and mutual
                respect.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-black uppercase tracking-wider">
                — {t("founderName")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
