"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  Clock, 
  Globe, 
  ArrowUpRight,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("bijuabhishek530@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = () => {
    setIsSending(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSending(false);
    }, 800);

    setTimeout(() => setSubmitted(false), 6000);
  };

  useEffect(() => {
    if (submitted && formRef.current) {
      formRef.current.reset();
    }
  }, [submitted]);

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Start a Conversation"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an upcoming mobile app project, need Flutter architecture consulting, or want to discuss a full-time engineering opportunity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info & Timezone Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Currently Accepting Projects</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white leading-tight">
                Get in Touch Directly
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Have a project timeline or wireframe? Send an email or fill out the form. 
                I typically respond within <span className="text-slate-200 font-semibold">4–8 hours</span>.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card with Copy Trigger */}
              <div className="p-5 rounded-2xl glass-card border border-slate-800/80 hover:border-sky-500/40 transition-all flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Address</span>
                    <a
                      href="mailto:bijuabhishek530@gmail.com"
                      className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors block"
                    >
                      bijuabhishek530@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60 flex items-center gap-1.5 text-xs font-medium"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Discord Card */}
              <a
                href="https://discordapp.com/users/abhishek_b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card border border-slate-800/80 hover:border-indigo-500/40 transition-all flex items-center justify-between gap-4 group block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Discord Community</span>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      abhishek_b
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </a>

              {/* Location & Timezone Card */}
              <div className="p-5 rounded-2xl glass-card border border-slate-800/80 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                  <Globe size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location & Timezone</span>
                  <div className="text-sm sm:text-base font-bold text-white">
                    India (IST • UTC +5:30)
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Clock size={12} className="text-sky-400" />
                    <span>Flexible overlap with US, UK & APAC hours</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Availability checklist */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="font-semibold text-white mb-2">Available for:</div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400">✓</span> Full-time Mobile Developer positions
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400">✓</span> Fixed-Scope MVP / Contract Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400">✓</span> Flutter Technical Architecture Consulting
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Form Container */}
            <div className="relative rounded-3xl p-8 sm:p-10 glass-card border border-slate-800/80 shadow-2xl bg-[#0b1120]">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white">Send a Direct Message</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below and I'll receive it straight into my inbox.
                </p>
              </div>

              <form
                ref={formRef}
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1J8wQcxefqIQSXiAWtBYs56zJtg4g82XWLr5NO5FyYh0RPQ/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="entry.1874968991"
                    placeholder="e.g. Alex Johnson"
                    required
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="entry.1933337502"
                    placeholder="alex@company.com"
                    required
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Details & Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    name="entry.1922595339"
                    rows={5}
                    placeholder="Tell me about your app goals, timeline, or open role..."
                    required
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending || submitted}
                  className={`w-full py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg ${
                    isSending || submitted
                      ? "bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700"
                      : "bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 text-slate-950 hover:opacity-95 shadow-[0_4px_25px_rgba(56,189,248,0.3)] hover:shadow-[0_4px_30px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5"
                  }`}
                >
                  {isSending ? (
                    <span>Transmitting Message...</span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle size={18} />
                      Message Received!
                    </span>
                  ) : (
                    <>
                      <span>Send Project Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Success modal pop-in */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-slate-950/95 backdrop-blur-md rounded-3xl"
                  >
                    <div className="text-center flex flex-col items-center gap-4 max-w-sm">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                        <CheckCircle size={36} />
                      </div>
                      <h4 className="text-2xl font-bold text-white">Thank You!</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Your message has been delivered to Abhishek. I'll review your inquiry and get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} />
    </section>
  );
}
