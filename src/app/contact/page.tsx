import SecondaryHero from "@/components/layout/SecondaryHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/layout/Footer";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <main>
      <SecondaryHero
        subtitle={t("heroSubtitle")}
        title={t("heroTitle")}
        titleHighlight={t("heroTitleHighlight")}
        description={t("heroDescription")}
        image="/images/contact-banner.jpg"
        // stats={[
        //   { value: t("stats.responseValue"), label: t("stats.response") },
        //   { value: t("stats.clientsValue"), label: t("stats.clients") },
        //   { value: t("stats.citiesValue"), label: t("stats.cities") },
        //   { value: t("stats.supportValue"), label: t("stats.support") },
        // ]}
      />
      {/* <ContactForm /> */}
      <ContactInfo />
      <ContactMap />
      <ContactCTA />
      <Footer />
    </main>
  );
}
