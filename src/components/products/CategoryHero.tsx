"use client";

import { useTranslations, useLocale } from "next-intl";
import { getCategoryBySlug } from "@/data/products";
import SecondaryHero from "../layout/SecondaryHero";

interface CategoryHeroProps {
  categorySlug: string;
}

export default function CategoryHero({ categorySlug }: CategoryHeroProps) {
  const t = useTranslations("ProductsPage");
  const locale = useLocale();
  const category = getCategoryBySlug(categorySlug, locale);

  return (
    <SecondaryHero
      subtitle={t("heroSubtitle")}
      title={category?.name ?? ""}
      titleHighlight={t("heroTitleHighlight")}
      description={t("heroDescription")}
      image={category?.image ?? "/images/product-banner.jpg"}
    />
  );
}
