import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clinic.jpg";

const WHATSAPP_LINK = "https://wa.me/5596991626261?text=Olá! Gostaria de agendar uma consulta.";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Interior da Clínica Pro-Life" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-32 text-center md:text-left md:max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
          Atendimento Individualizado e Exclusivo
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
          Clínica <span className="text-primary">Pro-Life</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 font-body max-w-lg">
          Cuidando da sua saúde com excelência, tecnologia e um olhar humano. Fisioterapia, Estética, Pilates e muito mais.
        </p>
        <p className="text-sm text-primary-foreground/60 mb-8 font-body">
          ⚠️ Não atendemos convênio
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <Phone className="h-5 w-5" /> Agende sua Consulta
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
