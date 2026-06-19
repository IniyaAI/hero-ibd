export type HeroGallerySlide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const SLIDE_FILES = [
  "slide-01.png",
  "slide-02.jpg",
  "slide-03.jpg",
  "slide-04.jpg",
  "slide-05.jpg",
  "slide-06.jpg",
  "slide-07.jpg",
  "slide-08.jpg",
  "slide-09.jpg",
  "slide-10.jpg",
  "slide-11.jpg",
  "slide-12.png",
  "slide-13.png",
  "slide-14.png",
  "slide-15.png",
  "slide-16.png",
  "slide-sticky-notes-heart.png",
  "slide-17.png",
  "slide-18.png",
  "slide-19.png",
  "slide-20.png",
  "slide-21.png",
  "slide-22.png",
  "slide-23.png",
] as const;

/** 1-based carousel position → object-position override */
const SLIDE_OBJECT_POSITIONS: Record<number, string> = {
  7: "center 32%",
  8: "center 18%",
  9: "center 24%",
  10: "center 20%",
};

/** All photos from Desktop/carousel 2 (+ sticky notes heart after slide 16) */
export const HERO_GALLERY_SLIDES: HeroGallerySlide[] = SLIDE_FILES.map((file, i) => {
  const index = i + 1;
  return {
    src: `/images/hero/carousel-2/${file}`,
    alt: `Heart to Heart community photo ${index}`,
    ...(SLIDE_OBJECT_POSITIONS[index]
      ? { objectPosition: SLIDE_OBJECT_POSITIONS[index] }
      : {}),
  };
});

/** @deprecated Use HERO_GALLERY_SLIDES */
export const HERO_STACKED_SLIDES = HERO_GALLERY_SLIDES;

/** @deprecated Use HERO_GALLERY_SLIDES */
export const HERO_CAROUSEL_SLIDES = HERO_GALLERY_SLIDES.map((slide) => ({
  src: slide.src,
  alt: slide.alt,
  caption: slide.alt,
}));
