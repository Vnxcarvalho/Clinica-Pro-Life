import AnimatedSection from "./AnimatedSection";
import espaco1 from "@/assets/espaco1.jpg";
import espaco2 from "@/assets/espaco2.jpg";
import espaco3 from "@/assets/espaco3.jpg";
import espaco4 from "@/assets/espaco4.jpg";
import espaco5 from "@/assets/espaco5.jpg";

const images = [
  { src: espaco1, alt: "Espaço da clínica 1" },
  { src: espaco2, alt: "Espaço da clínica 2" },
  { src: espaco3, alt: "Espaço da clínica 3" },
  { src: espaco4, alt: "Espaço da clínica 4" },
  { src: espaco5, alt: "Espaço da clínica 5" },
];

const SpaceSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Conheça Nosso Espaço</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Um ambiente acolhedor e moderno, projetado para o seu conforto e bem-estar.</p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <img src={images[0].src} alt={images[0].alt} className="rounded-lg object-cover w-full h-56 md:h-72 col-span-2 md:col-span-1" loading="lazy" />
          <img src={images[1].src} alt={images[1].alt} className="rounded-lg object-cover w-full h-56 md:h-72" loading="lazy" />
          <img src={images[2].src} alt={images[2].alt} className="rounded-lg object-cover w-full h-56 md:h-72" loading="lazy" />
          <img src={images[3].src} alt={images[3].alt} className="rounded-lg object-cover w-full h-56 md:h-72 col-span-1" loading="lazy" />
          <img src={images[4].src} alt={images[4].alt} className="rounded-lg object-cover w-full h-56 md:h-72 col-span-1 md:col-span-2" loading="lazy" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SpaceSection;
