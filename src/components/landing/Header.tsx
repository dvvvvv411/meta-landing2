import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";

const navLinks = [
  { href: "#how-it-works", label: "So funktioniert's" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#vorteile", label: "Vorteile" },
  { href: "#pricing", label: "Preise" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="container-tight">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Desktop Logo */}
          <button 
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:flex items-center"
          >
            <img 
              src={MetaNetworkLogo} 
              alt="MetaNetwork.Agency" 
              className="h-8 w-auto object-contain shrink-0"
            />
          </button>
          
          {/* Mobile: Zentriertes Logo */}
          <button 
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="md:hidden absolute left-1/2 -translate-x-1/2"
          >
            <img 
              src={MetaNetworkLogo} 
              alt="MetaNetwork.Agency" 
              className="h-7 w-auto object-contain shrink-0"
            />
          </button>
          
          {/* Spacer für Mobile (für Balance) */}
          <div className="w-10 md:hidden" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex text-slate-400 hover:text-white hover:bg-slate-800/50" asChild>
              <a href="https://web.metanetwork.agency" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button variant="hero" size="sm" className="hidden sm:inline-flex group" asChild>
              <a href="https://web.metanetwork.agency" target="_blank" rel="noopener noreferrer">
                Jetzt starten
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>

            {/* Mobile Hamburger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-slate-800/50">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-slate-950 border-slate-800 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-slate-800">
                    <img 
                      src={MetaNetworkLogo} 
                      alt="MetaNetwork.Agency" 
                      className="h-6 w-auto object-contain shrink-0"
                    />
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex-1 p-4">
                    <div className="flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-4 border-t border-slate-800 space-y-3">
                    <Button variant="ghost" className="w-full text-slate-400 hover:text-white hover:bg-slate-800/50" asChild>
                      <a href="https://web.metanetwork.agency" target="_blank" rel="noopener noreferrer">
                        Login
                      </a>
                    </Button>
                    <Button variant="hero" className="w-full group" asChild>
                      <a href="https://web.metanetwork.agency" target="_blank" rel="noopener noreferrer">
                        Jetzt starten
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
