"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="vision" className="relative min-h-screen flex items-center justify-center bg-[#0E192D] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E192D] via-[#0E192D]/95 to-[#0E192D]" />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/*<motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-sm tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Coming Soon:<span className="font-semibold">AviPrep</span>
          </span>
        </motion.div>*/}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-[#E2E8F0] leading-tight mb-8 text-balance"
        >
          Elevating the Standards{" "}
          <br className="hidden md:block" />
          <span className="text-[#D4AF37]">of Australian Aviation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#E2E8F0]/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Strategic investment and innovation across the aerospace ecosystem, 
          focused on safety, compliance, and next-generation education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-[#D4AF37] text-[#0E192D] font-medium rounded-lg hover:bg-[#B8972E] transition-colors tracking-wide"
          >
            Explore Portfolio
          </a>
          <a
            href="#sectors"
            className="px-8 py-4 border border-[#E2E8F0]/20 text-[#E2E8F0] rounded-lg hover:bg-[#E2E8F0]/5 transition-colors tracking-wide"
          >
            Our Sectors
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#E2E8F0]/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
