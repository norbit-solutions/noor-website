import PartnersGrid from "@/components/partners/PartnersGrid";
import PartnersMarquee from "@/components/partners/PartnersMarquee";
import WhyPartner from "@/components/partners/WhyPartner";
import PartnersCTA from "@/components/partners/PartnersCTA";
import Footer from "@/components/layout/Footer";
import SecondaryHero from "@/components/layout/SecondaryHero";
import { useTranslations } from "next-intl";

export default function PartnersPage() {
  const t = useTranslations("PartnersPage");
  return (
    <main>
      <SecondaryHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        description={t("heroDescription")}
        titleHighlight={t("heroTitleHighlight")}
        image="/images/partners-bg.jpg"
      />
      <PartnersGrid />
      <PartnersMarquee />
      <WhyPartner />
      <PartnersCTA />
      <Footer />
    </main>
  );
}
