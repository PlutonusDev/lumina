"use client"

import { motion } from "framer-motion"
import { ExternalLink, GraduationCap, Shield, BookOpen } from "lucide-react"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32 bg-[#0E192D]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0]/10 to-transparent" />
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
          <span className="text-[#D4AF37] text-sm tracking-widest uppercase mb-4 block">Featured Venture</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#E2E8F0] mb-6">Our Portfolio</h2>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
        </motion.div>

        {/* AviPrep Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glassmorphism Card */}
          <div className="relative rounded-2xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] backdrop-blur-xl overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium text-[#E2E8F0]">AviPrep</h3>
                      <p className="text-[#D4AF37] text-sm tracking-wide">Flagship Venture</p>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-[#E2E8F0]/80 leading-relaxed mb-8">
                    A premier digital learning ecosystem mapped to CASA legislation, 
                    bridging the gap between theory and flight for individuals and 
                    accredited institutions.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {["CASA Aligned", "Digital Learning", "Accredited"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full border border-[#E2E8F0]/10 bg-[#E2E8F0]/5 text-[#E2E8F0]/70 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://aviprep.com.au/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0E192D] font-medium rounded-lg hover:bg-[#B8972E] transition-colors group/btn"
                  >
                    Visit AviPrep
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Visual/Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02]">
                    <BookOpen className="w-8 h-8 text-[#D4AF37] mb-4" />
                    <h4 className="text-3xl font-light text-[#E2E8F0] mb-2">100+</h4>
                    <p className="text-[#E2E8F0]/60 text-sm">Learning Modules</p>
                  </div>
                  <div className="p-6 rounded-xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02]">
                    <Shield className="w-8 h-8 text-[#D4AF37] mb-4" />
                    <h4 className="text-3xl font-light text-[#E2E8F0] mb-2">CASA</h4>
                    <p className="text-[#E2E8F0]/60 text-sm">Part 141 & 142 Compliant</p>
                  </div>
                  <div className="col-span-2 p-6 rounded-xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#E2E8F0]/60 text-sm mb-1">Trusted by</p>
                        <h4 className="text-2xl font-light text-[#E2E8F0]">Flight Schools Nationwide</h4>
                      </div>
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border-2 border-[#0E192D] flex items-center justify-center text-[#D4AF37] text-xs font-medium"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
