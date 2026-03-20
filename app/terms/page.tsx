import { PageLayout } from "@/components/page-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Lumina Aviation Holdings",
  description: "Terms and conditions governing the use of Lumina Aviation Holdings services and platforms.",
}

export default function TermsPage() {
  return (
    <PageLayout 
      title="Terms of Service" 
      subtitle="Please read these terms carefully before using our services."
      badge="Legal"
    >
      <div className="space-y-8 text-[#E2E8F0]/80">
        <p className="text-sm text-[#E2E8F0]/50">Last updated: March 2026</p>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing or using the services provided by Lumina Aviation Holdings Pty Ltd 
            (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service 
            (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">2. Description of Services</h2>
          <p className="leading-relaxed">
            Lumina Aviation Holdings provides aviation education platforms, compliance consulting, 
            custom software development, and related services. Our flagship platform, AviPrep, 
            offers digital learning solutions aligned with CASA (Civil Aviation Safety Authority) requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">3. User Accounts</h2>
          <p className="leading-relaxed mb-4">When you create an account with us, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly update any changes to your information</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content, features, and functionality of our services, including but not limited to 
            text, graphics, logos, software, and course materials, are owned by Lumina Aviation 
            Holdings and are protected by Australian and international intellectual property laws.
          </p>
          <p className="leading-relaxed mt-4">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, 
            or exploit any of our content without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">5. Payment Terms</h2>
          <p className="leading-relaxed mb-4">For paid services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prices are in Australian Dollars (AUD) unless otherwise stated</li>
            <li>Payment is due at the time of purchase or as specified</li>
            <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
            <li>Refunds are provided in accordance with Australian Consumer Law</li>
            <li>We reserve the right to modify pricing with reasonable notice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">6. Aviation Training Disclaimer</h2>
          <p className="leading-relaxed">
            While our educational content is designed to align with CASA requirements, it is 
            supplementary to formal aviation training. Users must:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Complete all required official training from accredited institutions</li>
            <li>Verify current regulatory requirements with CASA</li>
            <li>Not rely solely on our content for certification purposes</li>
            <li>Understand that aviation regulations may change</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">7. Prohibited Uses</h2>
          <p className="leading-relaxed mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the services for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the services</li>
            <li>Share your account credentials with others</li>
            <li>Copy or redistribute course materials</li>
            <li>Use automated systems to access our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">8. Limitation of Liability</h2>
          <p className="leading-relaxed">
            To the fullest extent permitted by Australian law, Lumina Aviation Holdings shall not 
            be liable for any indirect, incidental, special, consequential, or punitive damages 
            resulting from your use of or inability to use our services.
          </p>
          <p className="leading-relaxed mt-4">
            Our total liability for any claim arising from these Terms shall not exceed the amount 
            you paid us in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">9. Indemnification</h2>
          <p className="leading-relaxed">
            You agree to indemnify and hold harmless Lumina Aviation Holdings, its officers, 
            directors, employees, and agents from any claims, damages, losses, or expenses 
            arising from your use of our services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">10. Termination</h2>
          <p className="leading-relaxed">
            We may terminate or suspend your access to our services immediately, without prior 
            notice, for any reason, including breach of these Terms. Upon termination, your right 
            to use the services will cease immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">11. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of Queensland,
            Australia. Any disputes shall be subject to the exclusive jurisdiction of the 
            courts of Queensland.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">12. Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these Terms at any time. We will provide notice of 
            significant changes. Your continued use of our services after changes constitutes 
            acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">13. Contact Information</h2>
          <p className="leading-relaxed">
            For questions about these Terms, please contact us:
          </p>
          <div className="mt-4 p-6 rounded-xl bg-[#E2E8F0]/5 border border-[#E2E8F0]/10">
            <p className="font-medium text-[#E2E8F0]">Lumina Aviation Holdings Pty Ltd</p>
            <p className="mt-2">Email: legal@luminaaviation.com.au</p>
            <p>Registered Office: Cairns, QLD, Australia</p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
