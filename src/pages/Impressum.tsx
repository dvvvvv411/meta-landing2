import { ArrowLeft, Mail, Globe, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";
import Footer from "@/components/landing/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-tight py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={MetaNetworkLogo} 
              alt="MetaNetwork.Agency" 
              className="h-8 w-auto"
            />
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container-tight py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Legal Notice
          </h1>

          <div className="prose prose-slate max-w-none space-y-8">
            {/* Company Information */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Information according to § 5 TMG
              </h2>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <p className="text-foreground font-semibold text-lg mb-2">Victu Agency GmbH</p>
                <p className="text-muted-foreground">
                  Karlstr. 17<br />
                  60329 Frankfurt am Main<br />
                  Germany
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <a href="https://metanetwork.agency" className="hover:text-foreground transition-colors">
                    metanetwork.agency
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@metanetwork.agency" className="hover:text-foreground transition-colors">
                    info@metanetwork.agency
                  </a>
                </p>
              </div>
            </section>

            {/* Trade Register */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Trade Register
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>Registry Court: District Court Frankfurt am Main</p>
                <p>Registration Number: HRB 101048</p>
              </div>
            </section>

            {/* Management */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Managing Director
              </h2>
              <p className="text-muted-foreground">Matthias Müller</p>
            </section>

            {/* VAT */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                VAT Identification Number
              </h2>
              <p className="text-muted-foreground">
                VAT ID according to § 27a of the German VAT Act: DE348860535
              </p>
            </section>

            {/* Content Responsibility */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Responsible for Content according to § 55 para. 2 RStV
              </h2>
              <div className="text-muted-foreground">
                <p>Matthias Müller</p>
                <p>Karlstr. 17</p>
                <p>60329 Frankfurt am Main</p>
              </div>
            </section>

            {/* EU Dispute Resolution */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                EU Dispute Resolution
              </h2>
              <p className="text-muted-foreground">
                The European Commission provides a platform for online dispute resolution (ODR):{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground mt-2">
                Our email address can be found above in the legal notice.
              </p>
            </section>

            {/* Consumer Dispute Resolution */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Consumer Dispute Resolution
              </h2>
              <p className="text-muted-foreground">
                We are not willing or obliged to participate in dispute resolution proceedings 
                before a consumer arbitration board.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default LegalNotice;