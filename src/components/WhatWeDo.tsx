import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Cloud,
  Brain,
  ShoppingBag,
  Settings,
  Layers,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We design and build tailored software solutions that solve specific business problems and scale with your growth.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Modern, responsive web applications and mobile apps that deliver smooth user experiences across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Platforms",
    description:
      "Secure, scalable cloud solutions and digital platforms that improve operations and enable remote collaboration.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "We integrate practical AI capabilities into products to automate processes and unlock smarter decision-making.",
  },
  {
    icon: Settings,
    title: "Business Systems & Automation",
    description:
      "From internal tools to workflow automation, we help organizations work faster and more efficiently.",
  },
  {
    icon: ShoppingBag,
    title: "TechStore",
    description:
      "Quality laptops, smartphones, computer components and accessories carefully selected for performance and value.",
  },
];

const principles = [
  {
    icon: Layers,
    title: "Practical by design",
    description: "We focus on solutions that create real value, not unnecessary complexity.",
  },
  {
    icon: Zap,
    title: "Built for scale",
    description: "Every system we build is designed to grow with your business.",
  },
  {
    icon: Code2,
    title: "Quality first",
    description: "Clean code, solid architecture and reliable delivery are non-negotiable.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Soft glows */}
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-8 md:py-32 lg:px-16 lg:py-40">
        
        {/* ===================== HEADER ===================== */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              What We Do
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Technology that helps
              <span className="mt-2 block text-slate-400">
                businesses move forward.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <p className="text-xl leading-relaxed text-slate-300 md:text-2xl">
              We combine software engineering with carefully selected technology 
              products to help organizations build, operate and grow.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Whether you need a custom digital product or reliable computer 
              hardware, Sajims is structured to support both sides of modern 
              technology needs.
            </p>
          </motion.div>
        </div>

        {/* ===================== SERVICES GRID ===================== */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-cyan-500/25 hover:bg-white/[0.05] md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 transition-colors group-hover:bg-cyan-500/25">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ===================== PRINCIPLES ===================== */}
        <div className="mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              How We Approach Work
            </p>
            <h3 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple principles. Strong delivery.
            </h3>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================== CTA ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c2622] to-[#050505] p-8 md:p-12 lg:mt-36 lg:p-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                Ready to start?
              </p>
              <h3 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Let’s build something useful together.
              </h3>
              <p className="mt-4 max-w-xl text-base text-slate-400">
                Tell us about your idea or project and we’ll help you shape 
                the right technical approach.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-yellow-300"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}