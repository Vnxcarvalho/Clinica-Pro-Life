import { Stethoscope, Activity, Apple, Brain, Mic2, Sparkles, Dumbbell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Stethoscope, title: "Consulta Médica", desc: "Avaliação clínica completa e personalizada" },
  { icon: Activity, title: "Fisioterapia", desc: "Tratamento ortopédico, esportivo e pélvico" },
  { icon: Apple, title: "Nutrição", desc: "Acompanhamento nutricional individualizado" },
  { icon: Brain, title: "Psicologia", desc: "Saúde mental e bem-estar emocional" },
  { icon: Mic2, title: "Fonoaudiologia", desc: "Reabilitação da fala e audição" },
  { icon: Sparkles, title: "Estética", desc: "Procedimentos faciais e corporais avançados" },
  { icon: Dumbbell, title: "Pilates", desc: "Funcional, clínico, gestantes, idosos e kids" },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Nossos Serviços</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Oferecemos uma gama completa de serviços de saúde e bem-estar com profissionais qualificados.</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title}>
            <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
