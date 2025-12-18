import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was ist ein Agency Account?",
    answer: "Ein Agency Account ist ein verifizierter Meta Business Account mit Agency Trust Level. Diese Accounts profitieren von höheren Spending Limits, geringerem Sperrungsrisiko und bevorzugtem Support durch Meta.",
  },
  {
    question: "Wie funktioniert die Bezahlung?",
    answer: "Sie zahlen eine monatliche Grundgebühr von 150€ plus eine 2% Fee auf Ihre Top-Ups. Das Guthaben wird direkt auf Ihren Account geladen und kann für Meta Ads verwendet werden. Wir akzeptieren alle gängigen Zahlungsmethoden.",
  },
  {
    question: "Gibt es Spending Limits?",
    answer: "Nein, mit MetaNetwork Agency Accounts gibt es keine künstlichen Spending Limits. Sie können Ihr Budget flexibel skalieren, ohne auf Beschränkungen zu stoßen, die bei normalen Accounts üblich sind.",
  },
  {
    question: "Wie sicher sind die Accounts?",
    answer: "Unsere Accounts durchlaufen strenge Qualitätskontrollen und sind vollständig verifiziert. Durch den Agency Trust Level sind sie deutlich stabiler als normale Accounts. Zusätzlich überwachen wir alle Accounts 24/7 proaktiv.",
  },
  {
    question: "Kann ich mehrere Accounts mieten?",
    answer: "Ja, Sie können beliebig viele Accounts mieten und über unser zentrales Dashboard verwalten. Dies ist ideal für Agenturen oder Advertiser, die mehrere Brands oder Projekte betreuen.",
  },
  {
    question: "Was passiert bei einer Account-Sperrung?",
    answer: "Im unwahrscheinlichen Fall einer Account-Sperrung steht Ihnen unser Experten-Support zur Seite. Wir kümmern uns um die Kommunikation mit Meta und arbeiten an einer schnellen Lösung. Bei unverschuldeten Sperrungen stellen wir Ihnen einen Ersatz-Account bereit.",
  },
  {
    question: "Wie schnell ist mein Account einsatzbereit?",
    answer: "Nach der Registrierung und dem ersten Top-Up ist Ihr Account sofort einsatzbereit. Es gibt keine Wartezeiten oder manuelle Freigabeprozesse.",
  },
  {
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer: "Nein, es gibt keine Mindestlaufzeit. Sie können Ihr Abo monatlich kündigen. Nicht genutztes Guthaben kann innerhalb von 30 Tagen erstattet werden.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background relative">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Häufige Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles was Sie über MetaNetwork wissen müssen.
          </p>
        </div>

        {/* FAQ Accordion in single card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-6 md:p-8 border border-border/50">
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className={`border-b border-border/30 last:border-0 ${index === 0 ? '' : ''}`}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 px-4 rounded-lg hover:bg-muted/30 transition-colors group [&[data-state=open]]:bg-muted/20">
                    <div className="flex items-center gap-4 w-full">
                      <span className="text-primary font-mono text-sm font-semibold min-w-[28px]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display font-semibold text-foreground text-left flex-1">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16 pr-4 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
