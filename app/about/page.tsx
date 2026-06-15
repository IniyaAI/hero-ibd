import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  AboutStoryQuote,
  AboutStorySection,
  AboutTeamSection,
} from "@/components/about/AboutStorySection";
import { PAGE_HEADERS } from "@/lib/site-content";

const teamMembers = [
  {
    name: "Aashritha I.",
    title: "Co-Founder",
    image: "/images/founders/aashritha.jpg",
  },
  {
    name: "Srihitha P.",
    title: "Co-Founder",
    image: "/images/founders/srihita.jpg",
  },
  {
    name: "Iniya R.",
    title: "Chief Technology Officer",
    image: "/images/team/iniya.png",
    imageClassName: "object-cover object-[center_10%]",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...PAGE_HEADERS.about} />
        <AboutStorySection />
        <AboutStoryQuote />
        <AboutTeamSection members={teamMembers} />
      </main>
      <Footer />
    </>
  );
}
