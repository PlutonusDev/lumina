"use client"

import { motion } from "framer-motion"
import { Header } from "./header"
import { Footer } from "./footer"
import { ReactNode } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface ServicePageLayoutProps {
  children?: ReactNode
  title: string
  subtitle: string
  description: string
  badge: string
  icon: React.ReactNode
  features: Feature[]
  benefits: string[]
  ctaText?: string
  ctaHref?: string
}

export function ServicePageLayout({ 
  children, 
  title, 
  subtitle, 
  description, 
  badge, 
  icon: Icon,
  features,
  benefits,
  ctaText = "Get Started",
  ctaHref = "/#contact"
}: ServicePageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0E192D]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#D4AF37]/3 rounded-full blur-[120px]" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-sm tracking-wider mb-6">
                  {badge}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E2E8F0] mb-4 text-balance"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl text-[#D4AF37] mb-6"
              >
                {subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-[#E2E8F0]/60 mb-8 leading-relaxed"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href={ctaHref}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0E192D] font-medium rounded-xl hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#E2E8F0]/20 text-[#E2E8F0] rounded-xl hover:bg-[#E2E8F0]/5 transition-all"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute inset-0 w-[350px] h-[350px] rounded-full border border-[#E2E8F0]/10" />
                <div className="absolute inset-4 w-[318px] h-[318px] rounded-full border border-dashed border-[#D4AF37]/20" />
                
                {/* Center */}
                <div className="w-[350px] h-[350px] flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full" />
                    <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center backdrop-blur-xl">
                      {Icon}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 border-t border-[#E2E8F0]/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#E2E8F0] mb-4">Key Features</h2>
            <p className="text-[#E2E8F0]/60 max-w-2xl mx-auto">
              Everything you need to succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] hover:border-[#D4AF37]/30 hover:bg-[#E2E8F0]/[0.04] transition-all"
              >
                <h3 className="text-lg font-medium text-[#E2E8F0] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#E2E8F0]/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#E2E8F0] mb-6">
                Why Choose <span className="text-[#D4AF37]">{title}</span>?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#E2E8F0]/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"
            >
              <h3 className="text-2xl font-medium text-[#E2E8F0] mb-4">Ready to get started?</h3>
              <p className="text-[#E2E8F0]/60 mb-6">
                Contact our team to discuss how we can help transform your aviation operations.
              </p>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 text-[#D4AF37] font-medium"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children && (
        <section className="relative py-24 border-t border-[#E2E8F0]/10">
          <div className="max-w-7xl mx-auto px-6">
            {children}
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
