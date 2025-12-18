import { UserPlus, Wallet, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register",
    description: "Create your account in just a few minutes — fully automated with no support contact required.",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Rent Account & Add Funds",
    description: "Choose your plan and securely deposit your advertising budget.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch Campaigns",
    description: "Start running your Meta Ads immediately — your account is ready to go.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Go Live in 3 Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            Our automated onboarding process gets you up and running quickly.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-border via-primary/30 to-border" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-card shadow-card flex items-center justify-center border border-border/50">
                    <item.icon className="w-9 h-9 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;