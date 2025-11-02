import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import ExploreMore from "@/components/ExploreMore";
import Comments from "@/components/Comments";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId === "explore" ? "explore" : sectionId === "contact" ? "contact" : "best-sellers");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={scrollToSection} currentSection={currentSection} />
      <Hero onShopClick={() => scrollToSection("home")} />
      <BestSellers />
      <ExploreMore />
      <Comments />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
