import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { User } from "lucide-react";

const team = [
  {
    name: "Dra. Rafaele Ferreira",
    role: "Fisioterapeuta",
    register: "CREFITO",
    desc: "Especialista em fisioterapia ortopédica e esportiva, com foco em reabilitação funcional e técnicas avançadas de tratamento.",
  },
  {
    name: "Dra. Géssica Viana",
    role: "Fisioterapeuta",
    register: "CREFITO",
    desc: "Especialista em fisioterapia pélvica e pilates clínico, dedicada ao cuidado integral e individualizado de cada paciente.",
  },
];

const TeamSection = () => (
  <section id="equipe" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Nossa Equipe</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Profissionais qualificados e dedicados ao seu bem-estar.</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {team.map((t) => (
          <AnimatedSection key={t.name}>
            <Card className="overflow-hidden border-border/50 bg-card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-display font-bold text-lg text-foreground">{t.name}</h3>
                <p className="text-primary text-sm font-medium mb-1">{t.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{t.register}</p>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
