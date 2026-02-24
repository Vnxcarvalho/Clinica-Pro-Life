import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { Zap, Target, Hand, Bandage, Radio, Sun } from "lucide-react";

const techniques = [
  { icon: Hand, title: "Cinesioterapia", desc: "Exercícios terapêuticos para reabilitação funcional" },
  { icon: Target, title: "Dry Needling", desc: "Agulhamento a seco para liberação de pontos-gatilho" },
  { icon: Zap, title: "Liberação Miofascial", desc: "Técnica manual para alívio de tensões musculares" },
  { icon: Bandage, title: "Bandagem Funcional", desc: "Suporte articular e muscular com fitas terapêuticas" },
  { icon: Radio, title: "Eletroterapia", desc: "Correntes elétricas para analgesia e recuperação" },
  { icon: Sun, title: "Laserterapia", desc: "Laser de baixa intensidade para cicatrização e dor" },
];

const TechniquesSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Métodos e Técnicas</h2>
      </AnimatedSection>
      <AnimatedSection className="text-center mb-14">
        <p className="text-primary font-display text-lg italic">"O equilíbrio perfeito entre a prática clínica e a ciência"</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniques.map((t) => (
          <AnimatedSection key={t.title}>
            <Card className="border-border/50 hover:border-primary/30 transition-colors bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <t.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechniquesSection;
