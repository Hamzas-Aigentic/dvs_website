import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessCarousel } from "@/components/sections/process-carousel";
import { Differentiators } from "@/components/sections/differentiators";
import { TechStack } from "@/components/sections/tech-stack";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloud />
        <ServicesGrid />
        <ProcessCarousel />
        <Differentiators />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
