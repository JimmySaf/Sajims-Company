"use client";
 
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
 
/* Palette: cream #fcf8ee, orange #fc9414, ink (slate-900) */
 
interface NavItem {
  label: string;
  href: string;
}
 
// Add or remove tabs here, the navbar adapts automatically.
const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "TechStore", href: "#techstore" },
  { label: "Services", href: "#services" },
  { label: "Teams", href: "#teams" },
];
 
/* In-page sections the navbar points to (used for the active-tab highlight). */
const sectionIds = navItems
  .map((i) => i.href)
  .filter((h) => h.startsWith("#") && h.length > 1);
 
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc9414]/60";
 
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#");
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
 
      // Current section = the one whose top most recently passed under the navbar.
      let best = "#";
      let bestTop = -Infinity;
      for (const id of sectionIds) {
        const el = document.getElementById(id.slice(1));
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120 && top > bestTop) {
          best = id;
          bestTop = top;
        }
      }
      setActiveHref(best);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);
 
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
 
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#fcf8ee]/95 shadow-md shadow-stone-900/5 backdrop-blur-md"
            : "bg-[#fcf8ee]/80 backdrop-blur-md"
        }`}
      >
        {/* Thin demarcation line: orange, fading out at both ends */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#fc9414] to-transparent"
        />
 
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          {/* Logo: icon, small orange "Sajims" above a bold "Company" */}
          <a
            href="#"
            className={`flex items-center gap-1.5 justify-self-start rounded-md ${focusRing}`}
          >
            <img
              src="/logolatest.png"
              alt="Sajims logo"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold text-[#fc9414]">
                SajimsTECH
              </span>
              <span className="-mt-px text-lg font-semibold leading-none tracking-tight text-slate-900">
                Company
              </span>
            </div>
          </a>
 
          {/* Tabs (centered) */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-sm py-1 text-[15px] transition ${focusRing} ${
                    isActive
                      ? "text-[#fc9414]"
                      : "text-slate-800 hover:text-[#fc9414]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-[1.5px] bg-[#fc9414]" />
                  )}
                </a>
              );
            })}
          </nav>
 
          {/* Thin vertical line + Contact (right) */}
          <div className="hidden h-20 items-center justify-self-end lg:flex">
            {/* Short divider, centred so it stays clear of the top and bottom edges */}
            <span
              aria-hidden="true"
              className="mr-8 h-10 w-px rounded-full bg-[#fc9414]/60 xl:mr-12"
            />
            <a
              href="#contact"
              className={`rounded-lg border border-slate-700 px-6 py-2.5 text-[15px] text-slate-900 transition hover:bg-slate-900 hover:text-white ${focusRing}`}
            >
              Contact Us
            </a>
          </div>
 
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={`rounded-md p-2 text-slate-900 transition hover:bg-slate-900/5 lg:hidden ${focusRing}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
 
      {/* Mobile menu (sits under the header, which keeps the logo and close button) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#fcf8ee]"
          >
            <div className="h-full overflow-y-auto px-4 pb-10 pt-28">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block border-b border-stone-200 py-4 text-lg ${
                      isActive ? "text-[#fc9414]" : "text-slate-900"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
 
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 flex w-full items-center justify-center rounded-lg bg-slate-900 py-3.5 text-base font-medium text-white transition hover:bg-slate-800"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}