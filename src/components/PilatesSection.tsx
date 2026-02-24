import AnimatedSection from "./AnimatedSection";
import pilatesMain from "@/assets/pilates-main.jpg";
import pilatesClinico from "@/assets/pilates-clinico.jpg";
import pilatesGestantes from "@/assets/pilates-gestantes.jpg";
import pilatesIdosos from "@/assets/pilates-idosos.jpg";
import pilatesKids from "@/assets/pilates-kids.jpg";

const types = [
  { img: pilatesMain, title: "Pilates Funcional", desc: "Treino dinâmico com foco em movimentos do dia a dia" },
  { img: pilatesClinico, title: "Pilates Clínico", desc: "Reabilitação e prevenção de lesões com orientação profissional" },
  { img: pilatesGestantes, title: "Gestantes", desc: "Exercícios seguros para o período gestacional e pós-parto" },
  { img: pilatesIdosos, title: "Idosos", desc: "Melhora do equilíbrio, postura e qualidade de vida" },
  { img: pilatesKids, title: "Kids", desc: "Atividades lúdicas para desenvolvimento motor infantil" },
];

const PilatesSection = () => (
  <section id="pilates" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Pilates</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Modalidades para todas as idades e necessidades, com acompanhamento profissional individualizado.</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {types.map((t) => (
          <AnimatedSection key={t.title}>
            <div className="rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-shadow bg-card">
              <img src={t.img} alt={t.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5 text-center">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PilatesSection;
