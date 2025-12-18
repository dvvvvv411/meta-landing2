import { TrendingUp, ShieldCheck, Award, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Scalable Limits",
    description: "Higher spending limits without artificial restrictions. Scale your campaigns as needed.",
  },
  {
    icon: ShieldCheck,
    title: "Low Ban Risk",
    description: "Agency Trust Level significantly reduces account bans. More stability for your campaigns.",
  },
  {
    icon: Award,
    title: "Meta Agency Trust Level",
    description: "Premium verification for maximum stability and trust with Meta.",
  },
  {
    icon: Zap,
    title: "Automated Dashboard & API",
    description: "Campaign management via intuitive dashboard or programmatically via API.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background relative">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">Benefits</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why MetaNetwork?
          </h2>
          <p className="text-lg text-muted-foreground">
            The infrastructure professional advertisers need for sustainable growth.
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