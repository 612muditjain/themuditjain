import React, { useState } from "react";
import { motion } from "framer-motion";
import { techStackItems } from "../data/skills";
import { Sparkles, Terminal, Check } from "lucide-react";

export const TechStackVisual: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#090909] border border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center mb-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-2">
          <Sparkles className="w-3 h-3" />
          <span>Interactive Technology Stack</span>
        </div>
        <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white tracking-tight">
          Tools, Frameworks & Protocols in Daily Production
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-white/60 max-w-xl font-sans">
          Hover over each badge to inspect role specializations and architecture compatibility.
        </p>
      </div>

      {/* Floating Badges Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto">
        {techStackItems.map((item) => {
          const isHovered = hoveredTech === item.name;

          return (
            <motion.div
              key={item.name}
              onMouseEnter={() => setHoveredTech(item.name)}
              onMouseLeave={() => setHoveredTech(null)}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`relative cursor-pointer px-3.5 sm:px-4 py-2 rounded-2xl border transition-all duration-200 flex items-center gap-2 ${
                item.highlight
                  ? "bg-[#141414] border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : "bg-[#101010] border-white/10 hover:border-white/30 hover:shadow-[0_0_10px_rgba(255,255,255,0.08)]"
              }`}
            >
              {/* Dot / Accent color indicator */}
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color || "#10B981" }}
              />

              <div className="flex flex-col text-left">
                <span className="font-heading font-medium text-xs text-white tracking-wide">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono text-white/40 leading-none">
                  {item.category}
                </span>
              </div>

              {isHovered && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center ml-0.5"
                >
                  <Check className="w-2 h-2" />
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Status Bar */}
      <div className="mt-8 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/50 px-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Production Stack: Flutter 3.x + Dart 3.x + Kotlin 2.x</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active Deployment
          </span>
          <span className="text-white/20">•</span>
          <span>Zero Legacy Tech</span>
        </div>
      </div>
    </div>
  );
};
