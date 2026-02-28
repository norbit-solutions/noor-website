"use client";

import { useTranslations, useLocale } from "next-intl";
import { getRelatedServices } from "@/data/services";
import ServiceCard from "./ServiceCard";

interface RelatedServicesProps {
  currentId: string;
  group?: string;
}

export default function RelatedServices({
  currentId,
  group,
}: RelatedServicesProps) {
  const t = useTranslations("ServiceDetail");
  const locale = useLocale();

  const services = getRelatedServices(currentId, locale, group, 4);

  if (services.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div
        className="px-6 sm:px-8 lg:px-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-400 block mb-2">
            {t("relatedSubtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-black">
            {t("relatedTitle")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
