import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";
import Footer from "@/components/landing/Footer";

const Datenschutz = () => {
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
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Datenschutzerklärung
            </h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
            {/* Einleitung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-semibold text-foreground mt-4 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                2. Verantwortlicher
              </h2>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <p className="font-semibold text-foreground">Victu Agency GmbH</p>
                <p>Karlstr. 17</p>
                <p>60329 Frankfurt am Main</p>
                <p className="mt-2">E-Mail: info@metanetwork.agency</p>
              </div>
              <p className="mt-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam 
                mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </section>

            {/* Datenerfassung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                3. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="font-semibold text-foreground mt-4 mb-2">Server-Log-Dateien</h3>
              <p>
                Der Provider dieser Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">Kontaktformular / E-Mail-Kontakt</h3>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort 
                angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen 
                bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                4. Cookies
              </h2>
              <p>
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
                Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
                und sicherer zu machen.
              </p>
              <p className="mt-2">
                Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung 
                von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie 
                diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website 
                wiederzuerkennen.
              </p>
            </section>

            {/* Rechte */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                5. Ihre Rechte
              </h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                <li>Eine erteilte Einwilligung zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
            </section>

            {/* Beschwerderecht */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                6. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <p>
                Sollten Sie der Ansicht sein, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht 
                verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, 
                können Sie sich bei der Aufsichtsbehörde beschweren. In Hessen ist dies der Hessische 
                Beauftragte für Datenschutz und Informationsfreiheit.
              </p>
            </section>

            {/* SSL */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                7. SSL-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, 
                dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem 
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            {/* Aktualität */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                8. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024.
              </p>
              <p className="mt-2">
                Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher 
                beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung 
                zu ändern.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default Datenschutz;