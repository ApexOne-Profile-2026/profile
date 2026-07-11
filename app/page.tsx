import { ClientsSection } from "@/src/components/home/ClientsSection";
import { HeroSection } from "@/src/components/home/HeroSection";
import { ProductsSection } from "@/src/components/home/ProductsSection";
import { TechStackSection } from "@/src/components/home/TechStackSection";
// Temporary: hide Testimonials on home page
// import { TestimonialsSection } from "@/src/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <ProductsSection />
      <ClientsSection />
      <TechStackSection />
      {/* <TestimonialsSection /> */}
    </main>
  );
}
