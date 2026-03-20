"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Building2, Handshake, Target, CheckCircle } from "lucide-react"
import { useRef } from "react"

const benefits = [
  "Standardized curriculum aligned with CASA requirements",
  "Scalable digital learning infrastructure",
  "Data-driven progress tracking and analytics",
  "Reduced administrative overhead",
  "Enhanced student outcomes and pass rates",
  "Ongoing compliance support and updates",
]

export function PartnershipsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const x = useTransform(scrollYProgress, [0, 1], [-50, 50])
  
  return (
    <section ref={containerRef} className="relative py-32 bg-[#0E192D]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0]/10 to-transparent" />
        
        {/* Animated gradient */}
        <motion.div
          style={{ x }}
          className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px]"
        />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] text-sm tracking-widest uppercase mb-4 block">B2B Solutions</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#E2E8F0] mb-6 leading-tight">
              Institutional{" "}
              <span className="text-[#D4AF37]">Partnerships</span>
            </h2>
            
            <p className="text-lg text-[#E2E8F0]/70 leading-relaxed mb-8">
              Lumina Aviation Holdings works directly with flight schools and 
              aviation training organizations to standardize training through 
              technology. Our integrated approach ensures consistent, 
              high-quality education across your entire operation.
            </p>

            <p className="text-[#E2E8F0]/60 leading-relaxed mb-10">
              Through strategic partnerships, we enable institutions to leverage 
              our digital infrastructure while maintaining their unique identity 
              and teaching methodologies. The result is a seamless blend of 
              traditional excellence and modern innovation.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="text-[#E2E8F0]/80 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0E192D] font-medium rounded-lg hover:bg-[#B8972E] transition-colors"
            >
              Partner With Us
              <Handshake className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <div className="relative rounded-2xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] backdrop-blur-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#E2E8F0] mb-2">Flight Schools</h3>
                  <p className="text-[#E2E8F0]/60 leading-relaxed">
                    Comprehensive digital training solutions designed specifically 
                    for registered training organizations and flight academies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] backdrop-blur-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#E2E8F0] mb-2">Strategic Alignment</h3>
                  <p className="text-[#E2E8F0]/60 leading-relaxed">
                    We align our technology investments with your institutional 
                    goals, ensuring maximum impact and sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "50+", label: "Partners" },
                { value: "98%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] p-4 text-center"
                >
                  <div className="text-2xl font-light text-[#D4AF37] mb-1">{stat.value}</div>
                  <div className="text-[#E2E8F0]/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
