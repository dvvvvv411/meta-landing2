import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Cpu, BadgeCheck } from "lucide-react";

const valueFeatures = [
  {
    icon: Shield,
    title: "Verifizierter Meta Agency Account",
    description: "Bereits geprüft und einsatzbereit"
  },
  {
    icon: TrendingUp,
    title: "Unbegrenzte Spending Limits",
    description: "Skalieren Sie ohne Einschränkungen"
  },
  {
    icon: Cpu,
    title: "Automatisiertes Dashboard & API",
    description: "Volle Kontrolle über Ihre Kampagnen"
  },
  {
    icon: BadgeCheck,
    title: "Meta Agency Trust Level",
    description: "Höchste Vertrauensstufe für Ihre Ads"
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container-tight relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            Preis
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Alles, was Sie brauchen. Ein fairer Preis.
          </h2>
          <p className="text-lg text-muted-foreground">
            Keine versteckten Kosten. Keine Überraschungen.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Subtle gradient border effect */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative glass-card rounded-3xl p-8 md:p-10 lg:p-12 border border-border/50">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                
                {/* Left: Value Features */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                    Was Sie bekommen
                  </h3>
                  <div className="space-y-5">
                    {valueFeatures.map((feature) => (
                      <div key={feature.title} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Pricing & CTA */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                    Preis
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl lg:text-6xl font-bold text-foreground">150€</span>
                      <span className="text-xl text-muted-foreground">/Monat</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      + <span className="font-semibold text-foreground">2%</span> Top-Up Fee
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button variant="hero" size="xl" className="w-full group mb-4" asChild>
                    <a href="https://web.metanetwork.agency" target="_blank" rel="noopener noreferrer">
                      Jetzt registrieren
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Volle Flexibilität. Monatlich kündbar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
