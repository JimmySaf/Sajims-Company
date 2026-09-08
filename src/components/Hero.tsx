"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Software Development",
    title: "Build powerful software.",
    highlight: "Ship faster.",
    description:
      "We design and develop custom web applications, mobile apps, and enterprise solutions that help your business grow.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-600/30 via-cyan-500/20 to-transparent",
  },
  {
    id: 2,
    badge: "TechStore",
    title: "Quality gadgets.",
    highlight: "Trusted tech.",
    description:
      "Shop premium laptops, smartphones, computer components, and accessories — carefully selected for performance and value.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    gradient: "from-violet-600/30 via-purple-500/20 to-transparent",
  },
  {
    id: 3,
    badge: "End-to-End Solutions",
    title: "From code to hardware.",
    highlight: "One partner.",
    description:
      "Sajims combines software engineering expertise with a curated tech store — everything your business needs under one roof.",
    image:
      "/hero.png",
    gradient: "from-emerald-600/30 via-teal-500/20 to-transparent",
  },
];

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

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background Images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={active.image}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/70" />
          {/* Colored gradient glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${active.gradient}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-24 text-center sm:px-6 lg:px-8">
        
        {/* Badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.badge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {active.badge}
          </motion.div>
        </AnimatePresence>

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={active.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {active.title}
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              {active.highlight}
            </span>
          </motion.h1>
        </AnimatePresence>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            {active.description}
          </motion.p>
        </AnimatePresence>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-slate-100"
          >
            Start a project
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#techstore"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
          >
            <Play size={15} fill="currentColor" />
            Explore TechStore
          </a>
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-16 flex items-center gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}