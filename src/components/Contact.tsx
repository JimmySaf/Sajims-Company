"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ChevronDown,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

/* Palette (same as Navbar, Hero, About, Services and TechStore)
   cream #fcf8ee   orange #fc9414   deep orange text #b86300   peach #fde7c7   ink slate-900 */

type FormStatus = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "safarijimmy25@gmail.com",
    href: "mailto:safarijimmy25@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 791 939 576",
    href: "tel:+254791939576",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri: 8:00 AM – 6:00 PM",
  },
];

const subjects = [
  "Software Development",
  "TechStore / Products",
  "Consultation",
  "Careers",
  "Other",
];

/* Shared style tokens */
const iconTile =
  "flex items-center justify-center bg-[#fc9414]/15 text-[#b86300]";
const fieldClass =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#fc9414] focus:ring-2 focus:ring-[#fc9414]/25 disabled:cursor-not-allowed disabled:opacity-60";
const labelClass = "mb-2 block text-sm font-medium text-slate-700";

/* Section label: same pill as the hero badge */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#fc9414]/30 bg-[#fc9414]/10 px-4 py-1.5 text-sm font-semibold text-[#b86300]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#fc9414]" />
      {children}
    </p>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove previous messages when the user starts editing again
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Check that the environment variable exists
    if (!accessKey) {
      console.error("Web3Forms access key is missing.");
      setErrorMessage(
        "Contact form configuration is missing. Please try again later."
      );
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Sajims Website",
        }),
      });

      const result = await response.json();

      console.log("Web3Forms response:", result);

      // Only show success when both the HTTP request
      // and Web3Forms response confirm success
      if (response.ok && result.success === true) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        return;
      }

      console.error("Web3Forms submission failed:", result);

      setErrorMessage(
        result.message || "Message could not be sent. Please try again."
      );
      setStatus("error");
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        "Unable to connect to the contact service. Please try again."
      );
      setStatus("error");
    }
  };

  const loading = status === "loading";

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-stone-200/70 bg-[#fcf8ee] text-slate-900"
    >
      {/* Soft peach shape and glow (echoes the hero) */}
      <div className="pointer-events-none absolute -left-32 top-32 h-[26rem] w-[26rem] -rotate-12 rounded-[4rem] bg-[#fde7c7]/50" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#fc9414]/10 blur-3xl" />

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
            <Label>Contact Us</Label>

            <h2 className="max-w-xl text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <span className="block font-light">Let’s start a</span>
              <span className="mt-2 block font-extrabold">conversation.</span>
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
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className={`h-11 w-11 shrink-0 rounded-xl ${iconTile}`}
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-all text-base font-medium text-slate-900 transition hover:text-[#b86300]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base font-medium text-slate-900">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl border border-l-4 border-stone-200 border-l-[#fc9414] bg-white/70 p-6 shadow-sm shadow-stone-900/5">
              <p className="text-sm leading-7 text-slate-600">
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
              className="rounded-3xl border border-stone-200 bg-white/70 p-7 shadow-xl shadow-stone-900/5 md:p-10"
            >
              <fieldset disabled={loading} className="contents">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>

                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${fieldClass} appearance-none pr-11 ${
                        formData.subject ? "" : "text-slate-400"
                      }`}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option
                          key={subject}
                          value={subject}
                          className="text-slate-900"
                        >
                          {subject}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className={labelClass}>
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
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </fieldset>

              {/* Success Message */}
              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                >
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>
                    Message sent successfully! We’ll get back to you soon.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 flex items-center gap-2 rounded-xl border border-red-600/30 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <AlertCircle size={18} className="shrink-0" />
                  <span>
                    {errorMessage ||
                      "Message could not be sent. Please try again."}
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc9414]/60 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {loading ? (
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