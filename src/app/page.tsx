import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiverseApproaches from "@/components/DiverseApproaches";
import ProjectExamples from "@/components/ProjectExamples";
import LatestNews from "@/components/LatestNews";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DiverseApproaches />
        <ProjectExamples />
        <LatestNews />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
