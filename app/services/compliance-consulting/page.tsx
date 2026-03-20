import { ServicePageLayout } from "@/components/service-page-layout"
import { Metadata } from "next"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance Consulting | Lumina Aviation Holdings",
  description: "CASA regulatory alignment and aviation compliance consulting services. Expert guidance for aviation organizations.",
}

const features = [
  {
    title: "Regulatory Gap Analysis",
    description: "Comprehensive assessment of your current compliance status against CASA requirements and industry standards."
  },
  {
    title: "Safety Management Systems",
    description: "Development and implementation of SMS frameworks that meet regulatory requirements and best practices."
  },
  {
    title: "Audit Preparation",
    description: "Expert preparation for CASA audits, including documentation review and staff training."
  },
  {
    title: "Policy Development",
    description: "Creation of compliant operations manuals, procedures, and organizational policies."
  },
  {
    title: "Training Programs",
    description: "Customized compliance training for staff at all levels of your organization."
  },
  {
    title: "Ongoing Monitoring",
    description: "Continuous compliance monitoring and regulatory change management services."
  },
]

const benefits = [
  "Deep expertise in Australian aviation regulations",
  "Proactive approach to regulatory changes",
  "Risk mitigation and liability reduction",
  "Improved operational efficiency through streamlined processes",
  "Enhanced safety culture across your organization",
  "Reduced audit findings and regulatory issues",
  "Cost savings through efficient compliance management",
  "Peace of mind with expert regulatory guidance"
]

export default function ComplianceConsultingPage() {
  return (
    <ServicePageLayout
      title="Compliance Consulting"
      subtitle="Expert CASA Regulatory Guidance"
      description="Navigate the complex landscape of aviation regulations with confidence. Our compliance consulting services help aviation organizations achieve and maintain regulatory excellence while optimizing operational efficiency."
      badge="Consulting"
      icon={<Shield className="w-16 h-16 text-[#D4AF37]" />}
      features={features}
      benefits={benefits}
      ctaText="Schedule Consultation"
      ctaHref="/#contact"
    />
  )
}
