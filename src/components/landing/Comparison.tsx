import { Check, X } from "lucide-react";

const features = [
  {
    name: "Spending Limits",
    normal: "Begrenzt & variabel",
    metanetwork: "Unbegrenzt skalierbar",
  },
  {
    name: "Sperrungsrisiko",
    normal: "Hoch bei schneller Skalierung",
    metanetwork: "Minimal durch Agency Trust",
  },
  {
    name: "Trust Level",
    normal: "Standard",
    metanetwork: "Meta Agency Partner",
  },
  {
    name: "Support",
    normal: "Standard Meta Support",
    metanetwork: "Priorisierter Experten-Support",
  },
  {
    name: "Verifizierung",
    normal: "Persönliche Dokumente nötig",
    metanetwork: "Keine eigene Verifizierung",
  },
  {
    name: "Skalierbarkeit",
    normal: "Eingeschränkt",
    metanetwork: "Sofort & unbegrenzt",
  },
];

const Comparison = () => {
  return (
    <section id="vorteile" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-tight relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-4">Vergleich</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Der Unterschied macht's
          </h2>
          <p className="text-lg text-muted-foreground">
            Sehen Sie, warum MetaNetwork Agency Accounts Ihrem Standard-Account überlegen sind.
          </p>
        </div>

        {/* Single Card with Table */}
        <div className="glass-card rounded-3xl p-6 md:p-8 hover-lift max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-3 gap-4 pb-4 border-b border-border/50 mb-4">
            <div className="text-sm font-semibold text-muted-foreground">Feature</div>
            <div className="text-sm font-semibold text-muted-foreground text-center">Normaler Account</div>
            <div className="text-sm font-semibold text-primary text-center">MetaNetwork</div>
          </div>

          {/* Table Rows - Desktop */}
          <div className="hidden md:block space-y-1">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className={`grid grid-cols-3 gap-4 py-4 ${index !== features.length - 1 ? 'border-b border-border/30' : ''}`}
              >
                <div className="font-medium text-foreground">{feature.name}</div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground/70">
                  <X className="w-4 h-4 text-destructive/70 flex-shrink-0" />
                  <span className="text-sm">{feature.normal}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-foreground">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature.metanetwork}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="md:hidden space-y-4">
            {features.map((feature) => (
              <div key={feature.name} className="bg-muted/30 rounded-xl p-4 space-y-3">
                <div className="font-semibold text-foreground">{feature.name}</div>
                <div className="flex items-start gap-2 text-muted-foreground/70">
                  <X className="w-4 h-4 text-destructive/70 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-muted-foreground block mb-0.5">Normaler Account</span>
                    <span className="text-sm">{feature.normal}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-foreground">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-primary block mb-0.5">MetaNetwork</span>
                    <span className="text-sm">{feature.metanetwork}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
