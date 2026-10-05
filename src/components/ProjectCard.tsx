import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ProjectItem } from "../data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  index,
}) => {
  // Flagship Project 01: CallTrack Pro (Large Marquee Architecture Card)
  if (project.id === "calltrack-pro") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="col-span-1 md:col-span-2 p-5 sm:p-6 lg:p-7 rounded-2xl bg-gradient-to-b from-[#121212] via-[#0E0E0E] to-[#0A0A0A] border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 relative overflow-hidden group shadow-2xl"
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center relative z-10">
          {/* Left Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                FLAGSHIP SHOWCASE • {project.number}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                {project.platform}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-1 group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
            <div className="text-xs font-mono text-emerald-400 mb-2">
              {project.category}
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-3 max-w-xl">
              {project.shortDescription}
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3.5 w-full max-w-xl">
              {project.keyHighlights.slice(0, 4).map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{hl}</span>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-white/5 border border-white/10 text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Visual Treatment: Interactive Native Architecture Console */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-[#070707] border border-white/15 p-3.5 sm:p-4 shadow-2xl font-mono w-full overflow-hidden">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-white/50 gap-2">
                <span className="flex items-center gap-1.5 text-purple-400">
                  <Cpu className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Native Call Engine Bridge</span>
                </span>
                <span className="text-emerald-400 font-bold text-[10px] px-2 py-0.5 rounded bg-emerald-500/10">Android 10–14</span>
              </div>

              {/* Code preview */}
              <div className="mt-2 text-[10px] sm:text-[11px] leading-relaxed text-white/70 space-y-0.5 overflow-x-auto pb-1 font-mono">
                <p className="text-purple-300">// MediaRecorder dynamic audio fallback</p>
                <p className="text-white/90">
                  val recorder = MediaRecorder().apply &#123;
                </p>
                <p className="pl-3 text-emerald-400">
                  setAudioSource(AudioSource.VOICE_COMMUNICATION)
                </p>
                <p className="pl-3 text-sky-300">
                  setOutputFormat(OutputFormat.MPEG_4)
                </p>
                <p className="pl-3 text-amber-300">
                  setAudioEncoder(AudioEncoder.AAC)
                </p>
                <p className="text-white/90">&#125;</p>
              </div>

              {/* Hardware & Pipeline telemetry */}
              <div className="mt-2.5 pt-2 border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px]">
                  <span className="text-white/50">Samsung M-Series Fallback:</span>
                  <span className="text-emerald-400 font-medium">Active (AMR_NB/AAC)</span>
                </div>
                <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px]">
                  <span className="text-white/50">OkHttp Retry Buffer:</span>
                  <span className="text-sky-400 font-medium">SQLite Cached (Offline Safe)</span>
                </div>
                <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px]">
                  <span className="text-white/50">Reliability Rate:</span>
                  <span className="text-white font-bold">99.4% Across OEMs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Balanced 2-Column Card for all remaining projects (02 through 10)
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 2) * 0.06 }}
      className="col-span-1 p-5 sm:p-5.5 rounded-2xl bg-[#0E0E0E] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 h-full"
    >
      <div>
        {/* Top Header Row with Project Number and Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-2.5 min-h-[24px]">
          <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 shrink-0">
            PROJECT {project.number}
          </span>

          {project.badge ? (
            <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shadow-[0_0_8px_rgba(16,185,129,0.12)] shrink-0 truncate max-w-[210px]">
              {project.badge.includes("Published") ? (
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              ) : (
                <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
              )}
              <span className="truncate">{project.badge}</span>
            </span>
          ) : (
            <span className="text-[10px] sm:text-[11px] font-mono text-white/50 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0">
              {project.status}
            </span>
          )}
        </div>

        {/* Project Title and Category */}
        <h3
          title={project.title}
          className="font-heading font-semibold text-lg sm:text-xl text-white mb-0.5 group-hover:text-emerald-300 transition-colors line-clamp-1"
        >
          {project.title}
        </h3>
        <div className="text-[11px] sm:text-xs font-mono text-emerald-400/90 mb-2 truncate">
          {project.category}
        </div>

        {/* Project Short Description with normalized min-height */}
        <p className="text-xs text-white/70 leading-relaxed font-sans mb-3 line-clamp-2 min-h-[36px]">
          {project.shortDescription}
        </p>

        {/* Key Features Bullets with uniform line heights */}
        <div className="space-y-1 mb-3">
          {project.keyHighlights.slice(0, 3).map((hl, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-white/75 min-h-[20px]">
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="line-clamp-1 text-[11px] sm:text-xs">{hl}</span>
            </div>
          ))}
        </div>

        {/* Architecture & Preview Insight Box */}
        {project.previewInsights && project.previewInsights.length > 0 && (
          <div className="p-2.5 rounded-xl bg-[#131313] border border-white/5 mb-3 space-y-1">
            {project.previewInsights.map((insight, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-[11px] font-mono gap-2"
              >
                <span className="text-white/45 truncate">{insight.label}:</span>
                <span className="text-emerald-300/90 font-medium truncate text-right">
                  {insight.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Bottom Area: Tech Chips + Platform & Action */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-1 mb-2.5 pt-2.5 border-t border-white/5 min-h-[28px] items-center">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/5 text-white/70"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-white/40">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          <span className="text-[11px] font-mono text-white/40 truncate min-w-0 pr-2">
            {project.platform}
          </span>
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors shrink-0 px-2 py-1 rounded-lg hover:bg-white/5"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
