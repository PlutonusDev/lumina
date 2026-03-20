"use client"

import { Logo } from "@/components/logo"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Mail, Phone, Linkedin, ExternalLink, X, ArrowUpRight } from "lucide-react"
import { PiXLogo } from "react-icons/pi";

const footerLinks = {
  company: [
    { label: "Our Vision", href: "#vision", external: false },
    { label: "Portfolio", href: "#portfolio", external: false },
    { label: "Sectors", href: "#sectors", external: false },
    { label: "Partnerships", href: "#partnerships", external: false },
    { label: "Investor Relations", href: "https://investors.luminaaviation.com.au", external: true },
  ],
  services: [
    { label: "AviPrep", href: "/services/aviprep", external: false },
    { label: "Custom Software", href: "/services/custom-software", external: false },
    { label: "Compliance Consulting", href: "/services/compliance-consulting", external: false },
    { label: "Innovation Lab", href: "/services/innovation-lab", external: false },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#080d17] border-t border-[#E2E8F0]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="h-10 flex items-center gap-3 mb-6">
              <Logo className="text-[#E2E8F0] w-auto" />
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/lumina-holdings"
                className="w-10 h-10 rounded-lg border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] flex items-center justify-center text-[#E2E8F0]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/*<a
                href="#"
                className="w-10 h-10 rounded-lg border border-[#E2E8F0]/10 bg-[#E2E8F0]/[0.02] flex items-center justify-center text-[#E2E8F0]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors"
                aria-label="LinkedIn"
              >
                <PiXLogo className="w-5 h-5" />
              </a>*/}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#E2E8F0] font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#E2E8F0]/60 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-1 group"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      {link.external ? (
                        <ExternalLink className="w-3 h-3" />
                      ) : (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      )}
                    </Link>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#E2E8F0] font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-[#E2E8F0]/60 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.external ? (
                        <ExternalLink className="w-3 h-3" />
                      ) : (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      )}
                    </Link>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#E2E8F0] font-medium mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-[#E2E8F0]/60 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Australian Headquarters</p>
                    <p className="text-[#E2E8F0]/40">Cairns, QLD, Australia</p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="mailto:contact@luminaaviation.com"
                  className="flex items-center gap-3 text-[#E2E8F0]/60 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  <Mail className="w-5 h-5" />
                  contact@luminaaviation.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+61200000000"
                  className="flex items-center gap-3 text-[#E2E8F0]/60 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  <Phone className="w-5 h-5" />
                  +61 2 0000 0000
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E2E8F0]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[#E2E8F0]/40 text-sm text-center md:text-left">
              <p className="font-medium text-[#E2E8F0]/60">Lumina Aviation Holdings Pty Ltd</p>
              <p>ACN XXX XXX XXX</p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/compliance" className="text-[#E2E8F0]/40 text-xs hover:text-[#E2E8F0]/60 transition-colors">
                Compliance
              </Link>
              <Link href="/privacy" className="text-[#E2E8F0]/40 text-xs hover:text-[#E2E8F0]/60 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-[#E2E8F0]/40 text-xs hover:text-[#E2E8F0]/60 transition-colors">
                Terms
              </Link>
              <span className="text-[#E2E8F0]/40 text-xs">
                © {new Date().getFullYear()} All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
