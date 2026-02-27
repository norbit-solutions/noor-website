"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className=" overflow-hidden bg-gray-50 px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Text Content */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="mb-8 text-stylish text-black ">{t("title")}</h2>
          <div className="space-y-6 text-gray-600 md:text-lg leading-relaxed">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="group text-center text-stylish text-sm! text-black relative  after:content-[''] after:absolute after:left-0 after:-bottom-1
         after:h-[2px] after:w-0 after:bg-current
         after:transition-all after:duration-300 hover:after:w-full cursor-pointer inline-flex items-center gap-2 text-sm! uppercase tracking-widest text-black transition-opacity hover:opacity-70"
            >
              {t("readMore")}
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
        </div>

        {/* Image Content */}
        <div className="flex-1" data-aos="fade-left">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-200">
            <Image
              src="/images/container.jpg"
              alt="À propos de M NOUR"
              fill
              className="object-cover transition-transform duration-1000 grayscale-75 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
