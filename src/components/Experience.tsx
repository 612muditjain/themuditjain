import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  TrendingUp,
  Layers,
  Sparkles,
} from "lucide-react";
import { experienceData } from "../data/experience";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-20 scroll-mt-24 bg-[#050505] text-white border-b border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            Professional track record engineering production-ready mobile systems, architecting native Kotlin plugins, and scaling apps across Google Play and Apple App Store.
          </p>
        </div>

        {/* Vertical Timeline with tighter spacing */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-white/10 space-y-8">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0D0D0D] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-5 pb-5 border-b border-white/5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold text-lg sm:text-xl text-white">
                        {item.company}
                      </h3>
                      {item.badge && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center gap-1.5">
                          {item.badge === "Current Role" && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                          )}
                          <span>{item.badge}</span>
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-emerald-400 flex items-center gap-2 font-mono">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{item.role}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/60 self-start md:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-white/40" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Technical Deliverables & Impact</span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-white/70 leading-relaxed bg-[#121212] p-2.5 rounded-xl border border-white/5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Footer */}
                <div className="pt-3.5 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-white/40 mr-1.5">Technologies:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Impact Callout Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#0B0B0B] to-sky-950/20 border border-emerald-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-base text-white">
                Proven Optimization & Publishing Track Record
              </h4>
              <p className="text-xs text-white/60 font-sans mt-0.5">
                Up to 25–30% UI rendering boost, zero-packet-drop Agora RTC bridges, and 100% first-pass Google Play / App Store approvals.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
            12+ Production Apps
          </span>
        </div>

      </div>
    </section>
  );
};
