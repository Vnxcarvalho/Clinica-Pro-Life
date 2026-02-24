import { CheckCircle2, AlertCircle, Trophy, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const treatments = [
  "Hérnia de disco", "Dores na coluna", "Artrose", "Fibromialgia",
  "Tendinites", "Lesões musculares", "Pós-operatório ortopédico",
  "Dores articulares", "Bursite", "Síndrome do túnel do carpo",
];

const subSections = [
  { icon: AlertCircle, title: "Atendimento de Urgência", desc: "Atendimento emergencial para dores agudas e lesões recentes com abordagem rápida e eficaz." },
  { icon: Trophy, title: "Fisioterapia Esportiva", desc: "Prevenção e reabilitação de lesões esportivas para atletas amadores e profissionais." },
  { icon: Heart, title: "Fisioterapia Pélvica", desc: "Tratamento especializado para disfunções do assoalho pélvico, incontinência e saúde íntima." },
];

const FisioterapiaSection = () => (
  <section id="fisioterapia" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Fisioterapia Ortopédica</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Tratamentos especializados com técnicas modernas e equipamentos de última geração para sua recuperação completa.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <AnimatedSection>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Tratamentos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {treatments.map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {subSections.map((s) => (
            <AnimatedSection key={s.title}>
              <div className="flex gap-4 p-5 rounded-lg bg-accent/50 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FisioterapiaSection;
