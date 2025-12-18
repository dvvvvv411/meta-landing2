import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";
import Footer from "@/components/landing/Footer";

const Terms = () => {
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
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Terms & Conditions
            </h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
            {/* Scope */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 1 Scope of Application
              </h2>
              <p>
                (1) These General Terms and Conditions (hereinafter "GTC") apply to all contracts 
                between Victu Agency GmbH, Karlstr. 17, 60329 Frankfurt am Main (hereinafter "Provider") 
                and the customer (hereinafter "Customer") regarding the use of the MetaNetwork.Agency platform.
              </p>
              <p className="mt-2">
                (2) Deviating, conflicting, or supplementary GTC of the Customer shall only become part 
                of the contract if and to the extent that the Provider has expressly agreed to their 
                validity in writing.
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 2 Service Description
              </h2>
              <p>
                (1) The Provider provides the Customer with verified Meta Agency Accounts for advertising 
                purposes via the MetaNetwork.Agency platform.
              </p>
              <p className="mt-2">
                (2) The Customer receives access to an automated dashboard for managing their 
                advertising campaigns.
              </p>
              <p className="mt-2">
                (3) The exact scope of services is determined by the current service description 
                on the Provider's website.
              </p>
            </section>

            {/* Contract Formation */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 3 Contract Formation and Registration
              </h2>
              <p>
                (1) The presentation of services on the website does not constitute a legally binding 
                offer, but rather an invitation to submit an offer.
              </p>
              <p className="mt-2">
                (2) By registering on the platform, the Customer submits a binding offer to 
                conclude a usage agreement.
              </p>
              <p className="mt-2">
                (3) The contract is concluded when the Provider confirms registration and 
                activates access.
              </p>
            </section>

            {/* Prices and Payment */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 4 Prices and Payment Terms
              </h2>
              <p>
                (1) The prices stated on the website at the time of ordering apply. All 
                prices are net prices plus statutory VAT.
              </p>
              <p className="mt-2">
                (2) The monthly base fee is €150 net. Additionally, a top-up fee of 
                2% applies to all advertising budget top-ups.
              </p>
              <p className="mt-2">
                (3) Payment is made by direct debit, credit card, or invoice.
              </p>
              <p className="mt-2">
                (4) Invoices are due for payment within 14 days of the invoice date.
              </p>
            </section>

            {/* Customer Obligations */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 5 Customer Obligations
              </h2>
              <p>
                (1) The Customer undertakes to use the platform only for legal advertising purposes and 
                to comply with Meta's advertising guidelines.
              </p>
              <p className="mt-2">
                (2) The Customer is responsible for the content of their advertising campaigns.
              </p>
              <p className="mt-2">
                (3) The Customer must keep their access credentials confidential and protect them from 
                access by third parties.
              </p>
              <p className="mt-2">
                (4) The Customer must notify the Provider immediately of any changes to their contact details.
              </p>
            </section>

            {/* Liability */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 6 Liability
              </h2>
              <p>
                (1) The Provider is liable without limitation for damages arising from injury to life, 
                body, or health, as well as for damages caused intentionally or through gross negligence.
              </p>
              <p className="mt-2">
                (2) For damages caused by slight negligence, the Provider is only liable in the event of 
                breach of material contractual obligations. Liability is limited to typical, foreseeable 
                damage.
              </p>
              <p className="mt-2">
                (3) The Provider is not liable for damages resulting from bans or restrictions 
                imposed by Meta.
              </p>
            </section>

            {/* Contract Duration */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 7 Contract Duration and Termination
              </h2>
              <p>
                (1) The contract runs for an indefinite period and can be terminated by either party 
                with 30 days' notice to the end of the month.
              </p>
              <p className="mt-2">
                (2) The right to extraordinary termination for good cause remains unaffected.
              </p>
              <p className="mt-2">
                (3) Termination requires text form (email is sufficient).
              </p>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 8 Data Protection
              </h2>
              <p>
                Information on the processing of personal data can be found in our{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            {/* Final Provisions */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                § 9 Final Provisions
              </h2>
              <p>
                (1) The law of the Federal Republic of Germany applies, excluding the UN Convention 
                on Contracts for the International Sale of Goods.
              </p>
              <p className="mt-2">
                (2) The place of jurisdiction for all disputes arising from this contract is Frankfurt am Main, 
                provided that the Customer is a merchant, legal entity under public law, or 
                special fund under public law.
              </p>
              <p className="mt-2">
                (3) Should individual provisions of these GTC be or become invalid, the 
                validity of the remaining provisions shall remain unaffected.
              </p>
            </section>

            {/* Version */}
            <section className="pt-4 border-t border-border/50">
              <p className="text-sm">
                <strong>Last updated:</strong> December 2024
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default Terms;