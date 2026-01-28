import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { TeamSection } from "@/components/TeamSection";
import { TriviaSection } from "@/components/TriviaSection";
import { StoriesSection } from "@/components/StoriesSection";
import { EventsPreview } from "@/components/EventsPreview";
import { FundraisingPreview } from "@/components/FundraisingPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-0">
      <Navbar />
      <HeroSection />

      {/* Sections stack cleanly with their own backgrounds */}
      <MissionSection />
      <StoriesSection />
      <TriviaSection />
      <TeamSection />
      <EventsPreview />
      <FundraisingPreview />

      <Footer />
    </main>
  );
}
