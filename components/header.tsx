"use client"

import { Logo } from "@/components/logo"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Code2, ExternalLink, Menu, Plane, Rocket, Shield, Sparkles, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    icon: Plane,
    title: "AviPrep",
    description: "Part 141 & 142 compliant aviation theory provider",
    href: "/services/aviprep",
    featured: true,
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke aviation software solutions",
    href: "/services/custom-software",
  },
  {
    icon: Shield,
    title: "Compliance Consulting",
    description: "CASA regulatory alignment services",
    href: "/services/compliance-consulting",
  },
  {
    icon: Rocket,
    title: "Innovation Lab",
    description: "Next-gen aviation R&D partnerships",
    href: "/services/innovation-lab",
  },
  {
    icon: Sparkles,
    title: "Coming Soon",
    description: "More projects to be announced",
    href: "/",
  }
]

const navItems = [
  { label: "Our Vision", href: "/#vision" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Sectors", href: "/#sectors" },
  { 
    label: "Services", 
    href: "#",
    hasDropdown: true,
  },
  { label: "Investors", href: "https://investors.luminaaviation.com.au/", external: true },
  { label: "Contact", href: "/#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    if(window.scrollY > 20) setIsScrolled(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0E192D]/90 backdrop-blur-xl border-b border-[#E2E8F0]/10 shadow-2xl shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="h-10 flex items-center gap-3">
            <Logo className="text-[#E2E8F0]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-lg text-[#E2E8F0]/70 hover:text-[#E2E8F0] hover:bg-[#E2E8F0]/5 transition-all text-sm tracking-wide ${isServicesOpen ? 'text-[#E2E8F0] bg-[#E2E8F0]/5' : ''}`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] origin-top"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Decorative Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0E192D] border-l border-t border-[#E2E8F0]/20 rotate-45" />
                        
                        <div className="relative bg-[#0E192D]/98 backdrop-blur-2xl border border-[#E2E8F0]/20 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                          {/* Gradient top border */}
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                          
                          <div className="p-3">
                            {/* Featured Service */}
                            {services.filter(s => s.featured).map((service) => (
                              <Link
                                key={service.title}
                                href={service.href}
                                className="group/item flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 mb-3 hover:from-[#D4AF37]/15 hover:to-[#D4AF37]/10 transition-all"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center group-hover/item:bg-[#D4AF37]/30 transition-colors">
                                  <service.icon className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[#E2E8F0] font-medium group-hover/item:text-[#D4AF37] transition-colors">{service.title}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-medium">Featured</span>
                                  </div>
                                  <p className="text-[#E2E8F0]/60 text-xs mt-0.5">{service.description}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-[#E2E8F0]/40 group-hover/item:text-[#D4AF37] transition-colors" />
                              </Link>
                            ))}

                            {/* Other Services Grid */}
                            <div className="grid grid-cols-2 gap-1">
                              {services.filter(s => !s.featured).map((service) => (
                                <Link
                                  key={service.title}
                                  href={service.href}
                                  className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-[#E2E8F0]/5 transition-all"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <div className="w-10 h-10 rounded-lg bg-[#E2E8F0]/5 flex items-center justify-center group-hover/item:bg-[#E2E8F0]/10 transition-colors">
                                    <service.icon className="w-5 h-5 text-[#E2E8F0]/60 group-hover/item:text-[#D4AF37] transition-colors" />
                                  </div>
                                  <div>
                                    <span className="text-[#E2E8F0]/90 text-sm font-medium group-hover/item:text-[#D4AF37] transition-colors block">{service.title}</span>
                                    <span className="text-[#E2E8F0]/50 text-xs">{service.description}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-3 pt-3 border-t border-[#E2E8F0]/10">
                              <Link
                                href="/#contact"
                                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E2E8F0]/5 hover:bg-[#E2E8F0]/10 text-[#E2E8F0]/80 hover:text-[#E2E8F0] text-sm transition-all"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                Explore all services
                                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[#E2E8F0]/70 hover:text-[#E2E8F0] hover:bg-[#E2E8F0]/5 transition-all text-sm tracking-wide"
                >
                  {item.label}
                  {item.external && <ExternalLink className="w-3 h-3" />}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 text-[#E2E8F0]/40 text-xs">
            <div className="w-px h-6 bg-[#E2E8F0]/20" />
            <span className="tracking-wider">Aviation, Education, Innovation</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#E2E8F0]/70 hover:text-[#D4AF37] transition-colors rounded-lg hover:bg-[#E2E8F0]/5"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0E192D]/98 backdrop-blur-xl border-b border-[#E2E8F0]/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between w-full text-[#E2E8F0]/70 hover:text-[#D4AF37] transition-colors text-sm tracking-wide py-3 px-3 rounded-lg hover:bg-[#E2E8F0]/5"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {services.map((service) => (
                              <Link
                                key={service.title}
                                href={service.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setIsMobileServicesOpen(false)
                                }}
                                className="flex items-center gap-3 py-2 px-3 rounded-lg text-[#E2E8F0]/60 hover:text-[#D4AF37] hover:bg-[#E2E8F0]/5 transition-all"
                              >
                                <service.icon className="w-4 h-4" />
                                <span className="text-sm">{service.title}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-[#E2E8F0]/70 hover:text-[#D4AF37] transition-colors text-sm tracking-wide py-3 px-3 rounded-lg hover:bg-[#E2E8F0]/5"
                  >
                    {item.label}
                    {item.external && <ExternalLink className="w-3 h-3" />}
                  </Link>
                )
              ))}
              <div className="pt-4 mt-2 border-t border-[#E2E8F0]/10 text-[#E2E8F0]/40 text-xs px-3">
                Member of the Lumina Group
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
