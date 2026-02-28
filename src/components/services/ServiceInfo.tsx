"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Service } from "@/data/services";

interface ServiceInfoProps {
  service: Service;
}

export default function ServiceInfo({ service }: ServiceInfoProps) {
  const t = useTranslations("ServiceDetail");

  return (
    <section className="bg-white">
      <div className="w-full flex flex-col gap-8">
        {/* Hero Image */}
        <div
          className="relative h-[60svh] lg:h-[100svh] overflow-hidden"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {/* Header gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Details */}
        <div className="grid lg:grid-cols-2 lg:gap-20 mb-10">
          {/* Left: Title & Highlights */}
          <div
            className="px-6 sm:px-8 lg:px-12"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1 className="text-2xl sm:text-3xl font-medium text-black mb-4">
              {service.name}
            </h1>
            <div className="text-sm text-[#06ac5e] mb-6 capitalize">
              {service.group}
            </div>
          </div>

          {/* Right: Description, Highlights, CTA */}
          <div
            className="flex flex-col gap-4 px-6 sm:px-8 lg:px-12"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Highlights */}
            {service.highlights.length > 0 && (
              <div className="flex flex-col gap-6">
                <div className="space-y-3">
                  {service.highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100"
                    >
                      <span className="text-sm text-[#06ac5e]">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-black">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest border border-black relative overflow-hidden group transition-colors"
              >
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  {t("requestQuote")}
                </span>
              </Link>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 relative overflow-hidden group transition-colors"
              >
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  {t("contactUs")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
