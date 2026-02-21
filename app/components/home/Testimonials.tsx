"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const TESTIMONIALS = [
  {
    id: 1,
    key: "client1" as const,
    avatar: "/images/avatars/avatar1.jpg",
    rating: 5,
  },
  {
    id: 2,
    key: "client2" as const,
    avatar: "/images/avatars/avatar2.jpg",
    rating: 5,
  },
  {
    id: 3,
    key: "client3" as const,
    avatar: "/images/avatars/avatar3.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  return (
    <section className="bg-white px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      {/* Section Header */}
      <div className="mb-16 text-center" data-aos="fade-down">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
          {t("subtitle")}
        </span>
        <h2 className="text-stylish text-black">{t("title")}</h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="group relative overflow-hidden border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-black hover:shadow-xl"
            data-aos="fade-right"
            data-aos-delay={index * 100}
          >
            {/* Quote Icon */}
            <svg
              className="absolute right-6 top-6 h-12 w-12 text-gray-100 transition-colors duration-500 group-hover:text-gray-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Rating Stars */}
            <div className="mb-6 flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="mb-8 text-gray-600 leading-relaxed">
              &ldquo;{t(`testimonials.${testimonial.key}.text`)}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
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
                <p className="text-xs text-gray-500">
                  {t(`testimonials.${testimonial.key}.role`)}
                </p>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-black transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
