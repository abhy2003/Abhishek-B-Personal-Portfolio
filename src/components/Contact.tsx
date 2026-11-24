"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  Clock, 
  Globe, 
  ArrowUpRight
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
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an upcoming mobile app project, need Flutter consulting, or want to discuss full-time engineering roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Info & Timezone Badges */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] animate-ping" />
                <span>Available for New Projects</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Get in Touch Directly
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Have a project timeline or wireframe? I typically respond within <span className="text-[#3ecf8e] font-semibold">4–8 hours</span>.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3">
              
              {/* Email Card with Copy Trigger */}
              <div className="p-4 rounded-xl glass-card border border-zinc-800/80 hover:border-[#3ecf8e]/40 transition-all flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#3ecf8e]/10 text-[#3ecf8e] border border-[#3ecf8e]/20 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Email</span>
                    <a
                      href="mailto:bijuabhishek530@gmail.com"
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#3ecf8e] transition-colors block"
                    >
                      bijuabhishek530@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all border border-zinc-700/60 flex items-center gap-1 text-[11px] font-medium"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-[#3ecf8e]" />
                      <span className="text-[#3ecf8e]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
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
                className="p-4 rounded-xl glass-card border border-zinc-800/80 hover:border-[#3ecf8e]/40 transition-all flex items-center justify-between gap-3 group block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#3ecf8e]/10 text-[#3ecf8e] border border-[#3ecf8e]/20 group-hover:scale-105 transition-transform">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Discord</span>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#3ecf8e] transition-colors">
                      abhishek_b
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-[#3ecf8e] transition-colors" />
              </a>

              {/* Location & Timezone Card */}
              <div className="p-4 rounded-xl glass-card border border-zinc-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700">
                  <Globe size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Location & Timezone</span>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    India (IST • UTC +5:30)
                  </div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                    <Clock size={11} className="text-[#3ecf8e]" />
                    <span>Flexible overlap with US, UK & APAC</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Compact Availability Checklist */}
            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1.5 text-xs text-zinc-300">
              <div className="text-[11px] font-bold text-white">Accepting:</div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="text-[#3ecf8e]">✓</span> Full-time Mobile Developer positions
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="text-[#3ecf8e]">✓</span> Fixed-Scope MVP / Contract delivery
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact High-Tech Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl p-6 sm:p-7 glass-card border border-zinc-800/80 shadow-xl bg-[#0e0f13]">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-white">Send a Message</h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Direct message straight to my inbox via Google Forms.
                </p>
              </div>

              <form
                ref={formRef}
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1J8wQcxefqIQSXiAWtBYs56zJtg4g82XWLr5NO5FyYh0RPQ/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#3ecf8e]">*</span>
                  </label>
                  <input
                    type="text"
                    name="entry.1874968991"
                    placeholder="e.g. Alex Johnson"
                    required
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#3ecf8e] focus:ring-1 focus:ring-[#3ecf8e] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Email <span className="text-[#3ecf8e]">*</span>
                  </label>
                  <input
                    type="email"
                    name="entry.1933337502"
                    placeholder="alex@company.com"
                    required
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#3ecf8e] focus:ring-1 focus:ring-[#3ecf8e] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Message <span className="text-[#3ecf8e]">*</span>
                  </label>
                  <textarea
                    name="entry.1922595339"
                    rows={4}
                    placeholder="Tell me about your app goals, timeline, or open role..."
                    required
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl p-3.5 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#3ecf8e] focus:ring-1 focus:ring-[#3ecf8e] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending || submitted}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    isSending || submitted
                      ? "bg-zinc-800 text-zinc-400 cursor-not-allowed border border-zinc-700"
                      : "bg-[#3ecf8e] hover:bg-[#34b27b] text-slate-950 shadow-[0_0_20px_rgba(62,207,142,0.3)] hover:scale-[1.01]"
                  }`}
                >
                  {isSending ? (
                    <span>Sending...</span>
                  ) : submitted ? (
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle size={16} />
                      Message Sent!
                    </span>
                  ) : (
                    <>
                      <span>Send Project Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>

              {/* Success Pop-in */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-zinc-950/95 backdrop-blur-md rounded-2xl"
                  >
                    <div className="text-center flex flex-col items-center gap-3 max-w-xs">
                      <div className="w-12 h-12 rounded-full bg-[#3ecf8e]/20 border border-[#3ecf8e]/40 flex items-center justify-center text-[#3ecf8e] shadow-[0_0_15px_rgba(62,207,142,0.3)]">
                        <CheckCircle size={28} />
                      </div>
                      <h4 className="text-lg font-bold text-white">Thank You!</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Your message has been received. Abhishek will get back to you shortly.
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
