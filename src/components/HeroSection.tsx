import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo-header.jpg";

const WHATSAPP_LINK = "https://wa.me/5596991626261?text=Olá! Gostaria de agendar uma consulta.";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Interior da Clínica Pro-Life" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/70" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <img src={logoImg} alt="Logo Clínica Pro-Life" className="w-64 md:w-80 mx-auto mb-8 drop-shadow-lg" />
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
          Clínica <span className="text-primary">Pro-Life</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-2 font-body max-w-2xl mx-auto">
          Seja bem vindo(a) à clínica Pro-Life, é um prazer tê-lo conosco!
        </p>
        <p className="text-base text-primary-foreground/70 mb-4 font-body max-w-2xl mx-auto">
          Possuímos um atendimento individualizado em sala exclusiva, profissional dedicado exclusivamente ao seu atendimento e tratamentos avançados que permitem alcançar com maior rapidez resultados mais eficazes.
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
