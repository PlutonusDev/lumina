"use client"

import { motion, Variants } from "framer-motion"
import { ExternalLink, GraduationCap, Shield, BookOpen, ArrowUpRight } from "lucide-react"

export function PortfolioSection() {
  // Animation variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // TS now knows this is a cubic-bezier
      } 
    }
  }

  return (
    <section id="portfolio" className="relative py-32 bg-[#090E1A] overflow-hidden">
      {/* Sophisticated Background Architecture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        {/* Subtle Radial Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">
              Featured Venture
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-8">
            Defining the <span className="italic font-serif">Standard</span> in Aviation.
          </h2>
          <p className="text-[#94A3B8] text-lg font-light leading-relaxed">
            Our portfolio represents a commitment to technical precision and 
            regulatory excellence within the Australian aerospace sector.
          </p>
        </motion.div>

        {/* AviPrep Premium Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative group"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.01] backdrop-blur-2xl overflow-hidden transition-all duration-700 group-hover:border-[#D4AF37]/30 group-hover:bg-white/[0.03]">
            {/* Animated Gradient Edge */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative p-8 md:p-10 lg:p-12">
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                
                {/* Left Side: Content */}
                <div className="lg:col-span-7">
                  <motion.div variants={itemVariants} className="flex items-center gap-5 mb-10">
                    <img src="img/AviPrep-logo.png" className="h-18" />
                    <div>
                      <h3 className="text-3xl font-medium text-white tracking-tight">AviPrep</h3>
                      <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mt-1">Foundational Asset</p>
                    </div>
                  </motion.div>

                  <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#CBD5E1] font-light leading-relaxed mb-10">
                    A premier digital learning ecosystem meticulously mapped to <span className="text-white font-normal">CASA legislation</span>, 
                    bridging the gap between complex theory and operational flight for accredited institutions.
                  </motion.p>

                  <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
                    {["CASA Aligned", "LMS Integration", "Enterprise Grade"].map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-[#94A3B8] text-xs font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <a
                      href="https://aviprep.com.au/"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#090E1A] font-semibold rounded-full hover:bg-[#D4AF37] transition-all duration-300 group/btn shadow-xl shadow-black/20"
                    >
                      Explore Venture
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>

                {/* Right Side: Data Visualization */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  <motion.div 
                    variants={itemVariants}
                    className="p-8 rounded-2xl border border-white/5 bg-[#111827]/50 backdrop-blur-sm"
                  >
                    <BookOpen className="w-6 h-6 text-[#D4AF37] mb-6" />
                    <div className="text-4xl font-light text-white mb-2">210+</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-bold">Theory subject courses</div>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="p-8 rounded-2xl border border-white/5 bg-[#111827]/50 backdrop-blur-sm"
                  >
                    <Shield className="w-6 h-6 text-[#D4AF37] mb-6" />
                    <div className="text-4xl font-light text-white mb-2">CASR</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-bold">Part 141/142 Compliance</div>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="col-span-2 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-2">Operational Reach</div>
                        <div className="text-xl font-light text-white">National Network Adoption</div>
                      </div>
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full border-4 border-[#090E1A] bg-[#1E293B] flex items-center justify-center text-[10px] font-bold text-[#D4AF37]"
                          >
                            0{i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}