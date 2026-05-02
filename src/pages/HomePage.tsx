import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/sections/Hero";
import { NotThis } from "../components/sections/NotThis";
import { ExperienceFlow } from "../components/sections/ExperienceFlow";
import { VisualStory } from "../components/sections/VisualStory";
import { Community } from "../components/sections/Community";
import { FormatSection } from "../components/sections/Format";
import { TripsGrid } from "../components/sections/TripsGrid";
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
        <ExperienceFlow />
        <VisualStory />
        <Community />
        <FormatSection />
        <TripsGrid />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
