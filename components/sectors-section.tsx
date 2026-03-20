"use client"

import { motion } from "framer-motion"
import { GraduationCap, Scale, Cpu, ArrowRight, Zap, Globe, Lock } from "lucide-react"
import Link from "next/link"

const sectors = [
  {
    icon: GraduationCap,
    title: "Education & Training",
    subtitle: "AviPrep Platform",
    description: "Revolutionizing aviation education through digital learning platforms mapped to regulatory standards and real-world scenarios.",
    features: ["Digital Curriculum", "CASA Aligned", "Institutional Access", "Progress Analytics"],
    color: "from-blue-500",
    href: "/services/aviprep"
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    subtitle: "CASA Alignment",
    description: "Ensuring all portfolio ventures meet and exceed Civil Aviation Safety Authority requirements with proactive compliance strategies.",
    features: ["Legislative Mapping", "Safety Standards", "Audit Ready", "Risk Management"],
    color: "from-emerald-500",
    href: "/services/compliance-consulting"
  },
  {
    icon: Cpu,
    title: "Aviation Technology",
    subtitle: "Future Focused",
    description: "Investing in next-generation technologies that will shape the future of aerospace through strategic R&D partnerships.",
    features: ["Innovation Hub", "R&D Investment", "Tech Partnerships", "AI Integration"],
    color: "from-violet-500",
    href: "/services/custom-software"
  },
]

const additionalCapabilities = [
  { icon: Zap, label: "Rapid Deployment" },
  { icon: Globe, label: "Global Standards" },
  { icon: Lock, label: "Enterprise Security" },
]

export function SectorsSection() {
  return (
    <section id="sectors" className="relative py-32 bg-gradient-to-b from-[#0E192D] via-[#0a1220] to-[#0E192D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#D4AF37] text-sm tracking-widest uppercase mb-4 block">Our Focus</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#E2E8F0] mb-6 text-balance">Industry Sectors</h2>
          <p className="text-[#E2E8F0]/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Strategic investments across key areas of the aviation ecosystem, driving innovation and safety forward
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href={sector.href}>
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#E2E8F0]/20 hover:bg-[#E2E8F0]/[0.04]">
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${sector.color}/0 to-transparent group-hover:${sector.color}/50 transition-all duration-500`} />
                  
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.color}/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${sector.color}/20 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                      <div className="relative w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                        <sector.icon className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-[#E2E8F0] mb-2 group-hover:text-[#D4AF37] transition-colors">{sector.title}</h3>
                    <p className="text-[#D4AF37]/80 text-sm tracking-wide mb-4">{sector.subtitle}</p>

                    {/* Description */}
                    <p className="text-[#E2E8F0]/60 leading-relaxed mb-8 text-sm">
                      {sector.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {sector.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                          <span className="text-[#E2E8F0]/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 pt-8 border-t border-[#E2E8F0]/10"
        >
          {additionalCapabilities.map((cap, index) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[#E2E8F0]/50 hover:text-[#E2E8F0]/70 transition-colors"
            >
              <cap.icon className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm font-medium">{cap.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
