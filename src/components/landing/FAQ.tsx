import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an Agency Account?",
    answer: "An Agency Account is a verified Meta Business Account with Agency Trust Level. These accounts benefit from higher spending limits, lower ban risk, and priority support from Meta.",
  },
  {
    question: "How does payment work?",
    answer: "You pay a monthly base fee of €150 plus a 2% fee on your top-ups. The funds are loaded directly to your account and can be used for Meta Ads. We accept all common payment methods.",
  },
  {
    question: "Are there spending limits?",
    answer: "No, with metanetworkagency.com Agency Accounts there are no artificial spending limits. You can scale your budget flexibly without hitting restrictions that are common with normal accounts.",
  },
  {
    question: "How secure are the accounts?",
    answer: "Our accounts undergo strict quality controls and are fully verified. The Agency Trust Level makes them significantly more stable than normal accounts. Additionally, we proactively monitor all accounts 24/7.",
  },
  {
    question: "Can I rent multiple accounts?",
    answer: "Yes, you can rent as many accounts as you need and manage them through our central dashboard. This is ideal for agencies or advertisers managing multiple brands or projects.",
  },
  {
    question: "What happens if an account gets banned?",
    answer: "In the unlikely event of an account ban, our expert support team is here to help. We handle communication with Meta and work on a quick resolution. For bans that are not your fault, we provide a replacement account.",
  },
  {
    question: "How quickly is my account ready to use?",
    answer: "After registration and your first top-up, your account is ready to use immediately. There are no waiting periods or manual approval processes.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "No, there is no minimum contract period. You can cancel your subscription monthly. Unused funds can be refunded within 30 days.",
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about metanetworkagency.com.
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