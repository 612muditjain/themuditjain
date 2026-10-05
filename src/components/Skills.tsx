import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Layers,
  Server,
  Database,
  Cpu,
  Wrench,
  CheckCircle2,
  Code2,
  UploadCloud,
} from "lucide-react";
import { skillCategories } from "../data/skills";
import { TechStackVisual } from "./TechStackVisual";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    Layers,
    Server,
    Database,
    Cpu,
    Wrench,
    Code2,
    UploadCloud,
  };

  return (
    <section id="skills" className="relative py-16 sm:py-20 scroll-mt-24 bg-[#050505] text-white border-b border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
            Technical Expertise
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            Rigorous hands-on mastery of mobile engineering stacks — spanning modern Flutter cross-platform architecture, low-level native Android (Kotlin), reactive state patterns, and resilient cloud backends.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Smartphone;
            const isHovered = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`p-5 rounded-3xl bg-[#0E0E0E] border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-emerald-500/40 bg-[#121212] shadow-[0_10px_25px_-10px_rgba(16,185,129,0.15)] -translate-y-1"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-white/35">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-1.5">
                    {category.title}
                  </h3>
                  <p className="text-xs text-white/60 font-sans leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-[#161616] border border-white/5 text-white/85 hover:border-emerald-500/40 hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Embedded Interactive Tech Stack Visual */}
        <TechStackVisual />

      </div>
    </section>
  );
};
