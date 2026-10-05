import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Zap,
} from "lucide-react";
import { profileData } from "../data/profile";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] bg-[#050505] text-white flex flex-col justify-between overflow-hidden border-b border-white/5"
    >
      {/* Cinematic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 noise-bg opacity-40 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pt-28 md:pt-36 pb-12 px-6 sm:px-10 lg:pl-16 lg:pr-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Hero Content - Left Aligned */}
          <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl">
            
            {/* Hero Glass Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md mb-4 hover:border-emerald-500/50 transition-colors"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-emerald-400 uppercase">
                {profileData.heroBadge}
              </span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-semibold text-3xl sm:text-5xl md:text-[54px] lg:text-[62px] leading-[1.08] tracking-tight text-white mb-4"
            >
              Building Mobile <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Experiences
              </span>{" "}
              That People <br className="hidden sm:inline" />
              <span className="text-emerald-400 italic font-normal">Love to Use.</span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-xl mb-6"
            >
              {profileData.heroDescription}
            </motion.p>

            {/* Hero Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-3.5 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-100 transition-all duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Explore CTA */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-[#111111] border border-white/15 hover:border-emerald-500/40 hover:bg-[#161616] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <Play className="w-2 h-2 fill-current ml-0.5" />
                </div>
                <span>Explore Projects</span>
              </button>

              {/* Additional CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-xs sm:text-sm font-medium text-white/60 hover:text-emerald-400 underline underline-offset-4 px-2 py-1 transition-colors"
              >
                Let's Work Together
              </button>
            </motion.div>
          </div>

          {/* Right Visual: Dual Cinematic Smartphone Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative w-full max-w-[400px] h-[440px] sm:h-[480px] flex items-center justify-center select-none"
            >
              {/* Subtle ambient green glow behind the composition */}
              <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[90px] pointer-events-none" />

              {/* BACK PHONE: Angled to the left with terminal build logs */}
              <motion.div
                initial={{ rotate: -8, x: -25, opacity: 0 }}
                animate={{ rotate: -8, x: -25, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute left-0 sm:left-2 top-6 w-[220px] sm:w-[250px] h-[380px] sm:h-[420px] rounded-[38px] bg-[#0A0D0B] border border-emerald-500/20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] p-4 sm:p-5 flex flex-col justify-between overflow-hidden z-10"
              >
                {/* Background code / terminal lines */}
                <div className="pt-4 pl-1 space-y-3 font-mono text-[11px] sm:text-[12px] leading-relaxed text-left">
                  <p className="text-emerald-400 font-medium">
                    flutter run
                  </p>
                  
                  <p className="text-emerald-300 flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> build passed
                  </p>

                  <p className="text-emerald-400/90 flex items-center gap-1.5 pt-1">
                    <span className="text-emerald-400 font-bold">→</span> ship to production
                  </p>

                  <div className="pt-4 space-y-1 text-emerald-400/50 text-[10px] sm:text-[11px]">
                    <p>// native bridge</p>
                    <p>// background task</p>
                    <p>// release ready</p>
                  </div>
                </div>

                {/* Floating Glass Pill: Cross-platform / Native + Flutter */}
                <div className="relative -left-1 -bottom-1 inline-flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-[#0D0F0E]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                    <Zap className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-heading font-bold text-white tracking-wide leading-tight">
                      Cross-platform
                    </div>
                    <div className="text-[9px] font-mono text-white/50 leading-tight">
                      Native + Flutter
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FOREGROUND PHONE: Upright on the right with Dynamic Island, 3D Glowing Sphere & "Build. Ship. Optimize." */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 sm:right-2 top-0 w-[240px] sm:w-[270px] h-[420px] sm:h-[460px] rounded-[40px] bg-[#080E0B] border border-emerald-500/30 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] p-4 sm:p-5 flex flex-col justify-between overflow-hidden z-20"
              >
                {/* Dynamic Island Notch */}
                <div className="w-20 h-3.5 bg-black rounded-full mx-auto shadow-inner" />

                {/* Top Header Row */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-white/40 pt-1">
                  <span>MOBILE / 01</span>
                </div>

                {/* Center Content: Luminous 3D Emerald Sphere + Bold Typography */}
                <div className="relative my-auto py-2">
                  {/* Glowing 3D Emerald Sphere */}
                  <div
                    className="absolute -right-6 -top-6 w-38 h-38 sm:w-44 sm:h-44 rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 35% 35%, #6ee7b7 0%, #10b981 35%, #047857 70%, #022c22 100%)",
                      boxShadow: "0 0 50px rgba(16, 185, 129, 0.35)",
                    }}
                  />

                  {/* Bold Headline Text */}
                  <div className="relative z-10 text-left font-heading font-extrabold text-[32px] sm:text-[38px] leading-[1.08] tracking-tight">
                    <div className="text-white drop-shadow-md">Build.</div>
                    <div className="text-emerald-400 drop-shadow-md">Ship.</div>
                    <div className="text-white drop-shadow-md">Optimize.</div>
                  </div>
                </div>

                {/* Bottom Left FLUTTER Badge */}
                <div className="flex items-center justify-between pt-1">
                  <span className="px-3 py-1 rounded-full bg-[#0D1410] border border-white/10 text-white/80 text-[10px] font-mono tracking-wider uppercase shadow-inner">
                    FLUTTER
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Hero Stats Section - Underneath Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 pt-6 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {profileData.stats.map((stat) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-start p-3.5 sm:p-4 rounded-2xl bg-[#0B0B0B]/60 border border-white/5 hover:border-white/15 transition-all duration-200 group"
              >
                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/90 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-white/50 font-sans mt-0.5">
                  {stat.sublabel}
                </span>

                {/* Indicator bar */}
                <div className="w-6 h-0.5 bg-white/15 group-hover:bg-emerald-500 mt-2 transition-colors" />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
