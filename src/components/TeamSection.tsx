import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import draRafaele from "@/assets/dra-rafaele.jpg";
import draGessica from "@/assets/dra-gessica.png";

const team = [
  {
    name: "Dra. Rafaele Ferreira",
    role: "Fisioterapeuta",
    register: "CREFITO: 293371.1F",
    desc: "Pós-graduada em traumato-ortopedia, especializada em tratamento de disfunções da coluna vertebral e instrutora de pilates. Sócia proprietária e administradora da Clínica Pro-Life.",
    img: draRafaele,
  },
  {
    name: "Dra. Géssica Viana",
    role: "Fisioterapeuta",
    register: "CREFITO: 336142.F",
    desc: "Fisioterapeuta, instrutora de pilates e sócia proprietária da Clínica Pro-Life.",
    img: draGessica,
  },
];

const TeamSection = () => (
  <section id="equipe" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Nossa Equipe</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Somos especialistas em fisioterapia avançada para que você viva o melhor da sua vida sem dores e sem limitações.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {team.map((t) => (
          <AnimatedSection key={t.name}>
            <Card className="overflow-hidden border-border/50 bg-card hover:shadow-lg transition-shadow">
              <div className="h-72 overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top" loading="lazy" />
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
