import { PageLayout } from "@/components/page-layout"
import { Metadata } from "next"
import { Shield, CheckCircle, Award, FileCheck, AlertCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance | Lumina Aviation Holdings",
  description: "Our commitment to regulatory compliance and aviation safety standards.",
}

const complianceAreas = [
  {
    icon: Shield,
    title: "CASA Alignment",
    description: "All our aviation training content is meticulously aligned with Civil Aviation Safety Authority regulations and requirements."
  },
  {
    icon: FileCheck,
    title: "Australian Privacy Principles",
    description: "We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles in handling personal information."
  },
  {
    icon: Award,
    title: "Industry Standards",
    description: "Our platforms meet international aviation training standards and best practices."
  },
  {
    icon: Clock,
    title: "Continuous Updates",
    description: "We continuously monitor regulatory changes and update our content to reflect current requirements."
  },
]

export default function CompliancePage() {
  return (
    <PageLayout 
      title="Compliance" 
      subtitle="Our commitment to regulatory excellence and aviation safety"
      badge="Regulatory"
    >
      <div className="space-y-12 text-[#E2E8F0]/80">
        {/* Introduction */}
        <section>
          <p className="text-lg leading-relaxed">
            At Lumina Aviation Holdings, compliance is not just a requirement—it&apos;s a core value. 
            We are dedicated to maintaining the highest standards of regulatory compliance across 
            all our operations and portfolio companies, ensuring safety and integrity in everything we do.
          </p>
        </section>

        {/* Compliance Areas Grid */}
        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-8">Compliance Framework</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {complianceAreas.map((area) => (
              <div 
                key={area.title}
                className="p-6 rounded-xl bg-[#E2E8F0]/5 border border-[#E2E8F0]/10 hover:border-[#D4AF37]/30 transition-colors"
              >
                <area.icon className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="text-lg font-medium text-[#E2E8F0] mb-2">{area.title}</h3>
                <p className="text-sm text-[#E2E8F0]/60 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CASA Compliance */}
        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">Aviation Regulatory Compliance</h2>
          <p className="leading-relaxed mb-6">
            Our aviation education and training platforms are designed with CASA compliance at their core:
          </p>
          <div className="space-y-4">
            {[
              "All course content is mapped to current CASA legislation and Civil Aviation Regulations (CARs)",
              "Regular reviews and updates to reflect regulatory amendments",
              "Collaboration with licensed aviation professionals and instructors",
              "Documentation and audit trails for training completion",
              "Alignment with Part 61 licensing requirements for pilots",
              "Support for Part 141 and Part 142 training organization requirements"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-[#E2E8F0]/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Data Protection */}
        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">Data Protection & Privacy</h2>
          <p className="leading-relaxed mb-6">
            We take data protection seriously and implement robust measures to safeguard personal information:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Encrypted data transmission and storage",
              "Regular security audits and assessments",
              "Access controls and authentication",
              "Employee privacy training",
              "Incident response procedures",
              "Data retention and deletion policies"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#E2E8F0]/5">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-sm text-[#E2E8F0]/70">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Governance */}
        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">Corporate Governance</h2>
          <p className="leading-relaxed">
            Lumina Aviation Holdings maintains strong corporate governance practices:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Independent board oversight and governance committee</li>
            <li>Regular compliance reporting and review</li>
            <li>Anti-money laundering (AML) procedures</li>
            <li>Conflict of interest policies</li>
            <li>Whistleblower protections</li>
            <li>Ethical business conduct standards</li>
          </ul>
        </section>

        {/* Important Notice */}
        <section>
          <div className="p-6 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium text-[#E2E8F0] mb-2">Important Notice</h3>
                <p className="text-sm text-[#E2E8F0]/70 leading-relaxed">
                  While we strive to ensure our training materials are current and accurate, aviation 
                  regulations may change. Users should always verify current requirements with CASA 
                  and complete all required formal training through accredited institutions. Our 
                  platforms are designed to supplement, not replace, official training programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section>
          <h2 className="text-2xl font-medium text-[#E2E8F0] mb-4">Report a Compliance Concern</h2>
          <p className="leading-relaxed">
            If you have concerns about compliance matters or wish to report a potential issue, 
            please contact our compliance team:
          </p>
          <div className="mt-4 p-6 rounded-xl bg-[#E2E8F0]/5 border border-[#E2E8F0]/10">
            <p className="font-medium text-[#E2E8F0]">Compliance Officer</p>
            <p className="mt-2">Email: compliance@luminaaviation.com.au</p>
            <p>All reports are treated confidentially.</p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
