import ProductsHero from "@/app/components/products/ProductsHero";
import ProductGrid from "@/app/components/products/ProductGrid";
import Footer from "@/app/components/layout/Footer";

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <ProductGrid />
      <Footer />
    </main>
  );
}
