import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { profileData } from "../data/profile";

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-12 sm:py-16 scroll-mt-24 bg-[#050505] text-white border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundation</span>
          </div>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Education
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-white/60 font-sans">
            Formal computer science training in cloud computing, full-stack systems, algorithms, and mobile development.
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-4 sm:space-y-5 max-w-3xl">
          {profileData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

              <div className="p-4.5 sm:p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-white/20 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 px-2.5 py-0.5 rounded-lg bg-white/5 self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-white/40" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-medium text-emerald-400/90 mb-1.5">
                  {edu.institution}
                </div>

                {edu.specialization && (
                  <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                    <Award className="w-3 h-3" />
                    <span>Specialization: {edu.specialization}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
