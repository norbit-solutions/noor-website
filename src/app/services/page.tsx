import Footer from "@/components/layout/Footer";
import SecondaryHero from "@/components/layout/SecondaryHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <main>
      <SecondaryHero
        subtitle={t("heroSubtitle")}
        title={t("heroTitle")}
        titleHighlight={t("heroTitleHighlight")}
        description={t("heroDescription")}
      />
      <ServiceGrid />
      <Footer />
    </main>
  );
}
