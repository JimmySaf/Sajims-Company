"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, ArrowUp } from "lucide-react";

/* Palette (same as the rest of the site)
   cream #fcf8ee   orange #fc9414   peach #fde7c7   ink slate-900 */

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

const columns = [
  { title: "Company", links: footerLinks.company, delay: 0.1 },
  { title: "Services", links: footerLinks.services, delay: 0.15 },
  { title: "Support", links: footerLinks.support, delay: 0.2 },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc9414]/60";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      {/* Thin orange line at the top, echoing the navbar's demarcation line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#fc9414] to-transparent" />

      {/* Soft warm glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#fc9414]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 pb-10 pt-20 sm:px-8 lg:px-16">
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
            {/* Same logo lockup as the navbar. The icon sits on a cream tile so its dark half stays visible. */}
            <a href="#" className={`inline-flex items-center gap-2.5 rounded-lg ${focusRing}`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fcf8ee] p-1.5">
                <img
                  src="/logolatest.png"
                  alt="Sajims"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[11px] font-semibold text-[#fc9414]">
                  Sajims
                </span>
                <span className="-mt-px text-xl font-bold leading-none tracking-tight text-white">
                  Company
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Building software solutions and offering quality technology
              products to help businesses and individuals move forward.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:safarijimmy25@gmail.com"
                className={`group flex items-center gap-3 rounded-md text-sm text-slate-300 transition hover:text-[#fc9414] ${focusRing}`}
              >
                <Mail size={16} className="text-[#fc9414]" />
                safarijimmy25@gmail.com
              </a>
              <a
                href="tel:+254791939576"
                className={`group flex items-center gap-3 rounded-md text-sm text-slate-300 transition hover:text-[#fc9414] ${focusRing}`}
              >
                <Phone size={16} className="text-[#fc9414]" />
                +254 791 939 576
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin size={16} className="text-[#fc9414]" />
                Nairobi, Kenya
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            {columns.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: column.delay }}
              >
                <p className="text-sm font-semibold text-[#fc9414]">
                  {column.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`inline-block rounded-sm text-sm text-slate-300 transition duration-200 hover:translate-x-1 hover:text-white ${focusRing}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA (last column only) */}
                {index === columns.length - 1 && (
                  <a
                    href="#contact"
                    className={`group mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#fc9414] hover:bg-[#fc9414]/10 ${focusRing}`}
                  >
                    Get in touch
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
  {/* Back to top */}
  <a
    href="#"
    aria-label="Back to top"
    className={`group flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#fc9414] hover:bg-[#fc9414] hover:text-slate-900 ${focusRing}`}
  >
    <ArrowUp
      size={16}
      className="transition-transform group-hover:-translate-y-0.5"
    />
  </a>

  <p className="text-sm text-slate-400">
    © {currentYear} Sajims. All rights reserved.
  </p>
</div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className={`rounded-sm text-sm text-slate-400 transition hover:text-white ${focusRing}`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`rounded-sm text-sm text-slate-400 transition hover:text-white ${focusRing}`}
            >
              Terms of Service
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}