import { ArrowLeft, Mail, Globe, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";
import Footer from "@/components/landing/Footer";

const Impressum = () => {
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
              Zurück zur Startseite
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container-tight py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Impressum
          </h1>

          <div className="prose prose-slate max-w-none space-y-8">
            {/* Anbieter */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Angaben gemäß § 5 TMG
              </h2>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <p className="text-foreground font-semibold text-lg mb-2">Victu Agency GmbH</p>
                <p className="text-muted-foreground">
                  Karlstr. 17<br />
                  60329 Frankfurt am Main<br />
                  Deutschland
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Kontakt
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

            {/* Handelsregister */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Handelsregister
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>Registergericht: Amtsgericht Frankfurt am Main</p>
                <p>Registernummer: HRB 101048</p>
              </div>
            </section>

            {/* Geschäftsführung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Geschäftsführung
              </h2>
              <p className="text-muted-foreground">Matthias Müller</p>
            </section>

            {/* Umsatzsteuer */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="text-muted-foreground">
                USt-IdNr. gemäß § 27a Umsatzsteuergesetz: DE348860535
              </p>
            </section>

            {/* Verantwortlich für Inhalt */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="text-muted-foreground">
                <p>Matthias Müller</p>
                <p>Karlstr. 17</p>
                <p>60329 Frankfurt am Main</p>
              </div>
            </section>

            {/* EU Streitschlichtung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
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
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default Impressum;