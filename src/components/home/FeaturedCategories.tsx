"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getServices, SERVICE_GROUPS } from "@/data/services";
import type { Service } from "@/data/services";

export default function FeaturedCategories() {
  const t = useTranslations("FeaturedCategories");
  const locale = useLocale();
  // Show one service from each group as a featured preview
  const allServices = getServices(locale);
  const featured: Service[] = Object.keys(SERVICE_GROUPS)
    .map((groupKey) => allServices.find((s) => s.group === groupKey)!)
    .filter(Boolean);

  return (
    <section
      className="relative bg-white my-20 -pb-20 px-6 py-12 flex flex-col gap-16 sm:px-12 md:px-16 lg:px-20"
      data-aos="fade-up"
    >
      {/* Animated Bottom Border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-black"
        data-aos="scale-x-full"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
        data-aos-anchor-placement="bottom-bottom"
      />

      {/* Section Title */}
      <h2
        className="text-center text-stylish text-black"
        // data-aos="fade-up"
      >
        {t("title")}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {featured.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group block"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Container */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-100">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <div className="mt-6 text-center">
              <span className="text-sm font-medium tracking-wide text-black transition-colors group-hover:text-gray-600">
                {service.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/services"
          className="group text-center text-stylish text-sm! text-black relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-70"
        >
          {t("seeAll")}
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
    </section>
  );
}
