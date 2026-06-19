import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { EventImage } from "@/lib/events-content";

type EventImagePanelProps = {
  primaryImage?: EventImage;
  secondaryImage?: EventImage;
  className?: string;
};

function ImageSlot({
  image,
  priority = false,
  sizes,
  overlay = false,
}: {
  image?: EventImage;
  priority?: boolean;
  sizes: string;
  overlay?: boolean;
}) {
  if (image?.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[var(--color-wash)] via-white to-[#fdf7f9] ${
        overlay ? "p-2" : "p-6"
      }`}
      aria-hidden={overlay}
    >
      <ImageIcon
        className={`text-[var(--color-plum-muted)] ${overlay ? "h-4 w-4" : "h-8 w-8 opacity-40"}`}
        strokeWidth={1.5}
      />
      {!overlay && (
        <span className="text-center text-xs text-[var(--color-plum-muted)]">Photo coming soon</span>
      )}
    </div>
  );
}

export function EventImagePanel({ primaryImage, secondaryImage, className = "" }: EventImagePanelProps) {
  return (
    <div className={`relative aspect-video overflow-hidden bg-[var(--color-line)] ${className}`}>
      <div className="relative h-full w-full">
        <ImageSlot image={primaryImage} sizes="(max-width: 768px) 100vw, 560px" />
      </div>

      {secondaryImage && (
        <div className="absolute bottom-3 right-3 z-10 h-[28%] min-h-[4.5rem] w-[38%] min-w-[5.5rem] overflow-hidden rounded-xl border-2 border-white shadow-md">
          <div className="relative h-full w-full bg-[var(--color-line)]">
            <ImageSlot image={secondaryImage} sizes="200px" overlay />
          </div>
        </div>
      )}
    </div>
  );
}
