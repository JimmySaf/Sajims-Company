import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "What we do", href: "#what-we-do" },
    { label: "Services", href: "#services" },
    { label: "Teams", href: "#teams" },
    { label: "Careers", href: "#careers" },
  ],
  services: [
    { label: "Software Development", href: "#services" },
    { label: "Web & Mobile Apps", href: "#services" },
    { label: "Cloud Solutions", href: "#services" },
    { label: "AI Solutions", href: "#services" },
    { label: "TechStore", href: "#techstore" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Request a Quote", href: "#contact" },
    { label: "Product Inquiry", href: "#techstore" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] text-white">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 pt-20 pb-10 sm:px-8 lg:px-16">
        
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/20">
                <img
                  src="/logo.jpeg"
                  alt="Sajims"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">SAJIMS</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  Tech Company
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Building software solutions and offering quality technology 
              products to help businesses and individuals move forward.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:info@sajims.com"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <Mail size={16} />
                info@sajims.com
              </a>
              <a
                href="tel:+254791939576"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <Phone size={16} />
                +254 791 939 576
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={16} />
                Nairobi, Kenya
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Company
              </p>
              <ul className="mt-5 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Services
              </p>
              <ul className="mt-5 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Support
              </p>
              <ul className="mt-5 space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/5"
              >
                Get in touch
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} Sajims. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 transition hover:text-slate-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 transition hover:text-slate-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}