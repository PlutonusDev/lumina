import { ServicePageLayout } from "@/components/service-page-layout"
import { Metadata } from "next"
import { Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Innovation Lab | Lumina Aviation Holdings",
  description: "Next-generation aviation R&D partnerships. Exploring emerging technologies shaping the future of aerospace.",
}

const features = [
  {
    title: "AI & Machine Learning",
    description: "Exploring applications of artificial intelligence in flight training, safety prediction, and operational optimization."
  },
  {
    title: "Simulation Technology",
    description: "Next-generation flight simulation using VR/AR technologies for immersive training experiences."
  },
  {
    title: "Urban Air Mobility",
    description: "Research and investment in eVTOL, drone operations, and advanced air mobility infrastructure."
  },
  {
    title: "Autonomous Systems",
    description: "Development of autonomous flight technologies and unmanned aircraft system integration."
  },
  {
    title: "Sustainable Aviation",
    description: "Investment in green aviation technologies, including electric propulsion and sustainable fuels."
  },
  {
    title: "Blockchain Applications",
    description: "Exploring distributed ledger technology for maintenance records, credentials, and supply chain."
  },
]

const benefits = [
  "Early access to emerging aviation technologies",
  "Partnership opportunities with innovative startups",
  "Pilot programs and proof-of-concept development",
  "Strategic investment in future aviation trends",
  "Collaboration with leading research institutions",
  "Regulatory pathway support for new technologies",
  "Industry-leading expertise in aviation innovation",
  "Connection to global aviation technology ecosystem"
]

export default function InnovationLabPage() {
  return (
    <ServicePageLayout
      title="Innovation Lab"
      subtitle="Next-Gen Aviation R&D"
      description="The future of aviation is being written today. Our Innovation Lab explores emerging technologies and strategic partnerships that will shape the aerospace industry for decades to come. Join us in pioneering the next era of flight."
      badge="R&D"
      icon={<Rocket className="w-16 h-16 text-[#D4AF37]" />}
      features={features}
      benefits={benefits}
      ctaText="Partner With Us"
      ctaHref="/#contact"
    />
  )
}
