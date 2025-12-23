import { BarChart3, PieChart, Edit3, Activity, CheckCircle2, AlertCircle } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section id="dashboard" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container-tight relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">Dashboard</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Full Control Over Your Campaigns
          </h2>
          <p className="text-lg text-muted-foreground">
            An intuitive dashboard with everything you need for successful advertising.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Performance Chart Card */}
          <div className="p-6 rounded-3xl glass-card hover-lift opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">Performance Analytics</h3>
            </div>
            <div className="h-40 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/30 flex items-end justify-around p-4">
              {[35, 55, 40, 70, 50, 85, 65].map((height, i) => (
                <div 
                  key={i}
                  className="w-6 rounded-t-md bg-gradient-to-t from-primary to-primary/60"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Campaign Overview Card */}
          <div className="p-6 rounded-3xl glass-card hover-lift opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground">Campaign Overview</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm text-foreground">Summer Sale 2024</span>
                </div>
                <span className="text-xs text-green-500 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm text-foreground">Brand Awareness</span>
                </div>
                <span className="text-xs text-green-500 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-sm text-foreground">Retargeting Q4</span>
                </div>
                <span className="text-xs text-yellow-500 font-medium">Paused</span>
              </div>
            </div>
          </div>

          {/* Ad Editor Card */}
          <div className="p-6 rounded-3xl glass-card hover-lift opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Edit3 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">Ad Editor</h3>
            </div>
            <div className="rounded-2xl bg-background/50 border border-border/30 p-4">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-3 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Creative Preview</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-3/4 rounded bg-border/50" />
                <div className="h-3 w-1/2 rounded bg-border/50" />
              </div>
            </div>
          </div>

          {/* Account Health Card */}
          <div className="p-6 rounded-3xl glass-card hover-lift opacity-0 animate-fade-up md:col-span-2 lg:col-span-1" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="font-display font-semibold text-foreground">Account Health</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-foreground">Verification Status: Active</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-foreground">Spending Limit: Unlimited</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-foreground">Trust Level: Agency</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-foreground">Balance: $2,450 remaining</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="p-6 rounded-3xl glass-card hover-lift opacity-0 animate-fade-up lg:col-span-2" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground">Live Metrics</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/50 border border-border/30 text-center">
                <p className="text-2xl font-display font-bold text-foreground">$12.4k</p>
                <p className="text-xs text-muted-foreground">Spent Today</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30 text-center">
                <p className="text-2xl font-display font-bold text-foreground">3.8x</p>
                <p className="text-xs text-muted-foreground">Current ROAS</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30 text-center">
                <p className="text-2xl font-display font-bold text-foreground">847</p>
                <p className="text-xs text-muted-foreground">Conversions Today</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30 text-center">
                <p className="text-2xl font-display font-bold text-foreground">$14.62</p>
                <p className="text-xs text-muted-foreground">CPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
