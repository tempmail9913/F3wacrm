import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: August 18, 2025
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
        {/* Overview */}
        <section>
          <h2 className="text-lg font-semibold mb-2">1. Overview</h2>
          <p>
            This instance of wacrm is a self-hosted, private deployment operated
            solely for personal use. It is not offered as a service to the
            public. Access is restricted to the operator of this instance.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">2. Data Collected</h2>
          <p>
            This application processes WhatsApp messages, contact information,
            and related CRM data as part of its core functionality. All data is
            stored on the self-hosted infrastructure controlled by the operator.
            No data is sold, shared with, or disclosed to any third party.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">3. Third-Party Services</h2>
          <p>
            This application integrates with the WhatsApp Business API (provided
            by Meta) to send and receive messages. Use of the WhatsApp Business
            API is subject to{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              WhatsApp&apos;s Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://www.whatsapp.com/legal/business-terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              WhatsApp Business Terms of Service
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">4. Data Storage &amp; Security</h2>
          <p>
            All data is stored on infrastructure managed by the operator.
            Reasonable security measures are applied to protect stored data,
            including encryption in transit and at rest where supported by the
            hosting environment.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">5. Data Retention</h2>
          <p>
            Data is retained for as long as the operator deems necessary for
            personal use. The operator may delete any or all data at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">6. Contact</h2>
          <p>
            Since this is a private, self-hosted instance, there is no public
            contact point. The operator manages all data and privacy concerns
            directly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">7. Changes to This Policy</h2>
          <p>
            This privacy policy may be updated at any time. Changes take effect
            immediately upon being published on this page.
          </p>
        </section>
      </div>
    </main>
  );
}
