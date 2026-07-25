import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import WorkflowShowcase from "../components/landing/WorkflowShowcase";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-base)] text-[var(--color-ink)]">
      <Navbar />

      <div className="space-y-16">
        <Hero />
        <Features />
        <HowItWorks />
        <WorkflowShowcase />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}

export default Home;
