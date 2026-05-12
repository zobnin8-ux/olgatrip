import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CursorGlow } from "../components/motion/CursorGlow";
import { PageCurtain } from "../components/motion/PageCurtain";
import { Hero } from "../components/sections/Hero";
import { StatementMerged } from "../components/sections/StatementMerged";
import { FounderEditorial } from "../components/sections/FounderEditorial";
import { VisualCinematic } from "../components/sections/VisualCinematic";
import { TripsEditorial } from "../components/sections/TripsEditorial";
import { GalleryFilm } from "../components/sections/GalleryFilm";
import { BookingShell } from "../components/sections/BookingShell";
import { TestimonialsCinematic } from "../components/sections/TestimonialsCinematic";
import { FinalCtaCinematic } from "../components/sections/FinalCtaCinematic";
import { heroImage } from "../data/images";

export function HomePage() {
  return (
    <>
      <PageCurtain />
      <CursorGlow />
      <Header />
      <main>
        <Hero imageUrl={heroImage} />
        <StatementMerged />
        <FounderEditorial />
        <VisualCinematic />
        <TripsEditorial />
        <GalleryFilm />
        <BookingShell />
        <TestimonialsCinematic />
        <FinalCtaCinematic />
      </main>
      <Footer />
    </>
  );
}
