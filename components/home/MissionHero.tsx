import { Button } from "@/components/ui/Button";
import { Heart, Sparkles, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: "162,347+", label: "People reached", icon: Users },
  { value: "15+", label: "Events hosted", icon: Sparkles },
  { value: "3+", label: "Communities engaged", icon: Heart },
  { value: "$1,500+", label: "Funds raised", icon: TrendingUp },
];

export function MissionHero() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-coral-soft)] rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 -left-32 w-72 h-72 bg-[var(--color-lavender-soft)] rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--color-coral-soft)] rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container-full relative">
        <div className="pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--color-line)] shadow-[var(--shadow-sm)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-coral)] animate-pulse" />
            <span className="tagline-brand">501(c)(3) youth-led nonprofit</span>
          </div>

          <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-plum)] mb-6">
            Where awareness{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[var(--color-coral)]">leads to action</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-coral-soft)]" viewBox="0 0 200 12" fill="currentColor" preserveAspectRatio="none">
                <path d="M0 8 Q 50 0, 100 8 T 200 8 V 12 H 0 Z" />
              </svg>
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--color-plum-light)] text-pretty mb-10">
            Promoting earlier diagnosis and better outcomes for people with chronic
            illness through youth-led awareness, education, and support.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button href="/get-involved#donate" size="lg">
              <Heart className="w-5 h-5" />
              Donate now
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Our story
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-white/70 backdrop-blur-sm rounded-[var(--radius-lg)] p-6 border border-[var(--color-line)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-[var(--radius)] bg-[var(--color-wash)] flex items-center justify-center text-[var(--color-lavender-deep)] group-hover:bg-[var(--color-lavender-soft)] transition-colors">
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
                <dd className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold tabular-nums leading-none text-[var(--color-plum)]">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm font-medium text-[var(--color-plum-muted)]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
