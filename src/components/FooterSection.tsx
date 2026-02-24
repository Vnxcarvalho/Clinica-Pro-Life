import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5596991626261?text=Olá! Gostaria de agendar uma consulta.";

const FooterSection = () => (
  <footer id="contato" className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-4">Clínica Pro-Life</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Cuidando da sua saúde com excelência, tecnologia e um olhar humano.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
          <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
            <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Rua Euclides Rodrigues 1305, Nova Basília</span>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
            (96) 99162-6261
          </a>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Localização</h4>
          <div className="rounded-lg overflow-hidden border border-primary-foreground/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817!2d-51.066!3d0.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDInMDIuNCJOIDUxwrAwMyc1Ny42Ilc!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Clínica Pro-Life"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Clínica Pro-Life. Todos os direitos reservados.</p>
      </div>
    </div>

    {/* Floating WhatsApp Button */}
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  </footer>
);

export default FooterSection;
