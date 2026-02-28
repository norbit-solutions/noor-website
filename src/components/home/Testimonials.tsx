"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TESTIMONIALS = [
  {
    id: 1,
    key: "client1" as const,
    avatar: "/images/users/user-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    key: "client2" as const,
    avatar: "/images/users/user-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    key: "client3" as const,
    avatar: "/images/users/user-3.jpg",
    rating: 5,
  },
];

const COUNT = TESTIMONIALS.length;

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);
  // Start with 1 (mobile-first); useEffect corrects to 3 on desktop
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const ipv = window.innerWidth >= 1024 ? 3 : 1;
      setItemsPerView(ipv);
      // Clamp current so it never exceeds the new slide count
      setCurrent((c) => Math.min(c, COUNT - ipv));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Number of slide positions available (e.g. 1 on desktop with 3 items + 3 per view)
  const totalSlides = COUNT - itemsPerView + 1;

  const go = useCallback(
    (index: number) => {
      if (locked) return;
      setLocked(true);
      setCurrent(((index % totalSlides) + totalSlides) % totalSlides);
      setTimeout(() => setLocked(false), 500);
    },
    [locked, totalSlides],
  );

  const prev = useCallback(() => go(current - 1), [current, go]);
  const next = useCallback(() => go(current + 1), [current, go]);

  // Auto-advance only when there is more than one slide
  useEffect(() => {
    if (totalSlides <= 1) return;
    const id = setTimeout(next, 5000);
    return () => clearTimeout(id);
  }, [current, next, totalSlides]);

  // --- Carousel math (no external library) ---
  // Track width  = (COUNT / itemsPerView) × 100% of the container
  // Item width   = (1 / COUNT) × 100% of the track  =  (1 / itemsPerView) × 100% of the container  ✓
  // translateX % is relative to the track itself:
  //   moving 1 item = containerWidth / itemsPerView pixels
  //                 = (1 / COUNT) × 100% of the track
  const trackWidth = `${(COUNT / itemsPerView) * 100}%`;
  const itemWidth = `${100 / COUNT}%`;
  const translateX = `translateX(-${(current * 100) / COUNT}%)`;

  return (
    <section className="bg-white px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      {/* Section Header */}
      <div className="mb-16 text-center" data-aos="fade-down">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#06ac5e]">
          {t("subtitle")}
        </span>
        <h2 className="text-stylish text-black">{t("title")}</h2>
      </div>

      {/* Carousel */}
      <div data-aos="fade-right">
        {/* Clip window — negative margin compensates for item padding edges */}
        <div className="overflow-hidden -mx-3">
          <div
            style={{
              width: trackWidth,
              transform: translateX,
              transition: "transform 500ms ease-in-out",
              display: "flex",
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                style={{ width: itemWidth }}
                className="px-3"
              >
                <div className="relative h-full overflow-hidden border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
                  {/* Decorative quote mark */}
                  <svg
                    className="absolute right-6 top-6 h-12 w-12 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Stars */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="mb-8 text-base leading-relaxed text-gray-600">
                    &ldquo;{t(`testimonials.${testimonial.key}.text`)}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 ring-2 ring-black/5">
                      <Image
                        src={testimonial.avatar}
                        alt={t(`testimonials.${testimonial.key}.name`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black">
                        {t(`testimonials.${testimonial.key}.name`)}
                      </h4>
                      <p className="text-xs text-[#06ac5e]">
                        {t(`testimonials.${testimonial.key}.role`)}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-black" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls — hidden on desktop when all items fit in one view */}
        {totalSlides > 1 && (
          <div className="mt-8 flex items-center justify-center gap-6">
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="group relative flex h-11 w-11 items-center justify-center border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-black hover:bg-black hover:shadow-lg active:scale-95"
            >
              <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-black opacity-0 transition-opacity duration-300 group-hover:border-white group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-black opacity-0 transition-opacity duration-300 group-hover:border-white group-hover:opacity-100" />
              <svg
                className="h-5 w-5 text-[#06ac5e] transition-colors duration-300 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-black"
                      : "w-2.5 bg-gray-300 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="group relative flex h-11 w-11 items-center justify-center border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-black hover:bg-black hover:shadow-lg active:scale-95"
            >
              <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-black opacity-0 transition-opacity duration-300 group-hover:border-white group-hover:opacity-100" />
              <span className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-black opacity-0 transition-opacity duration-300 group-hover:border-white group-hover:opacity-100" />
              <svg
                className="h-5 w-5 text-[#06ac5e] transition-colors duration-300 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
