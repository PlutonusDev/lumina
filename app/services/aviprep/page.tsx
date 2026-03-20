import { ServicePageLayout } from "@/components/service-page-layout"
import { Metadata } from "next"
import { Plane } from "lucide-react"

export const metadata: Metadata = {
  title: "AviPrep | Lumina Aviation Holdings",
  description: "Premier aviation exam preparation platform aligned with CASA regulations. Digital learning for pilots and flight schools.",
}

const features = [
  {
    title: "CASA-Aligned Content",
    description: "All course materials are meticulously mapped to current Civil Aviation Safety Authority regulations and requirements."
  },
  {
    title: "Interactive Learning",
    description: "Engage with dynamic content including practice exams, simulations, and interactive diagrams for better retention."
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics, performance insights, and personalized recommendations."
  },
  {
    title: "Mobile Ready",
    description: "Study anywhere, anytime with our fully responsive platform accessible on all devices."
  },
  {
    title: "Expert Content",
    description: "Developed by experienced aviation professionals and certified flight instructors."
  },
  {
    title: "Institutional Access",
    description: "Special programs for flight schools with bulk licensing, student management, and compliance reporting."
  },
]

const benefits = [
  "98% student pass rate on CASA examinations",
  "100+ comprehensive learning modules covering all pilot certifications",
  "Real-time updates when regulations change",
  "24/7 access to learning materials",
  "Dedicated support for individual learners and institutions",
  "Integration with flight school management systems",
  "Progress synchronization across all devices",
  "Community forums and peer support"
]

export default function AviPrepPage() {
  return (
    <ServicePageLayout
      title="AviPrep"
      subtitle="Premier Aviation Exam Preparation"
      description="The leading digital learning platform for aviation professionals. AviPrep provides comprehensive, CASA-aligned training modules that bridge the gap between theory and flight, helping you achieve your aviation goals."
      badge="Flagship Product"
      icon={<Plane className="w-16 h-16 text-[#D4AF37]" />}
      features={features}
      benefits={benefits}
      ctaText="Start Learning"
      ctaHref="https://aviprep.com.au/"
    />
  )
}
