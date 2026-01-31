import HeroSection from "./components/layout/HeroSection";
import FeaturedCategories from "./components/home/FeaturedCategories";
import AboutSection from "./components/home/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <AboutSection />
    </main>
  );
}
