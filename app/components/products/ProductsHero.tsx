"use client";

import { useTranslations } from "next-intl";
import SecondaryHero from "../layout/SecondaryHero";

export default function ProductsHero() {
  const t = useTranslations("ProductsPage");

  return (
    <SecondaryHero
      subtitle={t("heroSubtitle")}
      title={t("heroTitle")}
      titleHighlight={t("heroTitleHighlight")}
      description={t("heroDescription")}
      image="/images/categories/electronics.jpg"
    />
  );
}
