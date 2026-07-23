import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorks from "../components/home/HowItWorks";
import APIShowcase from "../components/home/APIShowcase";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <APIShowcase />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;