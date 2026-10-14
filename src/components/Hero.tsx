"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

/* Palette sampled from the SajimsTech mockup
   cream  #fcf8ee   orange #fc9414   ink (slate-900) */

interface Cta {
  label: string;
  href: string;
}

interface Slide {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  // "robot": the robot picture on the right. "photo": the picture sits behind the content,
  // faded into the cream background with a gradient.
  kind: "robot" | "photo";
  tint?: string; // soft coloured gradient over the photo (photo slides only)
  primary: Cta;
  secondary?: Cta;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "SajimsTech",
    title: "Technology",
    highlight: "Moves You",
    description:
      "We build modern digital solutions, sell quality tech products and accessories, and help businesses grow through technology.",
    image: "/herorobot.png",
    kind: "robot",
    primary: { label: "Start a project", href: "#contact" },
    secondary: { label: "Explore TechStore", href: "#techstore" },
  },
  {
    id: 2,
    badge: "Software Development",
    title: "Build powerful software.",
    highlight: "Ship faster.",
    description:
      "We design and develop custom web applications, mobile apps, and enterprise solutions that help your business grow.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    kind: "photo",
    tint: "from-blue-600/25 via-cyan-500/15 to-transparent",
    primary: { label: "Start a project", href: "#contact" },
    secondary: { label: "Explore TechStore", href: "#techstore" },
  },
  {
    id: 3,
    badge: "TechStore",
    title: "Quality gadgets.",
    highlight: "Trusted tech.",
    description:
      "Shop premium laptops, smartphones, computer components, and accessories — carefully selected for performance and value.",
    image:
      "",
    kind: "photo",
    tint: "from-violet-600/25 via-purple-500/15 to-transparent",
    primary: { label: "Start a project", href: "#contact" },
    secondary: { label: "Explore TechStore", href: "#techstore" },
  },
  {
    id: 4,
    badge: "End-to-End Solutions",
    title: "From code to hardware.",
    highlight: "One partner.",
    description:
      "Sajims combines software engineering expertise with a curated tech store — everything your business needs under one roof.",
    image: "/hero.png",
    kind: "photo",
    tint: "from-emerald-600/25 via-teal-500/15 to-transparent",
    primary: { label: "Start a project", href: "#contact" },
    secondary: { label: "Explore TechStore", href: "#techstore" },
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc9414]/60";

/* The photo fades out toward the text (left) and toward the bottom, so it melts into the cream. */
const photoMask =
  "linear-gradient(to right, transparent 25%, #000 75%), linear-gradient(to bottom, #000 78%, transparent)";

/* The robot picture has the same cream edges as the page; fade its right and bottom edges. */
const robotMask =
  "linear-gradient(to right, #000 80%, transparent), linear-gradient(to bottom, #000 86%, transparent)";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const active = slides[current];

  // Short headlines get the big mockup size, longer ones a slightly smaller size so they still fit.
  const isShort = active.title.length + active.highlight.length <= 24;
  const titleSize = isShort
    ? "text-5xl sm:text-6xl xl:text-[5.5rem]"
    : "text-4xl sm:text-5xl xl:text-6xl";

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fcf8ee] text-slate-900"
    >
      {/* Photo slides: the picture sits behind the content and fades into the cream background */}
      <AnimatePresence>
        {active.kind === "photo" && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 opacity-40 sm:opacity-60 lg:opacity-100"
            style={{
              WebkitMaskImage: photoMask,
              WebkitMaskComposite: "source-in",
              maskImage: photoMask,
              maskComposite: "intersect",
            }}
          >
            <img
              src={active.image}
              alt=""
              className="h-full w-full object-cover"
            />
            {/* Soft coloured gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${active.tint}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:px-8 lg:pt-32">
        {/* Copy (fixed minimum height so the page does not jump between slides) */}
        <div className="flex flex-col lg:min-h-[32rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#fc9414]/30 bg-[#fc9414]/10 px-4 py-1.5 text-sm font-semibold text-[#b86300]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#fc9414]" />
                {active.badge}
              </div>

              {/* Title */}
              <h1 className="mt-5 leading-[1.05] tracking-tight">
                <span className={`block font-light ${titleSize}`}>
                  {active.title}
                </span>
                <span className={`block font-extrabold ${titleSize}`}>
                  {active.highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-md text-lg leading-snug text-slate-800 sm:text-xl">
                {active.description}
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={active.primary.href}
                  className={`group inline-flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/25 transition hover:bg-slate-800 sm:text-lg ${focusRing}`}
                >
                  {active.primary.label}
                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                {active.secondary && (
                  <a
                    href={active.secondary.href}
                    className={`inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-white/50 px-7 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white sm:text-lg ${focusRing}`}
                  >
                    <Play size={16} fill="currentColor" />
                    {active.secondary.label}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="mt-auto flex items-center gap-2.5 pt-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show slide ${index + 1}: ${slide.badge}`}
                aria-current={index === current}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === current
                    ? "w-8 bg-[#fc9414]"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side: the robot on its peach shape (robot slide only) */}
        <div className="relative mx-auto w-full max-w-[44rem] self-end lg:max-w-none">
          <AnimatePresence>
            {active.kind === "robot" && (
              <motion.img
                key={active.id}
                src={active.image}
                alt="SajimsTech robot giving a thumbs up"
                draggable={false}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="w-full select-none"
                style={{
                  WebkitMaskImage: robotMask,
                  WebkitMaskComposite: "source-in",
                  maskImage: robotMask,
                  maskComposite: "intersect",
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}