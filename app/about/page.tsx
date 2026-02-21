import OurStory from "../components/about/OurStory";
import FounderSection from "../components/about/FounderSection";
import AboutCTA from "../components/about/AboutCTA";
import Footer from "../components/layout/Footer";
import SecondaryHero from "../components/layout/SecondaryHero";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <main>
      <SecondaryHero
        subtitle={t("heroSubtitle")}
        title={t("heroTitle")}
        titleHighlight={t("heroTitleHighlight")}
        description={t("heroDescription")}
        image="/images/banner.jpg"
        stats={[
          { value: t("stats.foundedValue"), label: t("stats.founded") },
          { value: t("stats.clientsValue"), label: t("stats.clients") },
          { value: t("stats.productsValue"), label: t("stats.products") },
          {
            value: t("stats.satisfactionValue"),
            label: t("stats.satisfaction"),
          },
        ]}
      />
      <FounderSection />
      <OurStory />
      <AboutCTA />
      <Footer />
    </main>
  );
}
