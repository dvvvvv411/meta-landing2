import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-tight py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={MetaNetworkLogo} 
              alt="metanetworkagency.com" 
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
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
            {/* Overview */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                1. Privacy at a Glance
              </h2>
              <h3 className="font-semibold text-foreground mt-4 mb-2">General Information</h3>
              <p>
                The following information provides a simple overview of what happens to your personal 
                data when you visit this website. Personal data is any data that can be used to 
                personally identify you.
              </p>
            </section>

            {/* Controller */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                2. Data Controller
              </h2>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <p className="font-semibold text-foreground">Victu Agency GmbH</p>
                <p>Karlstr. 17</p>
                <p>60329 Frankfurt am Main</p>
                <p className="mt-2">Email: info@metanetworkagency.com</p>
              </div>
              <p className="mt-4">
                The data controller is the natural or legal person who alone or jointly with others 
                decides on the purposes and means of processing personal data.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                3. Data Collection on This Website
              </h2>
              
              <h3 className="font-semibold text-foreground mt-4 mb-2">Server Log Files</h3>
              <p>
                The provider of these pages automatically collects and stores information in so-called 
                server log files, which your browser automatically transmits to us. These are:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname of the accessing computer</li>
                <li>Time of server request</li>
                <li>IP address</li>
              </ul>
              <p className="mt-2">
                This data is not merged with other data sources.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">Contact Form / Email Contact</h3>
              <p>
                When you contact us by email, your information including the contact details you 
                provided will be stored for the purpose of processing the inquiry and for possible 
                follow-up questions. We do not share this data without your consent.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                4. Cookies
              </h2>
              <p>
                Our website uses cookies. These are small text files that your web browser stores on 
                your device. Cookies help us make our offering more user-friendly, effective, 
                and secure.
              </p>
              <p className="mt-2">
                Some cookies are "session cookies." Such cookies are automatically deleted after your 
                browser session ends. Other cookies remain on your device until you delete them 
                yourself. These cookies help us recognize you when you return to our website.
              </p>
            </section>

            {/* Rights */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                5. Your Rights
              </h2>
              <p>You have the right at any time to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Obtain information about your data stored with us (Art. 15 GDPR)</li>
                <li>Request correction of inaccurate data (Art. 16 GDPR)</li>
                <li>Request deletion of your data (Art. 17 GDPR)</li>
                <li>Request restriction of processing (Art. 18 GDPR)</li>
                <li>Request data portability (Art. 20 GDPR)</li>
                <li>Object to processing (Art. 21 GDPR)</li>
                <li>Withdraw consent given (Art. 7(3) GDPR)</li>
              </ul>
            </section>

            {/* Complaints */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                6. Right to Complain to Supervisory Authority
              </h2>
              <p>
                If you believe that the processing of your data violates data protection law or your 
                data protection rights have been violated in any other way, you can complain to the 
                supervisory authority. In Hesse, this is the Hessian Data Protection Commissioner.
              </p>
            </section>

            {/* SSL */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                7. SSL Encryption
              </h2>
              <p>
                This site uses SSL encryption for security reasons and to protect the transmission of 
                confidential content. You can recognize an encrypted connection by the browser's 
                address bar changing from "http://" to "https://" and by the lock icon in your 
                browser bar.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                8. Updates to This Privacy Policy
              </h2>
              <p>
                This privacy policy is currently valid as of December 2024.
              </p>
              <p className="mt-2">
                Due to the further development of our website or due to changed legal or official 
                requirements, it may become necessary to change this privacy policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default Privacy;