import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-16 rounded-[2.5rem] glass-card border border-border/50 shadow-elevated">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Create your account now and start with scalable Meta Advertising in just a few minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
                <a href="https://web.metanetworkagency.com" target="_blank" rel="noopener noreferrer">
                  Register for free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No verification required · Ready instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;