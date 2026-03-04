import FeaturedCategories from "@/components/home/FeaturedCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BulkOrders from "@/components/home/SpecialOffers";
import AboutSection from "@/components/home/AboutSection";
import Statistics from "@/components/home/Statistics";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import SuppliersGrid from "@/components/home/SuppliersGrid";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <WhyChooseUs />
      <BulkOrders />
      <AboutSection />
      <Statistics />
      <BrandsCarousel />
      <SuppliersGrid />
      <Testimonials />
      <Newsletter />
      <ContactCTA />
      <Footer />
    </main>
  );
}
