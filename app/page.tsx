import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionHero } from "@/components/home/MissionHero";
import { PillarsSection } from "@/components/home/PillarsSection";
import { PreviewSection } from "@/components/home/PreviewSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { DonateCTA } from "@/components/home/DonateCTA";
import { PartnersSection } from "@/components/home/PartnersSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <MissionHero />
        <ImpactSection />
        <PillarsSection />
        <PreviewSection />
        <DonateCTA />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
