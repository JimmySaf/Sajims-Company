"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Database,
  Shield,
  ShoppingBag,
  Settings,
  Layout,
  Server,
} from "lucide-react";

/* Palette (same as Navbar, Hero and About)
   cream #fcf8ee   orange #fc9414   deep orange text #b86300   peach #fde7c7   ink slate-900 */

const mainServices = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We design and develop tailored software solutions that address specific business challenges and scale with your organization.",
    points: ["Web applications", "Desktop systems", "Internal tools", "API development"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications built for performance, usability and long-term maintainability.",
    points: ["iOS & Android", "Cross-platform apps", "UI/UX focused", "App store deployment"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive and high-performing websites and web platforms designed to convert visitors into customers.",
    points: ["Business websites", "Web portals", "E-commerce", "Admin dashboards"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud architecture, migration and management services that improve reliability, security and operational efficiency.",
    points: ["Cloud setup", "Migration", "Infrastructure", "Monitoring"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Practical AI integrations and automation systems that reduce manual work and improve decision-making.",
    points: ["Process automation", "AI features", "Smart workflows", "Data insights"],
  },
  {
    icon: ShoppingBag,
    title: "TechStore",
    description:
      "Quality computer gadgets, laptops, smartphones, components and accessories available for businesses and individuals.",
    points: ["Laptops & PCs", "Smartphones", "Accessories", "Hardware support"],
    // The store is a product, not a service, so it gets a warm highlight and a link
    featured: { label: "Visit TechStore", href: "#techstore" },
  },
];

const extraCapabilities = [
  { icon: Database, title: "Database Design" },
  { icon: Shield, title: "Security First" },
  { icon: Settings, title: "System Integration" },
  { icon: Layout, title: "UI / UX Design" },
  { icon: Server, title: "DevOps & Hosting" },
  { icon: Code2, title: "API Development" },
];

const processStrip = [
  { step: "01", title: "Discover", desc: "Understand goals & requirements" },
  { step: "02", title: "Design", desc: "Architecture & user experience" },
  { step: "03", title: "Build", desc: "Develop, test and refine" },
  { step: "04", title: "Deliver", desc: "Launch, support & improve" },
];

/* Shared style tokens */
const card =
  "rounded-3xl border border-stone-200 bg-white/70 shadow-sm shadow-stone-900/5 transition-all duration-500 hover:border-[#fc9414]/50 hover:bg-white hover:shadow-xl hover:shadow-[#fc9414]/10";
const iconTile =
  "flex items-center justify-center bg-[#fc9414]/15 text-[#b86300]";

/* Section label: same pill as the hero badge */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#fc9414]/30 bg-[#fc9414]/10 px-4 py-1.5 text-sm font-semibold text-[#b86300]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#fc9414]" />
      {children}
    </p>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden border-t border-stone-200/70 bg-[#fcf8ee] text-slate-900"
    >
      {/* Soft peach shape and glow (echoes the hero) */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[26rem] w-[26rem] -rotate-12 rounded-[4rem] bg-[#fde7c7]/50" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-[#fc9414]/10 blur-3xl" />

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
            <Label>Our Services</Label>
            <h2 className="max-w-xl text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <span className="block font-light">Solutions designed</span>
              <span className="mt-2 block font-extrabold">
                for real business needs.
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
            <p className="text-xl leading-relaxed text-slate-800 md:text-2xl">
              From software engineering to technology products, we provide
              end-to-end services that help organizations build, scale and
              operate with confidence.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Every engagement starts with understanding your goals so we can
              recommend the right technical approach and deliver measurable
              results.
            </p>
          </motion.div>
        </div>

        {/* ===================== MAIN SERVICES ===================== */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const featured = "featured" in service ? service.featured : null;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden p-7 md:p-8 ${card} ${
                  featured ? "!bg-[#fff1da] hover:!bg-[#ffe9c6]" : ""
                }`}
              >
                {/* Orange accent that grows on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#fc9414] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-start justify-between">
                  <div
                    className={`h-12 w-12 rounded-2xl transition-colors group-hover:bg-[#fc9414]/25 ${iconTile}`}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="text-sm font-bold text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-stone-200 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#fc9414]" />
                      {point}
                    </li>
                  ))}
                </ul>

                {featured && (
                  <a
                    href={featured.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b86300] transition-all group-hover:gap-3"
                  >
                    {featured.label}
                    <ArrowRight size={16} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ===================== EXTRA CAPABILITIES ===================== */}
        <div className="mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <Label>Additional Capabilities</Label>
            <h3 className="max-w-3xl text-3xl tracking-tight sm:text-4xl">
              <span className="font-light">Supporting services that </span>
              <span className="font-extrabold">complete the picture.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {extraCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white/70 p-5 text-center shadow-sm shadow-stone-900/5 transition hover:border-[#fc9414]/50 hover:bg-white hover:shadow-lg hover:shadow-[#fc9414]/10"
                >
                  <div className={`h-10 w-10 rounded-full ${iconTile}`}>
                    <Icon size={18} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-800">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================== PROCESS STRIP ===================== */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 shadow-sm shadow-stone-900/5 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
          {processStrip.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/80 p-7 transition-colors hover:bg-[#fff1da] md:p-8"
            >
              <p className="text-3xl font-bold text-[#fc9414]">{item.step}</p>
              <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>

              {/* Arrow to the next step (desktop) */}
              {index < processStrip.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="absolute right-5 top-9 hidden text-[#fc9414]/60 transition group-hover:translate-x-1 lg:block"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* ===================== CTA ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-28 overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-2xl shadow-slate-900/20 md:p-12 lg:mt-36 lg:p-14"
        >
          {/* Warm glow so the dark card still feels part of the palette */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#fc9414]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#fde7c7]/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-4 text-sm font-semibold text-[#fc9414]">
                Let’s work together
              </p>
              <h3 className="max-w-2xl text-3xl leading-tight text-white sm:text-4xl">
                <span className="font-light">Need a reliable </span>
                <span className="font-extrabold">technology partner?</span>
              </h3>
              <p className="mt-4 max-w-xl text-base text-slate-300">
                Tell us what you’re building or the challenge you’re facing.
                We’ll help you find the right path forward.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#fc9414] px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-[#fc9414]/20 transition-all duration-300 hover:bg-[#ffa62e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
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