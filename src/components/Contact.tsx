import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { profileData } from "../data/profile";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const tickerItems = [
    "AVAILABLE FOR MOBILE APP PROJECTS",
    "FLUTTER • KOTLIN • DART",
    "12+ PRODUCTION APPS SHIPPED",
    "ANDROID 10–14 COMPATIBILITY",
    "CROSS-PLATFORM & NATIVE SDKs",
    "90% PERFORMANCE OPTIMIZATION",
    "BLoC • RIVERPOD • GetX",
    "AGORA RTC & RAZORPAY INTEGRATION",
    "GOOGLE PLAY & APP STORE CONNECT",
  ];

  return (
    <section id="contact" className="relative py-28 scroll-mt-24 bg-[#050505] text-white border-b border-white/5 overflow-hidden">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Infinite Horizontal Scroll Animation Marquee Banner */}
      <div className="w-full overflow-hidden border-y border-white/10 bg-[#090909]/80 backdrop-blur-md py-4 mb-20">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-8 text-xs font-mono tracking-widest text-emerald-400 uppercase items-center"
        >
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white/50" />
                <span className="text-white/80">{item}</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Header / CTA with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>

          <h2 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]">
            Have an App Idea? <br />
            <span className="text-emerald-400">Let's Build It.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/70 font-sans leading-relaxed max-w-2xl">
            Whether you need a new mobile application, an existing app improved, or a production-ready Flutter solution, let's talk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-medium text-white bg-[#111111] border border-white/15 hover:border-white/30 hover:bg-[#161616] transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Premium Contact Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-white/50 mb-1">Direct Email</div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Email Inbox
              </h3>
            </div>

            <a
              href={`mailto:${profileData.email}`}
              className="text-xs sm:text-sm font-mono text-white/80 hover:text-emerald-400 transition-colors break-all flex items-center gap-1 pt-4 border-t border-white/5"
            >
              <span>{profileData.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-auto" />
            </a>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-white/50 mb-1">Direct Phone</div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-sky-300 transition-colors">
                Call & WhatsApp
              </h3>
            </div>

            <a
              href={`tel:${profileData.phone}`}
              className="text-xs sm:text-sm font-mono text-white/80 hover:text-sky-400 transition-colors flex items-center gap-1 pt-4 border-t border-white/5"
            >
              <span>{profileData.phone}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-auto" />
            </a>
          </motion.div>

          {/* Card 3: Location */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-white/40 px-2 py-0.5 rounded-full bg-white/5">
                  IST (UTC+5:30)
                </span>
              </div>

              <div className="text-xs font-mono text-white/50 mb-1">Location</div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors">
                Rajasthan, India
              </h3>
            </div>

            <div className="text-xs font-mono text-white/70 pt-4 border-t border-white/5 flex items-center gap-1.5">
              <span>{profileData.location}</span>
            </div>
          </motion.div>

          {/* Card 4: LinkedIn & GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Verified
                </span>
              </div>

              <div className="text-xs font-mono text-white/50 mb-1">Online Profiles</div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Professional Presence
              </h3>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors border border-white/5 hover:border-white/20"
              >
                <svg className="w-3.5 h-3.5 fill-current text-sky-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors border border-white/5 hover:border-white/20"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white/90" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Availability & Turnaround Highlight Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-[#0B0B0B] to-sky-950/20 border border-emerald-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
                  Ready for Engagement
                </span>
              </div>
              <h4 className="font-heading font-semibold text-base sm:text-lg text-white mt-1">
                Open for Full-Time Roles & High-Impact Mobile Contracts
              </h4>
              <p className="text-xs sm:text-sm text-white/60 font-sans mt-0.5">
                Specializing in end-to-end Flutter development, native Kotlin architecture, and store delivery.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-white/70 self-start md:self-auto bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Response within 24 hours</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
