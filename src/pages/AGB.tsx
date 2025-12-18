import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";
import Footer from "@/components/landing/Footer";

const AGB = () => {
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
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Allgemeine Geschäftsbedingungen
            </h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
            {/* Geltungsbereich */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 1 Geltungsbereich
              </h2>
              <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge 
                zwischen der Victu Agency GmbH, Karlstr. 17, 60329 Frankfurt am Main (nachfolgend "Anbieter") 
                und dem Kunden (nachfolgend "Kunde") über die Nutzung der Plattform MetaNetwork.Agency.
              </p>
              <p className="mt-2">
                (2) Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nur dann 
                Vertragsbestandteil, wenn und soweit der Anbieter ihrer Geltung ausdrücklich schriftlich 
                zugestimmt hat.
              </p>
            </section>

            {/* Leistungsbeschreibung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 2 Leistungsbeschreibung
              </h2>
              <p>
                (1) Der Anbieter stellt dem Kunden über die Plattform MetaNetwork.Agency verifizierte 
                Meta Agency Accounts zur Nutzung für Werbezwecke bereit.
              </p>
              <p className="mt-2">
                (2) Der Kunde erhält Zugang zu einem automatisierten Dashboard zur Verwaltung seiner 
                Werbekampagnen.
              </p>
              <p className="mt-2">
                (3) Der genaue Leistungsumfang ergibt sich aus der jeweils aktuellen Leistungsbeschreibung 
                auf der Website des Anbieters.
              </p>
            </section>

            {/* Vertragsschluss */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 3 Vertragsschluss und Registrierung
              </h2>
              <p>
                (1) Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot, 
                sondern eine Aufforderung zur Abgabe eines Angebots dar.
              </p>
              <p className="mt-2">
                (2) Durch die Registrierung auf der Plattform gibt der Kunde ein verbindliches Angebot zum 
                Abschluss eines Nutzungsvertrages ab.
              </p>
              <p className="mt-2">
                (3) Der Vertrag kommt zustande, wenn der Anbieter die Registrierung bestätigt und den 
                Zugang freischaltet.
              </p>
            </section>

            {/* Preise und Zahlung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 4 Preise und Zahlungsbedingungen
              </h2>
              <p>
                (1) Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen Preise. Alle 
                Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.
              </p>
              <p className="mt-2">
                (2) Die monatliche Grundgebühr beträgt 150 € netto. Zusätzlich fällt eine Auflade-Gebühr 
                von 2% auf alle Werbebudget-Aufladungen an.
              </p>
              <p className="mt-2">
                (3) Die Zahlung erfolgt per Lastschrift, Kreditkarte oder auf Rechnung.
              </p>
              <p className="mt-2">
                (4) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum zur Zahlung fällig.
              </p>
            </section>

            {/* Pflichten des Kunden */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 5 Pflichten des Kunden
              </h2>
              <p>
                (1) Der Kunde verpflichtet sich, die Plattform nur für legale Werbezwecke zu nutzen und 
                die Werberichtlinien von Meta einzuhalten.
              </p>
              <p className="mt-2">
                (2) Der Kunde ist für die Inhalte seiner Werbekampagnen selbst verantwortlich.
              </p>
              <p className="mt-2">
                (3) Der Kunde hat seine Zugangsdaten geheim zu halten und vor dem Zugriff Dritter zu schützen.
              </p>
              <p className="mt-2">
                (4) Der Kunde hat dem Anbieter Änderungen seiner Kontaktdaten unverzüglich mitzuteilen.
              </p>
            </section>

            {/* Haftung */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 6 Haftung
              </h2>
              <p>
                (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des 
                Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.
              </p>
              <p className="mt-2">
                (2) Für leicht fahrlässig verursachte Schäden haftet der Anbieter nur bei Verletzung 
                wesentlicher Vertragspflichten. Die Haftung ist auf den vertragstypischen, vorhersehbaren 
                Schaden begrenzt.
              </p>
              <p className="mt-2">
                (3) Der Anbieter haftet nicht für Schäden, die durch Sperrungen oder Einschränkungen 
                seitens Meta entstehen.
              </p>
            </section>

            {/* Vertragslaufzeit */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 7 Vertragslaufzeit und Kündigung
              </h2>
              <p>
                (1) Der Vertrag läuft auf unbestimmte Zeit und kann von beiden Parteien mit einer Frist 
                von 30 Tagen zum Monatsende gekündigt werden.
              </p>
              <p className="mt-2">
                (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
              <p className="mt-2">
                (3) Die Kündigung bedarf der Textform (E-Mail genügt).
              </p>
            </section>

            {/* Datenschutz */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 8 Datenschutz
              </h2>
              <p>
                Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
                <Link to="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>.
              </p>
            </section>

            {/* Schlussbestimmungen */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 9 Schlussbestimmungen
              </h2>
              <p>
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mt-2">
                (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Frankfurt am Main, 
                sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder 
                öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p className="mt-2">
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
                Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

            {/* Stand */}
            <section className="pt-4 border-t border-border/50">
              <p className="text-sm">
                <strong>Stand:</strong> Dezember 2024
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default AGB;