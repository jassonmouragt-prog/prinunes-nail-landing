import Header from "@/components/Header";
import AmbientLight from "@/components/AmbientLight";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PainSection from "@/components/PainSection";
import TransitionPhrase from "@/components/TransitionPhrase";
import Transformation from "@/components/Transformation";
import Training from "@/components/Training";
import Build from "@/components/Build";
import Gallery from "@/components/Gallery";
import ImpactPhrase from "@/components/ImpactPhrase";
import Audience from "@/components/Audience";
import NotFor from "@/components/NotFor";
import Mentor from "@/components/Mentor";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import AnimationProvider from "@/components/AnimationProvider";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-text-primary">
      <AnimationProvider>
        <AmbientLight />
        <Header />
        <Hero />
        <Marquee />
        <PainSection />
        <TransitionPhrase />
        <Transformation />
        <Training />
        <Build />
        <Gallery />
        <ImpactPhrase />
        <Audience />
        <NotFor />
        <Mentor />
        <Results />
        <Testimonials />
        <Offer />
        <FAQ />
        <FinalCTA />
        <Footer />
        <StickyCTA />
      </AnimationProvider>
    </main>
  );
}