import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";
import metaIcon from "@/assets/metaicon.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40" />
      
      {/* Animated Gradient Orbs - Responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 sm:-left-32 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] orb-blue rounded-full blur-3xl animate-float-slow opacity-60" />
        <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] orb-violet rounded-full blur-3xl animate-float-slow opacity-50" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-1/3 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] orb-blue rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: "-2s" }} />
      </div>

      {/* Main Content */}
      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-slate-300">Infrastructure for Meta Ads</span>
            </div>

            {/* Headline */}
          <h1 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Meta Agency Accounts{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-accent">
              Ready to go.
            </span>
          </h1>

            {/* Subline */}
            <p 
              className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.3s" }}
            >
              Rent verified Meta Agency Accounts and create campaigns directly in our dashboard — automated, scalable, and ready to use instantly.
            </p>

            {/* Bullet Points */}
            <div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                "Scalable Limits",
                "Stable & Low Risk",
                "Automated Dashboard"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center neon-glow-blue-subtle">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="group relative rounded-2xl p-[1.5px] bg-gradient-to-r from-primary via-accent to-primary w-full sm:w-auto">
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative flex items-center justify-center gap-2 w-full h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-slate-950/80 backdrop-blur-sm hover:bg-slate-950/60 text-white text-base sm:text-lg font-semibold rounded-2xl transition-all"
                >
                  See Pricing
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-slate-700 bg-slate-800/30 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-600"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side: Large Dashboard Mockup */}
          <div className="relative flex items-center justify-center min-h-[400px] md:h-[550px] lg:h-[600px]">
            <div 
              className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[520px] opacity-0 animate-scale-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
                
                {/* Glass Shine Effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative">
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 bg-white/5 backdrop-blur-md">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-slate-400">MetaNetwork Dashboard</span>
                    <img src={metaIcon} alt="Meta" className="h-3 sm:h-4 w-auto" />
                  </div>

                  <div className="p-3 sm:p-4 md:p-5">
                    {/* Account Status Bar */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-slate-300">Account Status: <span className="text-green-400 font-medium">Verified</span></span>
                      </div>
                      <span className="text-xs text-slate-500">Agency ID: MN-4821</span>
                    </div>

                    {/* 4-Column Metrics Grid - 2x2 on mobile */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {[
                        { label: "Ad Spend", value: "€47,892", trend: "+12.5%", positive: true },
                        { label: "ROAS", value: "4.2x", trend: "+0.8x", positive: true },
                        { label: "Conversions", value: "1,247", trend: "+18%", positive: true },
                        { label: "CTR", value: "3.8%", trend: "+0.4%", positive: true },
                      ].map((metric, i) => (
                        <div 
                          key={i} 
                          className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors opacity-0 animate-fade-up"
                          style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                        >
                          <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider mb-0.5 sm:mb-1">{metric.label}</p>
                          <p className="font-display font-bold text-white text-xs sm:text-sm md:text-base">{metric.value}</p>
                          <span className={`text-[9px] sm:text-[10px] ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                            {metric.trend} ↑
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Performance Chart - Hidden on very small screens */}
                    <div className="hidden sm:block p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-3 sm:mb-4">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-[10px] sm:text-xs font-medium text-slate-400">Performance (7 Days)</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-500">€67,420 Total</span>
                      </div>
                      <div className="h-16 sm:h-24 flex items-end justify-between gap-1 sm:gap-2">
                        {[
                          { height: 45, day: "Mon" },
                          { height: 72, day: "Tue" },
                          { height: 58, day: "Wed" },
                          { height: 85, day: "Thu" },
                          { height: 65, day: "Fri" },
                          { height: 92, day: "Sat" },
                          { height: 78, day: "Sun" },
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full">
                            <div className="flex-1 w-full flex items-end">
                              <div 
                                className="w-full rounded-t-md bg-gradient-to-t from-primary to-accent animate-fade-up-bar"
                                style={{ 
                                  height: `${bar.height}%`,
                                  animationDelay: `${1 + i * 0.1}s`
                                }}
                              />
                            </div>
                            <span className="text-[9px] text-slate-500">{bar.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Two Column Info - Stacked on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {/* Active Campaigns */}
                      <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 sm:mb-2">Active Campaigns</p>
                        <div className="space-y-1.5 sm:space-y-2">
                          {[
                            { name: "Campaign Alpha", status: "green" },
                            { name: "Campaign Beta", status: "green" },
                          ].map((campaign, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <span className="text-[10px] sm:text-[11px] text-slate-300 truncate">{campaign.name}</span>
                              <div className={`w-1.5 h-1.5 rounded-full ${campaign.status === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 sm:mb-2">Recent Activity</p>
                        <div className="space-y-1.5 sm:space-y-2">
                          {[
                            { action: "Budget increased", time: "2m ago" },
                            { action: "New ad created", time: "15m ago" },
                          ].map((activity, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-400" />
                                <span className="text-[10px] sm:text-[11px] text-slate-300 truncate">{activity.action}</span>
                              </div>
                              <span className="text-[8px] sm:text-[9px] text-slate-500">{activity.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spend Limit Progress */}
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">Spend Limit</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400">€78,500 / €100,000</span>
                      </div>
                      <div className="h-1.5 sm:h-2 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent animate-grow-width origin-left"
                          style={{ width: "78.5%", animationDelay: "1.5s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;