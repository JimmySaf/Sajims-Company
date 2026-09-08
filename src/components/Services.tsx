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

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

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
              Our Services
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Solutions designed
              <span className="mt-2 block text-slate-400">
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
            <p className="text-xl leading-relaxed text-slate-300 md:text-2xl">
              From software engineering to technology products, we provide 
              end-to-end services that help organizations build, scale and 
              operate with confidence.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Every engagement starts with understanding your goals so we can 
              recommend the right technical approach and deliver measurable results.
            </p>
          </motion.div>
        </div>

        {/* ===================== MAIN SERVICES ===================== */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-cyan-500/25 hover:bg-white/[0.05] md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 transition-colors group-hover:bg-cyan-500/25">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              Additional Capabilities
            </p>
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Supporting services that complete the picture.
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
                  className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:border-cyan-500/20 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================== PROCESS STRIP ===================== */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
          {[
            { step: "01", title: "Discover", desc: "Understand goals & requirements" },
            { step: "02", title: "Design", desc: "Architecture & user experience" },
            { step: "03", title: "Build", desc: "Develop, test and refine" },
            { step: "04", title: "Deliver", desc: "Launch, support & improve" },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a1e1b]/80 p-7 md:p-8"
            >
              <p className="text-sm font-semibold text-cyan-400">{item.step}</p>
              <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
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
                Let’s work together
              </p>
              <h3 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Need a reliable technology partner?
              </h3>
              <p className="mt-4 max-w-xl text-base text-slate-400">
                Tell us what you’re building or the challenge you’re facing. 
                We’ll help you find the right path forward.
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