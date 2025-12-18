import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";

const footerLinks = {
  navigation: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Benefits", href: "#benefits" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Legal Notice", href: "/legal-notice" },
  ],
};

interface FooterProps {
  hideCTA?: boolean;
}

const Footer = ({ hideCTA = false }: FooterProps) => {
  return (
    <footer className="relative">
      {/* CTA Banner - Clean & Elegant */}
      {!hideCTA && (
      <div className="border-t border-border/30">
        <div className="container-tight py-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-background to-accent/5 border border-border p-6 md:p-8 shadow-sm">
            
            {/* Accent Line Top */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
            
            {/* Subtle Dot Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.04) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Headline */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-5">
                Create your account now and start with scalable Meta Advertising in just a few minutes.
              </p>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                className="group"
                asChild
              >
                <a href="https://web.metanetworkagency.com" target="_blank" rel="noopener noreferrer">
                  Register for free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              {/* Trust Elements */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-5 text-muted-foreground text-xs md:text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  Ready instantly
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  GDPR compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  24h Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Main Footer */}
      <div className="bg-secondary/20 border-t border-border/30">
        <div className="container-tight py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center mb-4">
                <img 
                  src={MetaNetworkLogo} 
                  alt="metanetworkagency.com" 
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Premium Meta Ads Accounts for professional performance marketing. Secure, scalable, ready to use instantly.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30">
          <div className="container-tight py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} metanetworkagency.com. All rights reserved.
              </p>
              
              {/* Status Indicator */}
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="group-hover:text-foreground transition-colors">
                  All systems operational
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;