import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FisioterapiaSection from "@/components/FisioterapiaSection";
import TechniquesSection from "@/components/TechniquesSection";
import PilatesSection from "@/components/PilatesSection";
import AestheticsSection from "@/components/AestheticsSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <FisioterapiaSection />
      <TechniquesSection />
      <PilatesSection />
      <AestheticsSection />
      <TeamSection />
    </main>
    <FooterSection />
  </>
);

export default Index;
