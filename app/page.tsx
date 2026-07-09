import { HeroSection } from "@/src/components/home/HeroSection";
import { ProductsSection } from "@/src/components/home/ProductsSection";
import { TechStackSection } from "@/src/components/home/TechStackSection";
import { TestimonialsSection } from "@/src/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <TechStackSection />
      <ProductsSection />
      <TestimonialsSection />
    </main>
  );
}
