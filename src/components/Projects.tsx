import React, { useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import { projectsData, type ProjectItem } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Projects (10)" },
    { id: "published", label: "Published on Stores (5)" },
    { id: "native", label: "Native Kotlin / SDK" },
    { id: "enterprise", label: "Enterprise CRM & ERP" },
    { id: "realtime", label: "Real-Time RTC & Travel" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "native") return p.id === "calltrack-pro" || p.technologies.includes("Kotlin");
    if (selectedFilter === "published") return p.status.includes("Published") || p.id === "donslip" || p.id === "time-sey" || p.id === "go4explore" || p.id === "holidaywaale" || p.id === "inventoryverse";
    if (selectedFilter === "enterprise") return p.id === "multiverse" || p.id === "shiksha-suite" || p.id === "inventoryverse";
    if (selectedFilter === "realtime") return p.id === "buddly" || p.id === "go4explore" || p.id === "5wh-newsroom" || p.id === "holidaywaale";
    return true;
  });

  return (
    <section id="projects" className="relative py-12 sm:py-16 scroll-mt-24 bg-[#050505] text-white border-b border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/3 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3.5 mb-5 sm:mb-6">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              12+ production-grade mobile systems independently engineered and shipped across Android & iOS — featuring deep native Android modules, real-time media trading, ERP suites, and Agora RTC platforms.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-white/50 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curated Engineering Showcase</span>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0F0F0F] border border-white/10">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedFilter === tab.id
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Balanced 2-Column Responsive Project Cards Grid with Tightened Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Footer info note */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs font-mono text-white/50">
          <span>* All applications engineered with Flutter, Dart, and Native Kotlin bridges.</span>
          <span className="text-emerald-400">Click any card to inspect full technical topology</span>
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
