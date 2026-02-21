"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OurStory() {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <span
              className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {t("storySubtitle")}
            </span>
            <h2
              className="text-4xl md:text-5xl font-light text-black mb-10 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {t("storyTitle")}
            </h2>

            <div
              className="space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("storyP1")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("storyP2")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("storyP3")}
              </p>
            </div>

            {/* Timeline Milestones */}
            <div
              className="mt-12 flex flex-wrap gap-8"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              {[
                { year: "2021", label: "Founded" },
                { year: "2022", label: "50+ Clients" },
                { year: "2023", label: "500+ Products" },
                { year: "2024", label: "Expanding" },
              ].map((milestone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                      {milestone.year}
                    </p>
                    <p className="text-sm font-semibold text-black">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Images */}
          <div className="relative h-[500px] lg:h-[650px]">
            {/* Main Image */}
            <div
              className="absolute top-0 right-0 w-4/5 h-3/4 rounded-3xl overflow-hidden shadow-2xl"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image
                src="/images/categories/electronics.jpg"
                alt="Our warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Secondary Image */}
            <div
              className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Image
                src="/images/categories/car-parts.jpg"
                alt="Our products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 right-8 w-28 h-28 rounded-2xl bg-gray-100 -z-10"
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
