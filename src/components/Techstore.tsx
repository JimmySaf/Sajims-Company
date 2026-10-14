"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Headphones,
  HardDrive,
  Star,
  Construction,
  ShieldCheck,
  Users,
  LifeBuoy,
} from "lucide-react";

/* Palette (same as Navbar, Hero, About and Services)
   cream #fcf8ee   orange #fc9414   deep orange text #b86300   peach #fde7c7   ink slate-900 */

const categories = [
  {
    icon: Laptop,
    title: "Laptops & Computers",
    description: "Business, student and performance laptops carefully selected for reliability.",
  },
  {
    icon: Smartphone,
    title: "Smartphones & Tablets",
    description: "Latest mobile devices with good performance and lasting value.",
  },
  {
    icon: Cpu,
    title: "Components",
    description: "Processors, RAM, storage and other internal computer parts.",
  },
  {
    icon: Monitor,
    title: "Monitors & Displays",
    description: "Office and creative monitors for clear and comfortable viewing.",
  },
  {
    icon: Headphones,
    title: "Accessories",
    description: "Keyboards, mice, headsets, chargers and everyday essentials.",
  },
  {
    icon: HardDrive,
    title: "Storage & Networking",
    description: "External drives, SSDs, routers and connectivity solutions.",
  },
];

const featured = [
  {
    icon: Laptop,
    name: "Business Laptop",
    category: "Laptops",
    price: "From KES 45,000",
    tag: "Popular",
  },
  {
    icon: Headphones,
    name: "Wireless Headset",
    category: "Accessories",
    price: "From KES 3,500",
    tag: "New",
  },
  {
    icon: Monitor,
    name: "24\" Office Monitor",
    category: "Displays",
    price: "From KES 12,000",
    tag: "Value",
  },
  {
    icon: Smartphone,
    name: "Smartphone Series",
    category: "Mobile",
    price: "From KES 18,000",
    tag: "Trending",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Curated selection",
    description:
      "We focus on products that offer good performance, reliability and value — not every random gadget.",
  },
  {
    icon: Users,
    title: "Business & personal use",
    description:
      "Whether you need devices for your team or personal use, we help you choose the right options.",
  },
  {
    icon: LifeBuoy,
    title: "Support when you need it",
    description:
      "From product advice to after-sales guidance, we aim to make the buying experience simple and clear.",
  },
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

export default function TechStore() {
  return (
    <section
      id="techstore"
      className="relative scroll-mt-20 overflow-hidden border-t border-stone-200/70 bg-[#fcf8ee] text-slate-900"
    >
      {/* Soft peach shape and glow (echoes the hero) */}
      <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rotate-12 rounded-[4rem] bg-[#fde7c7]/50" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-80 w-80 rounded-full bg-[#fc9414]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-8 md:py-32 lg:px-16 lg:py-40">
        {/* ===================== COMING SOON BANNER ===================== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 overflow-hidden rounded-2xl border border-[#fc9414]/30 bg-[#fc9414]/10 px-6 py-5 md:px-8"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fc9414]/20 text-[#b86300]">
                <Construction size={22} />
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-[#b86300]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#fc9414]" />
                  Coming Soon
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  TechStore is currently under development. Product listings and
                  purchasing will be available soon.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc9414]/60"
            >
              Notify Me
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* ===================== HEADER ===================== */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <Label>TechStore</Label>
            <h2 className="max-w-xl text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <span className="block font-light">Quality tech</span>
              <span className="mt-2 block font-extrabold">
                for work and everyday use.
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
              TechStore is our product side — offering carefully selected
              computer gadgets, devices and accessories.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Whether you need a reliable laptop for business, a smartphone,
              or quality accessories, we focus on products that deliver
              performance and lasting value.
            </p>
          </motion.div>
        </div>

        {/* ===================== CATEGORIES ===================== */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden p-7 md:p-8 ${card}`}
              >
                {/* Orange accent that grows on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#fc9414] transition-transform duration-500 group-hover:scale-x-100" />

                <div
                  className={`h-12 w-12 rounded-2xl transition-colors group-hover:bg-[#fc9414]/25 ${iconTile}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ===================== FEATURED PRODUCTS ===================== */}
        <div className="mt-28 lg:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <Label>Featured</Label>
              <h3 className="text-3xl tracking-tight sm:text-4xl">
                <span className="font-light">Popular </span>
                <span className="font-extrabold">products</span>
              </h3>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#b86300] transition-all hover:gap-3"
            >
              Request a product
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-2xl border border-stone-200 bg-white/70 shadow-sm shadow-stone-900/5 transition hover:border-[#fc9414]/50 hover:bg-white hover:shadow-xl hover:shadow-[#fc9414]/10"
                >
                  {/* Image placeholder: peach panel with the product's icon */}
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#fde7c7] to-[#fff1da]">
                    <Icon
                      size={44}
                      strokeWidth={1.5}
                      className="text-[#fc9414]/70 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#fc9414]/15 px-2.5 py-1 text-[11px] font-semibold text-[#b86300]">
                        {product.tag}
                      </span>
                      <div className="flex items-center gap-0.5 text-[#fc9414]">
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} className="text-slate-300" />
                      </div>
                    </div>

                    <h4 className="mt-3 text-base font-semibold">
                      {product.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {product.category}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#b86300]">
                      {product.price}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================== WHY TECHSTORE ===================== */}
        <div className="mt-28 grid gap-6 lg:mt-36 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-7 ${card}`}
              >
                <div className={`h-11 w-11 rounded-full ${iconTile}`}>
                  <Icon size={20} />
                </div>
                <h4 className="mt-5 text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
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
                Looking for something specific?
              </p>
              <h3 className="max-w-2xl text-3xl leading-tight text-white sm:text-4xl">
                <span className="font-light">Tell us </span>
                <span className="font-extrabold">what you need.</span>
              </h3>
              <p className="mt-4 max-w-xl text-base text-slate-300">
                Share the product or device you’re looking for and we’ll help
                you find a suitable option.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#fc9414] px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-[#fc9414]/20 transition-all duration-300 hover:bg-[#ffa62e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Contact TechStore
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