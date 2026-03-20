"use client"

import { Logo } from "@/components/logo"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Our Vision", href: "#vision" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sectors", href: "#sectors" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0E192D]/95 backdrop-blur-md border-b border-[#E2E8F0]/10" 
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
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#E2E8F0]/70 hover:text-[#D4AF37] transition-colors text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Lumina Group Badge */}
          <div className="hidden lg:flex items-center gap-4 text-[#E2E8F0]/40 text-xs">
            <div className="w-px h-6 bg-[#E2E8F0]/20" />
            <span className="tracking-wider">Aviation, Education, Innovation</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#E2E8F0]/70 hover:text-[#D4AF37] transition-colors"
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
            className="md:hidden bg-[#0E192D]/98 backdrop-blur-md border-b border-[#E2E8F0]/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#E2E8F0]/70 hover:text-[#D4AF37] transition-colors text-sm tracking-wide py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#E2E8F0]/10 text-[#E2E8F0]/40 text-xs">
                Member of the Lumina Group
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
