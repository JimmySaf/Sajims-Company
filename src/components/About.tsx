import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  ShieldCheck,
  Users,
  ShoppingBag,
  Sparkles,
  Briefcase,
  Workflow,
} from "lucide-react";

const stats = [
  { value: "14+", label: "Projects & Solutions" },
  { value: "7+", label: "Clients & Partners" },
  { value: "24/7", label: "Technical Support" },
  { value: "100%", label: "Commitment" },
];

const values = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Innovation",
    description:
      "We explore modern technologies and practical ideas to create digital solutions that solve real business problems.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Reliability",
    description:
      "We build dependable systems with security, performance, scalability and long-term maintainability in mind.",
  },
  {
    icon: Users,
    number: "03",
    title: "Partnership",
    description:
      "We work closely with our clients, understanding their goals and becoming a technology partner rather than simply a vendor.",
  },
];

const capabilities = [
  "Custom software development",
  "Web and mobile applications",
  "Cloud and digital platforms",
  "AI-powered solutions",
  "Business systems and automation",
  "Technology consulting",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your goals, challenges and requirements.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "We create clear architecture, user experience and project roadmaps.",
  },
  {
    number: "03",
    title: "Development",
    description: "Our team builds reliable, scalable and well-tested solutions.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "We launch, monitor and continuously improve what we build.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-8 md:py-32 lg:px-16 lg:py-40">
        
        {/* ===================== COMPANY / INTRO ===================== */}
        <div id="about" className="scroll-mt-28">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
                About Sajims
              </p>
              <h2 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                A technology partner,
                <span className="mt-2 block text-slate-400">
                  not just a vendor.
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
              <p className="text-xl leading-relaxed text-slate-300 md:text-2xl md:leading-relaxed">
                Sajims is a modern technology company focused on designing,
                developing and delivering digital solutions that help
                organizations operate, grow and innovate.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                From custom software and business systems to websites, mobile
                applications, cloud platforms and emerging AI technologies — we
                combine engineering, creativity and business understanding to
                transform ideas into practical digital products.
              </p>

              <a
                href="#services"
                className="group mt-10 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-base font-semibold text-white transition-all duration-300 hover:gap-5 hover:border-cyan-400"
              >
                Explore our capabilities
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ===================== MISSION / VISION ===================== */}
        <div className="mt-28 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-[#0a1e1b]/80 p-8 md:p-12 lg:p-16"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                <Code2 size={20} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Our Mission
              </p>
            </div>
            <h3 className="max-w-xl text-3xl font-medium leading-tight md:text-4xl">
              Build technology that makes organizations better.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              Our mission is to engineer digital systems that make
              organizations more efficient, connected, secure and capable of
              achieving their goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-[#0c2622]/60 p-8 md:p-12 lg:p-16"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                <Lightbulb size={20} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Our Vision
              </p>
            </div>
            <h3 className="max-w-xl text-3xl font-medium leading-tight md:text-4xl">
              Become a trusted technology partner for ambitious organizations.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              We envision Sajims becoming a trusted technology company across
              Africa and the global market, helping organizations use
              technology to create sustainable growth and meaningful impact.
            </p>
          </motion.div>
        </div>

        {/* ===================== STATS ===================== */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:mt-32 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a1e1b]/70 p-7 sm:p-10 md:p-12"
            >
              <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===================== TWO PILLARS ===================== */}
        <div className="mt-28 grid gap-6 lg:mt-36 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.05] md:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
              <Code2 size={26} />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">Software Development</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              We design and build custom software, web applications, mobile apps
              and digital platforms tailored to your business needs.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all group-hover:gap-3"
            >
              View services
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.05] md:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
              <ShoppingBag size={26} />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">TechStore</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              We also offer quality computer gadgets, laptops, smartphones,
              components and accessories through our carefully curated store.
            </p>
            <a
              href="#techstore"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all group-hover:gap-3"
            >
              Visit TechStore
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* ===================== OUR TEAM ===================== */}
        <div id="teams" className="mt-28 scroll-mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              Our Team
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The people behind Sajims.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              We are a multidisciplinary team of developers, designers, 
              engineers and strategists who care deeply about building 
              technology that actually works for people and businesses.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: "Software Engineers", desc: "Building reliable and scalable systems" },
              { role: "Product Designers", desc: "Crafting clean and intuitive experiences" },
              { role: "Project Managers", desc: "Keeping delivery clear and on track" },
            ].map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                  <Users size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
 
{/* ===================== FOUNDER / CEO ===================== */}
<div id="founder" className="mt-28 scroll-mt-28 lg:mt-36">
  <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
    
    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="lg:col-span-5"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <div className="aspect-[4/5] w-full">
          <img
            src="/founder.png"   
            alt="Founder and CEO of Sajims"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
          <p className="text-xs font-medium text-white">Founder & CEO</p>
        </div>
      </div>
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="lg:col-span-7"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
        Leadership
      </p>

      <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Meet the Founder
        <span className="mt-2 block text-slate-400">& CEO</span>
      </h2>

      <p className="mt-4 text-xl font-medium text-white">
        Engineer Jimmy Safari
      </p>
      <p className="mt-1 text-sm text-cyan-300">
        Founder & Chief Executive Officer
      </p>

      <div className="mt-8 space-y-5 text-base leading-8 text-slate-400 md:text-lg">
        <p>
          Sajims was founded with a clear goal: to help organizations and
          individuals use technology in practical, meaningful ways —
          through reliable software solutions and quality tech products.
        </p>
        <p>
          With a focus on software development and the growing TechStore
          vision, the company is building a bridge between digital
          solutions and everyday technology needs across Kenya and beyond.
        </p>
      </div>

      {/* Quote */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-base italic leading-7 text-slate-300">
          “Technology should not be complicated. It should help people
          work better, grow faster, and access tools that actually make a
          difference.”
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300"
        >
          Get in touch
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  </div>
</div>

        {/* ===================== CAREERS ===================== */}
        <div id="careers" className="mt-28 scroll-mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              Careers
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Join us in building meaningful technology.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              We’re always looking for talented people who are curious, 
              disciplined and excited about creating real impact through technology.
            </p>
          </motion.div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-cyan-300" />
                  <h3 className="text-xl font-semibold">Open Roles</h3>
                </div>
                <p className="mt-3 max-w-xl text-slate-400">
                  Currently we don’t have open positions listed, but we’re 
                  always happy to hear from talented people. Send us your CV 
                  and tell us how you’d like to contribute.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Get in touch
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* ===================== HOW WE WORK ===================== */}
        <div id="how-we-work" className="mt-28 scroll-mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              How We Work
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A clear process from idea to delivery.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-cyan-400">
                    {step.number}
                  </span>
                  <Workflow size={16} className="text-slate-500" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================== CAPABILITIES ===================== */}
        <div className="mt-28 grid gap-12 lg:mt-36 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              What We Do
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Technology built around your goals.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400 md:text-lg">
              We bring together software engineering, product thinking and
              modern technology to deliver solutions that are useful today and
              ready for tomorrow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="divide-y divide-white/10 border-y border-white/10">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle2
                      size={18}
                      className="text-slate-500 transition-colors duration-300 group-hover:text-cyan-300"
                    />
                    <span className="text-base font-medium text-slate-300 md:text-lg">
                      {capability}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===================== VALUES ===================== */}
        <div className="mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              Our Values
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Principles that guide the way we build.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-cyan-500/20 hover:bg-white/[0.05] md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
                    {value.description}
                  </p>
                  <div className="mt-8 h-px w-10 bg-cyan-400/60 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ===================== BOTTOM CTA ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c2622] to-[#050505] p-8 md:p-12 lg:mt-36 lg:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles size={16} className="text-yellow-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  Build With Sajims
                </p>
              </div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Have an idea that could become a digital product?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                Let’s turn your idea into a reliable, scalable and meaningful
                technology solution.
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