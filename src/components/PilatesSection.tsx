import { Dumbbell, HeartPulse, Baby, PersonStanding, Smile } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const types = [
  { icon: Dumbbell, title: "Funcional", desc: "Treino dinâmico com foco em movimentos do dia a dia" },
  { icon: HeartPulse, title: "Clínico", desc: "Reabilitação e prevenção de lesões com orientação profissional" },
  { icon: Baby, title: "Gestantes", desc: "Exercícios seguros para o período gestacional e pós-parto" },
  { icon: PersonStanding, title: "Idosos", desc: "Melhora do equilíbrio, postura e qualidade de vida" },
  { icon: Smile, title: "Kids", desc: "Atividades lúdicas para desenvolvimento motor infantil" },
];

const PilatesSection = () => (
  <section id="pilates" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Pilates</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Modalidades para todas as idades e necessidades, com acompanhamento profissional individualizado.</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {types.map((t) => (
          <AnimatedSection key={t.title}>
            <div className="text-center p-6 rounded-xl bg-accent/30 border border-border/50 hover:bg-accent/60 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <t.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PilatesSection;
