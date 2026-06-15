import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionHero } from "@/components/home/MissionHero";
import { PartnersSection } from "@/components/home/PartnersSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { StoriesOfImpactSection } from "@/components/home/StoriesOfImpactSection";
import { DonateCTA } from "@/components/home/DonateCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <MissionHero />
        <PillarsSection />
        <StoriesOfImpactSection />
        <PartnersSection />
        <DonateCTA />
      </main>
      <Footer />
    </>
  );
}
