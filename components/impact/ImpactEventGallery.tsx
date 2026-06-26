import { ImpactPhotoGallery } from "@/components/impact/ImpactPhotoGallery";
import { ImpactSectionHeading } from "@/components/impact/ImpactSectionHeading";
import { IMPACT_EVENT_HIGHLIGHTS, IMPACT_EVENT_INTRO } from "@/lib/impact-content";

const eventPhotos = IMPACT_EVENT_HIGHLIGHTS.map(({ src, alt, width, height }) => ({
  src,
  alt,
  width,
  height,
}));

export function ImpactEventGallery() {
  return (
    <section className="section-padding bg-white py-16 md:py-24 lg:py-28">
      <div className="container-full">
        <ImpactSectionHeading title="Event Highlights" subtitle={IMPACT_EVENT_INTRO} />
        <ImpactPhotoGallery photos={eventPhotos} />
      </div>
    </section>
  );
}
