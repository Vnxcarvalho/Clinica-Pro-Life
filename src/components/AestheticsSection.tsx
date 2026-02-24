import { Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import estetica1 from "@/assets/estetica1.jpg";
import estetica2 from "@/assets/estetica2.jpg";
import estetica3 from "@/assets/estetica3.jpg";
import estetica4 from "@/assets/estetica4.jpg";
import estetica5 from "@/assets/estetica5.jpg";

const facial = [
  "Limpeza de pele", "Peeling químico", "Peeling enzimático", "Microagulhamento",
  "Tratamento para melasma", "Drenagem método MSE", "Clareamento de áreas",
  "Harmonização facial e corporal", "Botox", "Bioestimulador de colágeno",
  "Preenchimento (ácido hialurônico)", "Harmonização íntima",
];

const corporal = [
  "Otomodelação", "Lifting nasal", "Lifting temporal", "Lifting retroauricular",
  "PEIM (microvasos)", "Tratamento para alopecia", "Tratamento com jato de plasma",
  "Soroterapia", "Tratamento para gordura localizada", "Tratamento para flacidez",
  "Tratamento para estrias", "Harmonização de glúteo", "Tratamento para hipertrofia muscular",
];

const AestheticsSection = () => (
  <section id="estetica" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Estética Facial e Corporal</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Procedimentos avançados para realçar sua beleza natural com segurança e profissionalismo.</p>
      </AnimatedSection>

      {/* Images */}
      <AnimatedSection className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <img src={estetica1} alt="Procedimento estético" className="rounded-lg object-cover w-full h-40" loading="lazy" />
          <img src={estetica2} alt="Procedimento estético" className="rounded-lg object-cover w-full h-40" loading="lazy" />
          <img src={estetica3} alt="Procedimento estético" className="rounded-lg object-cover w-full h-40" loading="lazy" />
          <img src={estetica4} alt="Procedimento estético" className="rounded-lg object-cover w-full h-40" loading="lazy" />
          <img src={estetica5} alt="Tratamento cosmético" className="rounded-lg object-cover w-full h-40 col-span-2 md:col-span-1" loading="lazy" />
        </div>
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
