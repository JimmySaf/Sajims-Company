"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
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

/* Palette (same as Navbar and Hero)
   cream #fcf8ee   orange #fc9414   deep orange text #b86300   peach #fde7c7   ink slate-900 */

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

const teamRoles = [
  { role: "Software Engineers", desc: "Building reliable and scalable systems" },
  { role: "Product Designers", desc: "Crafting clean and intuitive experiences" },
  { role: "Project Managers", desc: "Keeping delivery clear and on track" },
];

/* Second leader. */
const salesManager = {
  name: "Bencarson Ondimu",
  role: "Sales Manager",
  tagline: "Sales Manager · Surveyor · GIS Analyst",
  image: "/salesmanager.png",
  bio: [
    "Leads Sajims’ sales and client relationships with a rare technical edge: training in Geomatic Engineering and Geospatial Information Systems from JKUAT.",
    "As a skilled surveyor and GIS analyst, he understands data, location and precision, so he speaks our clients’ language and recommends solutions that truly fit.",
  ],
  skills: [
    "Geomatic Engineering",
    "Geospatial Information Systems",
    "Land Surveying",
    
  ],
};

/* Shared style tokens */
const card =
  "rounded-3xl border border-stone-200 bg-white/70 shadow-sm shadow-stone-900/5 transition-all duration-500 hover:border-[#fc9414]/50 hover:bg-white hover:shadow-xl hover:shadow-[#fc9414]/10";
const iconTile =
  "flex items-center justify-center bg-[#fc9414]/15 text-[#b86300]";
const primaryBtn =
  "group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc9414]/60";

/* Section label: same pill as the hero badge */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#fc9414]/30 bg-[#fc9414]/10 px-4 py-1.5 text-sm font-semibold text-[#b86300]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#fc9414]" />
      {children}
    </p>
  );
}

/* Numbers count up when they scroll into view (e.g. "14+", "24/7", "100%") */
function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    if (reduceMotion) {
      setN(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, reduceMotion]);

  if (!match) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {n}
      {match[2]}
    </span>
  );
}

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#fcf8ee] text-slate-900">
      {/* Soft peach shape and glow (echoes the hero) */}
      <div className="pointer-events-none absolute -right-32 top-24 h-[28rem] w-[28rem] rotate-12 rounded-[4rem] bg-[#fde7c7]/60" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-80 w-80 rounded-full bg-[#fc9414]/10 blur-3xl" />

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
              <Label>About Sajims</Label>
              <h2 className="max-w-xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                <span className="block font-light">A technology partner,</span>
                <span className="mt-2 block font-extrabold">
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
              <p className="text-xl leading-relaxed text-slate-800 md:text-2xl md:leading-relaxed">
                Sajims is a modern technology company focused on designing,
                developing and delivering digital solutions that help
                organizations operate, grow and innovate.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                From custom software and business systems to websites, mobile
                applications, cloud platforms and emerging AI technologies — we
                combine engineering, creativity and business understanding to
                transform ideas into practical digital products.
              </p>

              <a
                href="#services"
                className="group mt-10 inline-flex items-center gap-3 border-b border-slate-900/30 pb-2 text-base font-semibold text-slate-900 transition-all duration-300 hover:gap-5 hover:border-[#fc9414]"
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
        <div className="mt-28 grid gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 shadow-sm shadow-stone-900/5 md:grid-cols-2 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 p-8 md:p-12 lg:p-16"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className={`h-11 w-11 rounded-full ${iconTile}`}>
                <Code2 size={20} />
              </div>
              <p className="text-sm font-semibold text-[#b86300]">Our Mission</p>
            </div>
            <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Build technology that makes organizations better.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
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
            className="bg-[#fff1da] p-8 md:p-12 lg:p-16"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className={`h-11 w-11 rounded-full ${iconTile}`}>
                <Lightbulb size={20} />
              </div>
              <p className="text-sm font-semibold text-[#b86300]">Our Vision</p>
            </div>
            <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Become a trusted technology partner for ambitious organizations.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              We envision Sajims becoming a trusted technology company across
              Africa and the global market, helping organizations use
              technology to create sustainable growth and meaningful impact.
            </p>
          </motion.div>
        </div>

        {/* ===================== STATS ===================== */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 shadow-sm shadow-stone-900/5 lg:mt-32 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 p-7 sm:p-10 md:p-12"
            >
              <span className="mb-5 block h-1 w-8 rounded-full bg-[#fc9414]" />
              <p className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-4 text-sm font-medium text-slate-600">
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
            className={`group p-8 md:p-10 ${card}`}
          >
            <div className={`h-14 w-14 rounded-2xl ${iconTile}`}>
              <Code2 size={26} />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">Software Development</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We design and build custom software, web applications, mobile apps
              and digital platforms tailored to your business needs.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b86300] transition-all group-hover:gap-3"
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
            className={`group p-8 md:p-10 ${card}`}
          >
            <div className={`h-14 w-14 rounded-2xl ${iconTile}`}>
              <ShoppingBag size={26} />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">TechStore</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We also offer quality computer gadgets, laptops, smartphones,
              components and accessories through our carefully curated store.
            </p>
            <a
              href="#techstore"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b86300] transition-all group-hover:gap-3"
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
            <Label>Our Team</Label>
            <h2 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
              <span className="font-light">The people behind </span>
              <span className="font-extrabold">Sajims.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              We are a multidisciplinary team of developers, designers,
              engineers and strategists who care deeply about building
              technology that actually works for people and businesses.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamRoles.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-6 ${card}`}
              >
                <div className={`h-11 w-11 rounded-full ${iconTile}`}>
                  <Users size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
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
              <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-[#fde7c7]/60 shadow-xl shadow-stone-900/10">
                <div className="aspect-[4/5] w-full">
                  <img
                    src="/founder.png"
                    alt="Founder and CEO of Sajims"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-5 left-5 rounded-full border border-stone-200 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
                  <p className="text-xs font-semibold text-slate-900">
                    Founder & CEO
                  </p>
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
              <Label>Leadership</Label>

              <h2 className="max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                <span className="block font-light">Meet the Founder</span>
                <span className="mt-1 block font-extrabold">and CEO</span>
              </h2>

              <p className="mt-4 text-xl font-semibold text-slate-900">
                Engineer Jimmy Safari
              </p>
              <p className="mt-1 text-sm font-medium text-[#b86300]">
                Founder & Chief Executive Officer
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 md:text-lg">
                <p>
                  Sajims was founded with a clear goal: to help organizations and
                  individuals use technology in practical, meaningful ways —
                  through reliable software solutions and quality tech products.
                </p>
                <p>
                  With a focus on software development and the growing TechStore
                  vision, the company is building a bridge between digital
                  solutions and everyday technology needs across Kenya and
                  beyond.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-8 rounded-2xl border border-l-4 border-stone-200 border-l-[#fc9414] bg-white/70 p-6 shadow-sm shadow-stone-900/5">
                <p className="text-base italic leading-7 text-slate-700">
                  “Technology should not be complicated. It should help people
                  work better, grow faster, and access tools that actually make
                  a difference.”
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className={primaryBtn}>
                  Get in touch
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===================== SALES MANAGER ===================== */}
        <div id="sales" className="mt-20 scroll-mt-28 lg:mt-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Image (shown first on mobile, on the right on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:order-2 lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-[#fde7c7]/60 shadow-xl shadow-stone-900/10">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={salesManager.image}
                    alt={`${salesManager.role} at Sajims`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-5 left-5 rounded-full border border-stone-200 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
                  <p className="text-xs font-semibold text-slate-900">
                    {salesManager.role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:order-1 lg:col-span-7"
            >
              <Label>Sales & Clients</Label>

              <h2 className="max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
                <span className="block font-light">Meet the</span>
                <span className="mt-1 block font-extrabold">Sales Manager</span>
              </h2>

              <p className="mt-4 text-xl font-semibold text-slate-900">
                {salesManager.name}
              </p>
              <p className="mt-1 text-sm font-medium text-[#b86300]">
                {salesManager.tagline}
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 md:text-lg">
                {salesManager.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* Skills */}
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {salesManager.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-800 shadow-sm shadow-stone-900/5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fc9414]" />
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className={primaryBtn}>
                  Talk to sales
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
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
            <Label>Careers</Label>
            <h2 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
              <span className="font-light">Join us in building </span>
              <span className="font-extrabold">meaningful technology.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              We’re always looking for talented people who are curious,
              disciplined and excited about creating real impact through
              technology.
            </p>
          </motion.div>

          <div className={`mt-10 p-8 md:p-10 ${card}`}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-[#b86300]" />
                  <h3 className="text-xl font-semibold">Open Roles</h3>
                </div>
                <p className="mt-3 max-w-xl text-slate-600">
                  Currently we don’t have open positions listed, but we’re
                  always happy to hear from talented people. Send us your CV
                  and tell us how you’d like to contribute.
                </p>
              </div>
              <a href="#contact" className={`${primaryBtn} shrink-0`}>
                Get in touch
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
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
            <Label>How We Work</Label>
            <h2 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
              <span className="font-light">A clear process from </span>
              <span className="font-extrabold">idea to delivery.</span>
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
                className={`relative rounded-2xl p-6 ${card}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#fc9414]">
                    {step.number}
                  </span>
                  <Workflow size={18} className="text-slate-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {/* Connector between steps (desktop) */}
                {index < processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-6 top-10 hidden h-px w-6 bg-[#fc9414]/60 lg:block"
                  />
                )}
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
            <Label>What We Do</Label>
            <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl">
              <span className="block font-light">Technology built</span>
              <span className="block font-extrabold">around your goals.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
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
            <div className="divide-y divide-stone-200 border-y border-stone-200">
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
                      className="text-[#fc9414]/70 transition-colors duration-300 group-hover:text-[#fc9414]"
                    />
                    <span className="text-base font-medium text-slate-800 md:text-lg">
                      {capability}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#b86300] group-hover:opacity-100"
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
            <Label>Our Values</Label>
            <h2 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
              <span className="font-light">Principles that guide the way </span>
              <span className="font-extrabold">we build.</span>
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
                  className={`group p-8 md:p-10 ${card}`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`h-12 w-12 rounded-full ${iconTile}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-300">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                    {value.description}
                  </p>
                  <div className="mt-8 h-0.5 w-10 rounded-full bg-[#fc9414] transition-all duration-500 group-hover:w-full" />
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
          className="relative mt-28 overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-2xl shadow-slate-900/20 md:p-12 lg:mt-36 lg:p-16"
        >
          {/* Warm glow so the dark card still feels part of the palette */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#fc9414]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#fde7c7]/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles size={16} className="text-[#fc9414]" />
                <p className="text-sm font-semibold text-[#fc9414]">
                  Build With Sajims
                </p>
              </div>
              <h2 className="max-w-3xl text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                <span className="font-light">Have an idea that could become </span>
                <span className="font-extrabold">a digital product?</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Let’s turn your idea into a reliable, scalable and meaningful
                technology solution.
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