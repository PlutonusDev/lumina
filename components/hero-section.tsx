"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Play } from "lucide-react"
import { useState } from "react"
import dynamic from 'next/dynamic'
import { LogoSm } from "./logosm"
import { useIsLargeScreen } from "@/hooks/use-islarge"

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0E192D]" /> // Optional: A fallback background
});

const stats = [
  { value: "$50M+", label: "Assets Under Management" },
  { value: "15+", label: "Portfolio Companies" },
  { value: "98%", label: "Client Satisfaction" },
]

export function HeroSection() {
  const isLarge = useIsLargeScreen()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="vision" className="relative h-screen flex items-center justify-center bg-[#0E192D] overflow-hidden">
      <div className="absolute inset-0">
        {isLarge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 10, delay: 1 }}>
            <Spline
              scene="/3d/hero.splinecode"
            />
          </motion.div>
        )}

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen mt-16">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#E2E8F0] leading-[1.1] mb-8 text-balance"
            >
              Elevating the Standards of{" "}
              <br className="hidden md:block" />
              <span className="relative">
                <span className="text-[#D4AF37] text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Australian Aviation</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-[#E2E8F0]/60 max-w-xl mb-10 leading-relaxed"
            >
              Strategic investment and innovation across the aerospace ecosystem,
              focused on safety, compliance, and next-generation education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-16"
            >
              <a
                href="#portfolio"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0E192D] font-medium rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-[#D4AF37]/20"
              >
                <span className="relative z-10">Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#B8972E] to-[#D4AF37]"
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "0%" : "-100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-[#E2E8F0]/20 text-[#E2E8F0] rounded-xl hover:bg-[#E2E8F0]/5 hover:border-[#E2E8F0]/30 transition-all backdrop-blur-sm"
              >
                <Play className="w-3 h-3 ml-0.5" />
                Watch Overview
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-8 lg:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative">
                  {index > 0 && (
                    <div className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-px h-10 bg-[#E2E8F0]/10 hidden sm:block" />
                  )}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-light text-[#E2E8F0]">{stat.value}</div>
                    <div className="text-sm text-[#E2E8F0]/50">{stat.label}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-dashed border-[#D4AF37]/20"
              />

              {/* Second ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#E2E8F0]/10"
              />

              {/* Center orb */}
              <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-3xl" />

                  {/* Inner circle */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/5 backdrop-blur-xl border border-[#D4AF37]/30" />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LogoSm className="w-3/5 text-white" />
                  </div>

                  {/* Orbiting dots */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-[100%] -translate-y-[100%] w-12 h-12 rounded-full bg-[#E2E8F0]" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute bottom-0 right-0 translate-x-[145%] translate-y-[145%] w-12 h-12 rounded-full bg-[#E2E8F0]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
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
