import { PageLayout } from "@/components/page-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Lumina Aviation Holdings",
  description: "Learn how Lumina Aviation Holdings collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <PageLayout 
      title="Privacy Policy" 
      subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
      badge="Legal"
    >
      <div className="space-y-8 text-[#E2E8F0]/80">
        <p className="text-sm text-[#E2E8F0]/50">Last updated: March 2026</p>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Lumina Aviation Holdings Pty Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting 
            your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website and use our services.
          </p>
          <p className="leading-relaxed mt-4">
            We comply with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) 
            and other applicable privacy laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">2. Information We Collect</h2>
          <p className="leading-relaxed mb-4">We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, and contact details</li>
            <li>Business name and professional information</li>
            <li>Payment information for transactions</li>
            <li>Usage data and analytics</li>
            <li>Communications you send to us</li>
            <li>Information provided through our aviation training platforms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">3. How We Use Your Information</h2>
          <p className="leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process transactions and send related information</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">4. Information Sharing</h2>
          <p className="leading-relaxed">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Service providers who assist in our operations</li>
            <li>Professional advisers (lawyers, accountants, auditors)</li>
            <li>Regulatory authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">5. Data Security</h2>
          <p className="leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            These measures include encryption, secure servers, and regular security assessments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">6. Your Rights</h2>
          <p className="leading-relaxed mb-4">Under Australian privacy law, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">7. Cookies and Tracking</h2>
          <p className="leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our website and 
            store certain information. You can instruct your browser to refuse all cookies or to 
            indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">8. Third-Party Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the 
            privacy practices of these external sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">9. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">10. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 p-6 rounded-xl bg-[#E2E8F0]/5 border border-[#E2E8F0]/10">
            <p className="font-medium text-[#E2E8F0]">Lumina Aviation Holdings Pty Ltd</p>
            <p className="mt-2">Email: privacy@luminaaviation.com.au</p>
            <p>Registered Office: Cairns, QLD, Australia</p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
