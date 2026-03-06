"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const MARQUEE_PARTNERS = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  name: `Partner ${i + 1}`,
  logo: `/images/brand-logos/${i + 1}.png`,
}));

const ROW_1 = MARQUEE_PARTNERS.slice(0, 18);
const ROW_2 = MARQUEE_PARTNERS.slice(18, 36);

interface Props {
  subtitle?: string;
  title?: string;
  bg?: string;
}

export default function PartnersMarquee({
  subtitle,
  title,
  bg = "bg-white",
}: Props) {
  const t = useTranslations("PartnersPage");

  const displaySubtitle = subtitle ?? t("marqueeSubtitle");
  const displayTitle = title ?? t("marqueeTitle");

  //   const gradientFrom = bg === "bg-gray-50" ? "from-gray-50" : "from-white";

  const cardItem = (logo: string, name: string, key: string) => (
    <div
      key={key}
      className="group mx-4 flex h-20 w-36 shrink-0 items-center justify-center  px-4 transition-all duration-300 hover:border-[#06ac5e]/30 "
    >
      <div className="relative h-full w-full opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
        <Image src={logo} alt={name} fill className="object-contain p-1" />
      </div>
    </div>
  );

  return (
    <section className={`${bg} py-24`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#06ac5e]">
            {displaySubtitle}
          </span>
          <h2 className="text-stylish text-black">{displayTitle}</h2>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-6 overflow-hidden">
        <div
          className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24  to-transparent`}
        />
        <div
          className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24to-transparent`}
        />
        <div className="flex w-max animate-marquee-left">
          {ROW_1.map((p) => cardItem(p.logo, p.name, `r1a-${p.id}`))}
          {ROW_1.map((p) => cardItem(p.logo, p.name, `r1b-${p.id}`))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div
          className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 to-transparent`}
        />
        <div
          className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24  to-transparent`}
        />
        <div className="flex w-max animate-marquee-right">
          {ROW_2.map((p) => cardItem(p.logo, p.name, `r2a-${p.id}`))}
          {ROW_2.map((p) => cardItem(p.logo, p.name, `r2b-${p.id}`))}
        </div>
      </div>
    </section>
  );
}
