import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logoHeader from "@/assets/logo-header.jpg";

const WHATSAPP_LINK = "https://wa.me/5596991626261?text=Olá! Gostaria de agendar uma consulta.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Fisioterapia", href: "#fisioterapia" },
  { label: "Pilates", href: "#pilates" },
  { label: "Estética", href: "#estetica" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logoHeader} alt="Logo Clínica Pro-Life" className="h-10" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
          <Button size="sm" className="gap-2">
            <Phone className="h-4 w-4" /> Agendar
          </Button>
        </a>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="font-display text-primary">Menu</SheetTitle>
            <ul className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 block">
              <Button className="w-full gap-2"><Phone className="h-4 w-4" /> Agendar Consulta</Button>
            </a>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
