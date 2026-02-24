import { CheckCircle2, AlertCircle, Trophy, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import fisioOrtopedica from "@/assets/fisio-ortopedica.jpg";
import fisioJointPain from "@/assets/fisio-joint-pain.jpg";
import fisioColuna from "@/assets/fisio-coluna.jpg";
import fisioUrgencia from "@/assets/fisio-urgencia.jpg";
import fisioEsportiva from "@/assets/fisio-esportiva.jpg";
import fisioEsportiva2 from "@/assets/fisio-esportiva2.jpg";
import fisioPelvicaBg from "@/assets/fisio-pelvica-bg.jpg";
import fisioPelvica from "@/assets/fisio-pelvica.jpg";

const treatments = [
  "Hérnia de disco", "Dores na coluna", "Dores ciáticas",
  "Dores articulares: Bursites, tendinites e epicondilite",
  "Artrose", "Fibromialgia", "Discopatia",
  "Pós-operatório de cirurgias ortopédicas",
];

const FisioterapiaSection = () => (
  <section id="fisioterapia" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Fisioterapia Ortopédica</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Especializada no tratamento das principais disfunções ortopédicas com técnicas avançadas.</p>
      </AnimatedSection>

      {/* Ortopédica */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-3">
            <img src={fisioOrtopedica} alt="Fisioterapia ortopédica" className="rounded-lg object-cover w-full h-48" loading="lazy" />
            <img src={fisioJointPain} alt="Tratamento de dores articulares" className="rounded-lg object-cover w-full h-48" loading="lazy" />
            <img src={fisioColuna} alt="Tratamento de coluna" className="rounded-lg object-cover w-full h-48 col-span-2" loading="lazy" />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Tratamentos</h3>
          <div className="space-y-3">
            {treatments.map((t) => (
              <div key={t} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Urgência */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="flex gap-4 p-6 rounded-lg bg-accent/50 border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Atendimento de Urgência</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Coluna travada</li>
                  <li>• Torcicolo</li>
                  <li>• Entorses</li>
                </ul>
              </div>
            </div>
          </div>
          <img src={fisioUrgencia} alt="Atendimento de urgência" className="rounded-lg object-cover w-full h-64 order-1 md:order-2" loading="lazy" />
        </div>
      </AnimatedSection>

      {/* Esportiva */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="grid grid-cols-2 gap-3">
            <img src={fisioEsportiva} alt="Fisioterapia esportiva" className="rounded-lg object-cover w-full h-48" loading="lazy" />
            <img src={fisioEsportiva2} alt="Fisioterapia esportiva" className="rounded-lg object-cover w-full h-48" loading="lazy" />
          </div>
          <div className="flex gap-4 p-6 rounded-lg bg-accent/50 border border-border/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">Fisioterapia Esportiva</h4>
              <p className="text-sm text-muted-foreground">Manutenção, recuperação e prevenção de dores e lesões para atletas amadores e profissionais.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pélvica */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="flex gap-4 p-6 rounded-lg bg-accent/50 border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Fisioterapia Pélvica</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Incontinência urinária</li>
                  <li>• Bexiga hiperativa</li>
                  <li>• Pós-parto</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 order-1 md:order-2">
            <img src={fisioPelvicaBg} alt="Fisioterapia pélvica" className="rounded-lg object-cover w-full h-48" loading="lazy" />
            <img src={fisioPelvica} alt="Exercícios pélvicos" className="rounded-lg object-cover w-full h-48" loading="lazy" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FisioterapiaSection;
