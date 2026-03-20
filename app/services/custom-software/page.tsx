import { ServicePageLayout } from "@/components/service-page-layout"
import { Metadata } from "next"
import { Code2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Software Development | Lumina Aviation Holdings",
  description: "Bespoke aviation technology solutions. Custom software development for flight schools, airlines, and aviation organizations.",
}

const features = [
  {
    title: "Flight School Management",
    description: "Comprehensive systems for student tracking, scheduling, aircraft management, and instructor assignments."
  },
  {
    title: "Aviation Analytics",
    description: "Data-driven insights for operational efficiency, safety monitoring, and business intelligence."
  },
  {
    title: "API Integrations",
    description: "Seamless integration with existing aviation systems, including booking engines and regulatory databases."
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for pilots, students, and aviation personnel."
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions designed for aviation industry compliance requirements."
  },
  {
    title: "Maintenance Tracking",
    description: "Digital logbooks and maintenance scheduling systems that ensure regulatory compliance."
  },
]

const benefits = [
  "Purpose-built solutions for aviation industry needs",
  "Deep understanding of regulatory requirements (CASA, FAA, EASA)",
  "Agile development methodology with regular client collaboration",
  "Ongoing maintenance and support packages",
  "Security-first approach meeting aviation standards",
  "Scalable architecture that grows with your business",
  "Integration with existing aviation ecosystems",
  "Dedicated project management and communication"
]

export default function CustomSoftwarePage() {
  return (
    <ServicePageLayout
      title="Custom Software"
      subtitle="Bespoke Aviation Technology Solutions"
      description="We build tailored software solutions that address the unique challenges of the aviation industry. From flight school management systems to complex operational platforms, our team delivers technology that drives efficiency and safety."
      badge="Technology"
      icon={<Code2 className="w-16 h-16 text-[#D4AF37]" />}
      features={features}
      benefits={benefits}
      ctaText="Discuss Your Project"
      ctaHref="/#contact"
    />
  )
}
