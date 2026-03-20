import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SectorsSection } from "@/components/sectors-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <SectorsSection />
      <PartnershipsSection />
      <Footer />
    </main>
  )
}
