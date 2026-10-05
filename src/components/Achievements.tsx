import React from "react";
import { motion } from "framer-motion";
import {
  TrendingDown,
  Layers,
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Award,
} from "lucide-react";

export const Achievements: React.FC = () => {
  const metrics = [
    {
      value: "12+",
      label: "Flutter Applications",
      subtext: "Delivered across CRM, ERP, EdTech, travel, donation & media",
      icon: Layers,
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      value: "2+",
      label: "Years Experience",
      subtext: "Professional mobile engineering across startup & enterprise",
      icon: Smartphone,
      color: "text-sky-400",
      border: "border-sky-500/20",
    },
    {
      value: "60%",
      label: "Overhead Reduction",
      subtext: "Reduced client operational overhead through automation",
      icon: TrendingDown,
      color: "text-purple-400",
      border: "border-purple-500/20",
    },
    {
      value: "Android + iOS",
      label: "Dual-Store Releases",
      subtext: "Published on Google Play & App Store (Time-Sey, Donslip)",
      icon: ShieldCheck,
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
  ];

  const keyAchievementsList = [
    {
      title: "Dual Store Publishing Ownership",
      detail: "Published apps on Google Play Store and Apple App Store (Time-Sey, Donslip), owning the full release lifecycle on both platforms including provisioning profiles and certificates.",
      badge: "Google Play & App Store",
      icon: ShieldCheck,
    },
    {
      title: "Native Kotlin Call Recording SDK",
      detail: "Built a production-grade native Kotlin call recording SDK integrated with Flutter, supporting Android 10-16 and hardware fallbacks for Samsung Galaxy M-Series devices.",
      badge: "Android 10–16 Support",
      icon: Layers,
    },
    {
      title: "12+ Production Mobile Applications",
      detail: "Delivered 12+ Flutter applications across CRM, ERP, EdTech, travel, donation and media domains with end-to-end ownership from architecture to post-publish maintenance.",
      badge: "End-to-End Ownership",
      icon: Layers,
    },
    {
      title: "60% Operational Overhead Reduction",
      detail: "Reduced client operational overhead by 60% through automation, streamlined data pipelines, and high-performance mobile system design.",
      badge: "System Optimization",
      icon: Award,
    },
  ];

  return (
    <section id="achievements" className="relative py-12 sm:py-16 scroll-mt-24 bg-[#050505] text-white border-b border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-6 sm:mb-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Achievements</span>
          </div>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
            Built. Shipped. <span className="text-emerald-400">Optimized.</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
            Verified engineering achievements documented across production app store releases, high-load ERP systems, native Android SDKs, and significant client efficiency gains.
          </p>
        </div>

        {/* Big Numbers Metric Grid with compact padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`p-4 sm:p-5 rounded-2xl bg-[#0D0D0D] border ${item.border} hover:border-white/30 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-white/30">0{idx + 1}</span>
                  </div>

                  <div className={`font-heading font-bold ${item.value.length > 6 ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'} text-white group-hover:text-emerald-400 transition-colors tracking-tight truncate`}>
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate">
                    {item.label}
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-white/5 text-[11px] text-white/50 font-sans leading-relaxed">
                  {item.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Resume Key Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {keyAchievementsList.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="p-4.5 sm:p-5 rounded-2xl bg-[#0E0E0E] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                      {ach.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {ach.detail}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/80">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Resume Verified Production Metric</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
