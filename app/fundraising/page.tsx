import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, ArrowRight } from 'lucide-react';

export default function FundraisingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-0">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-paper/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-lg mb-2 block font-heading rotate-[-1deg]">Support Our Mission</span>
            <h1 className="text-7xl font-bold text-primary font-heading mb-4">
              Fundraising
            </h1>
            <p className="text-text text-xl font-body max-w-2xl mx-auto mb-8">
              Join us in supporting the Crohn's & Colitis Foundation through Take Steps, the largest nationwide fundraising event for IBD.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-heading text-2xl">
              <Heart className="w-8 h-8 text-accent fill-accent" />
              <span>Together, we move hope forward</span>
            </div>
          </div>

          {/* Fundraising Link Card */}
          <div className="sketch-card p-12 mb-12 text-center">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-primary mb-4 font-heading">Heroes for IBD Team</h2>
              <p className="text-text text-lg font-body mb-8 max-w-2xl mx-auto">
                Support our team as we participate in Take Steps to improve quality of life for those living with inflammatory bowel disease.
              </p>
            </div>
            
            <div className="bg-paper/50 rounded-lg p-12 mb-8 border-2 border-primary/20">
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-accent fill-accent" />
                </div>
                <div>
                  <p className="text-text font-body text-xl mb-6">
                    Visit our official fundraising page to donate, join our team, or start your own fundraiser.
                  </p>
                  <a
                    href="https://takesteps.crohnscolitisfoundation.org/team/19661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-btn bg-accent text-white px-12 py-5 text-3xl hover:rotate-1 inline-flex items-center gap-3"
                  >
                    Visit Fundraising Page
                    <ArrowRight className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-text/70 font-body text-sm">
              The fundraising page will open in a new tab
            </p>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="sketch-card p-8">
              <h3 className="text-4xl font-bold text-primary mb-4 font-heading">Why We Fundraise</h3>
              <p className="text-text font-body text-lg leading-relaxed mb-4">
                At Take Steps, we don't just walk — we move hope forward. Every dollar raised accelerates breakthroughs in IBD research, delivers trusted resources, and improves care for millions.
              </p>
              <p className="text-text font-body text-lg leading-relaxed">
                Together, we can build a future where Crohn's disease and ulcerative colitis no longer steal moments, dreams, or possibilities.
              </p>
            </div>

            <div className="sketch-card p-8">
              <h3 className="text-4xl font-bold text-primary mb-4 font-heading">How to Help</h3>
              <ul className="space-y-4 text-text font-body text-lg">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Donate</strong> to support our team's fundraising goal</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Join our team</strong> and walk alongside us</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Start your own fundraiser</strong> to amplify our impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span><strong>Share</strong> our mission with your network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
