"use client";

import { useTranslations } from "next-intl";
import SecondaryHero from "../layout/SecondaryHero";

const CATEGORY_IMAGES: Record<string, string> = {
  generalSupplies: "/images/categories/stationery.jpg",
  professionalEquipment: "/images/categories/electronics.jpg",
  technicalMaterials: "/images/categories/car-parts.jpg",
  agriculturalProducts: "/images/categories/food-tin.jpg",
};

interface CategoryHeroProps {
  categoryKey: string;
}

export default function CategoryHero({ categoryKey }: CategoryHeroProps) {
  const t = useTranslations("ProductsPage");

  return (
    <SecondaryHero
      subtitle={t("heroSubtitle")}
      title={t(`categories.${categoryKey}`)}
      titleHighlight={t("heroTitleHighlight")}
      description={t("heroDescription")}
      image={
        CATEGORY_IMAGES[categoryKey] || "/images/categories/electronics.jpg"
      }
    />
  );
}
