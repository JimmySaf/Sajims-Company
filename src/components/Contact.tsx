import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setStatus("loading");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        from_name: "Sajims Website",
      }),
    });

    const result = await response.json();

    console.log("Web3Forms response:", result);

    if (response.ok && result.success === true) {
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Keep success message visible
      return;
    }

    console.error("Web3Forms submission failed:", result);
    setStatus("error");
  } catch (error) {
    console.error("Contact form error:", error);
    setStatus("error");
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-8 md:py-32 lg:px-16 lg:py-40">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
              Contact Us
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Let’s start a
              <span className="mt-2 block text-slate-400">conversation.</span>
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
              Whether you have a project idea, need technology products, or just
              want to learn more about Sajims — we’d love to hear from you.
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Email</p>
                  <a
                    href="mailto:safarijimmy25@gmail.com"
                    className="mt-1 block text-base font-medium text-white transition hover:text-cyan-300"
                  >
                    safarijimmy25@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Phone</p>
                  <a
                    href="tel:+254791939576"
                    className="mt-1 block text-base font-medium text-white transition hover:text-cyan-300"
                  >
                    +254 791 939 576
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Location</p>
                  <p className="mt-1 text-base font-medium text-white">
                    Mombasa, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    Working Hours
                  </p>
                  <p className="mt-1 text-base font-medium text-white">
                    Mon – Fri: 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm leading-7 text-slate-400">
                We typically respond within 24 hours on business days. For
                urgent requests, feel free to call us directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option value="" className="bg-[#0a1e1b]">
                    Select a subject
                  </option>
                  <option value="Software Development" className="bg-[#0a1e1b]">
                    Software Development
                  </option>
                  <option value="TechStore / Products" className="bg-[#0a1e1b]">
                    TechStore / Products
                  </option>
                  <option value="Consultation" className="bg-[#0a1e1b]">
                    Consultation
                  </option>
                  <option value="Careers" className="bg-[#0a1e1b]">
                    Careers
                  </option>
                  <option value="Other" className="bg-[#0a1e1b]">
                    Other
                  </option>
                </select>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 size={18} />
                  Message sent successfully! We’ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                 Message could not be sent. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}