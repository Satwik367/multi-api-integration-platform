import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";

// These components will be added next
// import Integrations from "../components/landing/Integrations";
// import WhyChooseUs from "../components/landing/WhyChooseUs";
// import WorkflowPreview from "../components/landing/WorkflowPreview";
// import DashboardPreview from "../components/landing/DashboardPreview";
// import CTA from "../components/landing/CTA";
// import Footer from "../components/landing/Footer";

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09090B] text-white">
      <Navbar />
      <Hero />

      {/*
      <Integrations />
      <WhyChooseUs />
      <WorkflowPreview />
      <DashboardPreview />
      <CTA />
      <Footer />
      */}
    </main>
  );
}

export default Home;