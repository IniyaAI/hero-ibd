import { Button } from "@/components/ui/Button";

export function EventsCTA() {
  return (
    <section className="section-padding border-t hairline bg-white">
      <div className="container-full text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-plum)] md:text-3xl">Join Our Next Event</h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-plum-light)] leading-relaxed">
          Every event brings us closer to earlier diagnosis, stronger support systems, and greater awareness for
          chronic illnesses.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/get-involved#contact">Volunteer With Us</Button>
          <Button href="/get-involved#contact" variant="secondary">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
