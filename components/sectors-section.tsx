"use client"

import { motion } from "framer-motion"
import { GraduationCap, Scale, Cpu, ArrowRight } from "lucide-react"

const sectors = [
  {
    icon: GraduationCap,
    title: "Education & Training",
    subtitle: "AviPrep",
    description: "Revolutionizing aviation education through digital learning platforms mapped to regulatory standards.",
    features: ["Digital Curriculum", "CASA Aligned", "Institutional Access"],
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    subtitle: "CASA Alignment",
    description: "Ensuring all portfolio ventures meet and exceed Civil Aviation Safety Authority requirements.",
    features: ["Legislative Mapping", "Safety Standards", "Audit Ready"],
  },
  {
    icon: Cpu,
    title: "Aviation Technology",
    subtitle: "Future Focused",
    description: "Investing in next-generation technologies that will shape the future of aerospace.",
    features: ["Innovation Hub", "R&D Investment", "Tech Partnerships"],
  },
]

export function SectorsSection() {
  return (
    <section id="sectors" className="relative py-32 bg-gradient-to-b from-[#0E192D] to-[#0a1220]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
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
          <h2 className="text-3xl md:text-5xl font-light text-[#E2E8F0] mb-6">Industry Sectors</h2>
          <p className="text-[#E2E8F0]/60 max-w-2xl mx-auto text-lg">
            Strategic investments across key areas of the aviation ecosystem
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full rounded-2xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/30 hover:bg-[#E2E8F0]/[0.04]">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/50 transition-all duration-500" />
                
                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <sector.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-[#E2E8F0] mb-2">{sector.title}</h3>
                  <p className="text-[#D4AF37] text-sm tracking-wide mb-4">{sector.subtitle}</p>

                  {/* Description */}
                  <p className="text-[#E2E8F0]/60 leading-relaxed mb-8">
                    {sector.description}
                  </p>

                  <div className="mt-auto">
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {sector.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          <span className="text-[#E2E8F0]/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium cursor-pointer group/link">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
