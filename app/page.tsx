import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionHero } from "@/components/home/MissionHero";
import { PartnersSection } from "@/components/home/PartnersSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { PreviewSection } from "@/components/home/PreviewSection";
import { DonateCTA } from "@/components/home/DonateCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <MissionHero />
        <PillarsSection />
        <PreviewSection />
        <PartnersSection />
        <DonateCTA />
      </main>
      <Footer />
    </>
  );
}
