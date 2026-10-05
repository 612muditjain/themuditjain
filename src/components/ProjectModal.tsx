import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Terminal,
  Cpu,
  Sparkles,
} from "lucide-react";
import type { ProjectItem } from "../data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative z-10 w-[94vw] sm:w-[90vw] md:max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#0C0C0C] border border-white/15 p-5 sm:p-8 md:p-10 text-white shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors z-20"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              PROJECT {project.number}
            </span>
            {project.badge && (
              <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                {project.badge}
              </span>
            )}
            <span className="text-xs font-mono text-white/40">
              {project.status}
            </span>
          </div>

          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-white mb-2">
            {project.title}
          </h2>
          <div className="text-sm sm:text-base text-emerald-400/90 font-medium mb-6">
            {project.category}
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/10">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-wider">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Notes if available */}
          {project.architectureNotes && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 mb-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                <Cpu className="w-4 h-4" />
                <span>Architecture Topology & Data Pipeline</span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-white/70 leading-relaxed overflow-x-auto">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Code Snippet if available */}
          {project.codeSnippet && (
            <div className="mb-8 rounded-2xl bg-[#050505] border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#111111] border-b border-white/10 text-xs font-mono text-white/60">
                <span className="flex items-center gap-2 text-purple-400">
                  <Terminal className="w-3.5 h-3.5" />
                  {project.codeSnippet.filename}
                </span>
                <span className="text-[10px] text-white/40 uppercase">
                  {project.codeSnippet.language}
                </span>
              </div>
              <pre className="p-4 text-xs font-mono text-white/80 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Key Deliverables & Highlights */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Key Features & Engineering Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121212] border border-white/5 text-xs sm:text-sm text-white/70"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact banner */}
          {project.impact && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-white/60">Verified Production Metric:</span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                {project.impact}
              </span>
            </div>
          )}

          {/* Modal Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
