"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useHeroAnimations } from "@/app/hooks/useHeroAnimations";

export default function HeroSection() {
  const t = useTranslations("Hero");

  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Animations
  useHeroAnimations({
    section: sectionRef,
    image: imageRef,
    subtitle: subtitleRef,
    description: descriptionRef,
    cta: ctaRef,
    scrollIndicator: scrollIndicatorRef,
    titleWords: titleWordsRef,
  });

  const words = t("title").split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      <div className="sticky bottom-0 h-screen w-full overflow-hidden">
        {/* Background */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/banner.jpg')` }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end pb-32 px-6 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-4xl">
            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
            >
              {t("subtitle")}
            </p>

            {/* Title */}
            <h1
              className="mb-8 text-2xl font-light tracking-wider leading-normal text-white sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ perspective: "1000px" }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    titleWordsRef.current[i] = el;
                  }}
                  className="mr-[0.3em] inline-block will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="mb-10 max-w-lg text-base leading-relaxed text-white/70 sm:text-sm tracking-wider"
            >
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gray-100"
              >
                {t("exploreCta")}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-white/30 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                {t("contactCta")}
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            ref={scrollIndicatorRef}
            className="hidden absolute bottom-12 left-1/2 -translate-x-1/2 md:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/50">
              {t("scroll")}
            </span>
            <div className="flex h-14 w-7 items-start justify-center rounded-full border border-white/30 p-2">
              <div className="h-2 w-1 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* Decorative fade + side lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent opacity-45" />
        <div className="absolute left-6 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-white/20 to-transparent lg:block" />
        <div className="absolute right-6 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-white/20 to-transparent lg:block" />
      </div>
    </section>
  );
}
