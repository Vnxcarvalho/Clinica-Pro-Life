import { Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const facial = [
  "Limpeza de Pele", "Peeling Químico", "Microagulhamento", "Botox",
  "Preenchimento Facial", "Bioestimuladores", "Harmonização Facial", "Skinbooster",
];

const corporal = [
  "Drenagem Linfática", "Modeladora", "Radiofrequência", "Criolipólise",
  "Lipocavitação", "Massagem Relaxante", "Endermologia", "Carboxiterapia",
];

const AestheticsSection = () => (
  <section id="estetica" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Estética Facial e Corporal</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Procedimentos avançados para realçar sua beleza natural com segurança e profissionalismo.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Facial
          </h3>
          <ul className="space-y-3">
            {facial.map((f) => (
              <li key={f} className="flex items-center gap-3 text-foreground text-sm">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Corporal
          </h3>
          <ul className="space-y-3">
            {corporal.map((c) => (
              <li key={c} className="flex items-center gap-3 text-foreground text-sm">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AestheticsSection;
