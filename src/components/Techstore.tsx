import { motion } from "framer-motion";
import {
  ArrowRight,
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Headphones,
  HardDrive,
  ShoppingBag,
  Star,
} from "lucide-react";

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
    name: "Business Laptop",
    category: "Laptops",
    price: "From KES 45,000",
    tag: "Popular",
  },
  {
    name: "Wireless Headset",
    category: "Accessories",
    price: "From KES 3,500",
    tag: "New",
  },
  {
    name: "24\" Office Monitor",
    category: "Displays",
    price: "From KES 12,000",
    tag: "Value",
  },
  {
    name: "Smartphone Series",
    category: "Mobile",
    price: "From KES 18,000",
    tag: "Trending",
  },
];

export default function TechStore() {
  return (
    <section
      id="techstore"
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
              TechStore
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Quality tech
              <span className="mt-2 block text-slate-400">
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
            <p className="text-xl leading-relaxed text-slate-300 md:text-2xl">
              TechStore is our product side — offering carefully selected 
              computer gadgets, devices and accessories.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
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
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-cyan-500/25 hover:bg-white/[0.05] md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 transition-colors group-hover:bg-cyan-500/25">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
                Featured
              </p>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Popular products
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:gap-3"
            >
              Request a product
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-500/20 hover:bg-white/[0.05]"
              >
                {/* Image placeholder */}
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#0c2622] to-[#0a1e1b]">
                  <ShoppingBag size={36} className="text-cyan-500/40" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-300">
                      {product.tag}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} className="text-slate-600" />
                    </div>
                  </div>

                  <h4 className="mt-3 text-base font-semibold">{product.name}</h4>
                  <p className="mt-1 text-xs text-slate-500">{product.category}</p>
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================== WHY TECHSTORE ===================== */}
        <div className="mt-28 grid gap-6 lg:mt-36 lg:grid-cols-3">
          {[
            {
              title: "Curated selection",
              description:
                "We focus on products that offer good performance, reliability and value — not every random gadget.",
            },
            {
              title: "Business & personal use",
              description:
                "Whether you need devices for your team or personal use, we help you choose the right options.",
            },
            {
              title: "Support when you need it",
              description:
                "From product advice to after-sales guidance, we aim to make the buying experience simple and clear.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
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
                Looking for something specific?
              </p>
              <h3 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Tell us what you need.
              </h3>
              <p className="mt-4 max-w-xl text-base text-slate-400">
                Share the product or device you’re looking for and we’ll help 
                you find a suitable option.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-yellow-300"
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