import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/sections/Hero";
import { NotThis } from "../components/sections/NotThis";
import { Founder } from "../components/sections/Founder";
import { ExperienceFlow } from "../components/sections/ExperienceFlow";
import { VisualStory } from "../components/sections/VisualStory";
import { Community } from "../components/sections/Community";
import { FormatSection } from "../components/sections/Format";
import { TripsGrid } from "../components/sections/TripsGrid";
import { Gallery } from "../components/sections/Gallery";
import { SantaBarbaraBooking } from "../components/sections/SantaBarbaraBooking";
import { Testimonials } from "../components/sections/Testimonials";
import { FinalCta } from "../components/sections/FinalCta";
import { heroImage } from "../data/images";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero imageUrl={heroImage} />
        <NotThis />
        <Founder />
        <ExperienceFlow />
        <VisualStory />
        <Community />
        <FormatSection />
        <TripsGrid />
        <Gallery />
        <SantaBarbaraBooking />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
