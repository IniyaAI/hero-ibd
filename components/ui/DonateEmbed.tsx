import { SITE } from "@/lib/site-content";

export function DonateEmbed() {
  return (
    <div className="mx-auto w-full max-w-[512px] overflow-hidden rounded-[var(--radius)] border hairline bg-white">
      <iframe
        src={SITE.donateUrl}
        title="Donate to Heart to Heart NPO"
        name="donateFrame"
        scrolling="yes"
        className="h-[512px] w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
