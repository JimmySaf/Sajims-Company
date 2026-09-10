import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Construction } from "lucide-react";

export default function TechStore() {
  return (
    <section
      id="techstore"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-[1500px] flex-col items-center justify-center px-6 py-24 text-center sm:px-8 md:py-32 lg:px-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Construction size={36} className="text-yellow-400" />
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
            TechStore
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Coming Soon
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
            We’re currently preparing TechStore — our platform for quality 
            laptops, smartphones, computer components and accessories.
          </p>

          <p className="mt-4 text-base text-slate-500">
            Stay tuned. Something useful is on the way.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Notify Me
              <ArrowRight size={16} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
            >
              View Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}