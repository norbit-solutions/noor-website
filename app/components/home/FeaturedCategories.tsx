"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CATEGORIES = [
  {
    id: 1,
    key: "generalSupplies" as const,
    image: "/images/categories/electronics.jpg",
    link: "/categories/general-supplies",
  },
  {
    id: 2,
    key: "professionalEquipment" as const,
    image: "/images/categories/car-parts.jpg",
    link: "/categories/professional-equipment",
  },
  {
    id: 3,
    key: "technicalMaterials" as const,
    image: "/images/categories/stationery.jpg",
    link: "/categories/technical-materials",
  },
  {
    id: 4,
    key: "agriculturalProducts" as const,
    image: "/images/categories/food-tin.jpg",
    link: "/categories/agricultural-products",
  },
];

export default function FeaturedCategories() {
  const t = useTranslations("FeaturedCategories");

  return (
    <section className="relative bg-white my-20 -pb-20 px-6 py-12 flex flex-col gap-16 sm:px-12 md:px-16 lg:px-20">
      {/* Animated Bottom Border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] bg-black"
        data-aos="scale-x-full"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
        data-aos-anchor-placement="bottom-bottom"
      />

      {/* Section Title */}
      <h2 className="text-center text-stylish text-black" data-aos="fade-up">
        {t("title")}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category, index) => (
          <Link
            key={category.id}
            href={category.link}
            className="group block"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Container */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-100">
              <Image
                src={category.image}
                alt={t(`categories.${category.key}`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Title */}
            <div className="mt-6 text-center">
              <span className="text-sm font-medium tracking-wide text-black transition-colors group-hover:text-gray-600">
                {t(`categories.${category.key}`)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className=" w-full flex justify-center items-center">
        <h1
          data-aos="fade-up"
          className="text-center text-stylish text-sm! text-black relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1
         after:h-[2px] after:w-0 after:bg-current
         after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          {t("seeAll")}
        </h1>
      </div> */}
      <div className="mt-16 flex justify-center" data-aos="fade-up">
        <Link
          href="/products"
          className="group text-center text-stylish text-sm! text-black relative  after:content-[''] after:absolute after:left-0 after:-bottom-1
         after:h-[2px] after:w-0 after:bg-current
         after:transition-all after:duration-300 hover:after:w-full cursor-pointer inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-70"
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
