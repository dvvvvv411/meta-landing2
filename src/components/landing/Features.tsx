import { TrendingUp, ShieldCheck, Award, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Skalierbare Limits",
    description: "Höhere Spending Limits ohne künstliche Beschränkungen. Skalieren Sie Ihre Kampagnen nach Bedarf.",
  },
  {
    icon: ShieldCheck,
    title: "Geringes Sperrungsrisiko",
    description: "Agency Trust Level minimiert Account-Sperren erheblich. Mehr Stabilität für Ihre Kampagnen.",
  },
  {
    icon: Award,
    title: "Meta Agency Trust Level",
    description: "Premium-Verifizierung für maximale Stabilität und Vertrauen bei Meta.",
  },
  {
    icon: Zap,
    title: "Automatisiertes Dashboard & API",
    description: "Kampagnen-Management per intuitivem Dashboard oder programmatisch via API.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background relative">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">Vorteile</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Warum MetaNetwork?
          </h2>
          <p className="text-lg text-muted-foreground">
            Die Infrastruktur, die professionelle Advertiser für nachhaltiges Wachstum brauchen.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl glass-card hover-lift opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
