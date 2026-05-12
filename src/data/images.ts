/**
 * Local gallery assets under /public/images/gallery. Warm, candid moods suit palette A.
 */
export const heroImage = "/images/gallery/22.png";

export const founderImage = "/images/olga.png";

/** Matches visual.items order in locales: road, pause, water, sunset, evening quiet */
export const visualImages = [
  "/images/gallery/20.png",
  "/images/gallery/12.png",
  "/images/gallery/07.png",
  "/images/gallery/03.png",
  "/images/gallery/08.png",
];

/** Matches trips.items order: ocean, California mini, far horizon, quiet celebration, with children */
export const tripImages = [
  "/images/gallery/28.png",
  "/images/gallery/31.png",
  "/images/gallery/10.png",
  "/images/gallery/14.png",
  "/images/gallery/18.png",
];

/** Full on-site gallery (01.png–40.png). */
export const galleryImages: string[] = Array.from({ length: 40 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/gallery/${n}.png`;
});

export const contactLinks = {
  instagram: "https://www.instagram.com/OlgaTrip/",
  telegram: "https://t.me/OlgaTripp",
  whatsapp: "https://wa.me/16507046231",
  facebook: "https://www.facebook.com/groups/1497800268529364/",
};

export const calendlyUrl = "https://calendly.com/oboykova/new-meeting";
