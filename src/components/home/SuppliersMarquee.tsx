"use client";

import { useTranslations } from "next-intl";
import PartnersMarquee from "@/components/partners/PartnersMarquee";

export default function SuppliersMarquee() {
  const t = useTranslations("Suppliers");
  return (
    <PartnersMarquee
      subtitle={t("subtitle")}
      title={t("title")}
      bg="bg-white"
    />
  );
}
