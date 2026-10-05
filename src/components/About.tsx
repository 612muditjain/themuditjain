import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Cpu,
  Server,
  CreditCard,
  Radio,
  UploadCloud,
  Zap,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { profileData } from "../data/profile";

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Cross-Platform Development",
      description: "Pixel-perfect Flutter applications for Android and iOS from a single robust codebase.",
      icon: Smartphone,
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Native Android Development",
      description: "Kotlin plugins, Platform Channels, Foreground Services, and hardware-level media recording.",
      icon: Cpu,
      accent: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "Backend & API Integration",
      description: "Node.js, Express, REST APIs, JWT authentication, caching, and offline synchronization.",
      icon: Server,
      accent: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
    {
      title: "Payment Integration",
      description: "End-to-end checkout flows with Razorpay SDK, webhook verification, and digital receipt generation.",
      icon: CreditCard,
      accent: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      title: "Real-Time Communication",
      description: "Low-latency audio/video calling with Agora SDK and real-time messaging via WebSockets & FCM.",
      icon: Radio,
      accent: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
    {
      title: "App Deployment",
      description: "Google Play Console and Apple App Store Connect publishing, certificates, and release tracking.",
      icon: UploadCloud,
      accent: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
    },
    {
      title: "Performance Optimization",
      description: "Eliminating widget rebuilds, shrinking app bundles, and achieving up to 90% smoother 60fps rendering.",
      icon: Zap,
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  ];

  const lifecycleSteps = [
    { step: "01", name: "Architecture & Design", detail: "BLoC / Clean Architecture & state separation" },
    { step: "02", name: "Native Bridges", detail: "Kotlin Platform Channels & native hardware APIs" },
    { step: "03", name: "Cloud & SDK Integrations", detail: "REST APIs, Agora, Razorpay & Firebase" },
    { step: "04", name: "Store Deployment", detail: "Google Play & Apple App Store release lifecycle" },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 scroll-mt-24 bg-[#050505] text-white border-b border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            From Idea to Production-Ready App
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-white/70 leading-relaxed font-sans">
            I'm <span className="text-white font-medium">Mudit Jain</span>, a Flutter Developer and Mobile Application Engineer focused on building reliable, scalable, and user-friendly applications for Android and iOS.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
            I work across the complete mobile development lifecycle — from architecture and API integration to performance optimization, testing, deployment, and post-release support.
          </p>
        </div>

        {/* Quick Personal Attributes Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-10 p-4 rounded-2xl bg-[#0B0B0B] border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-white/50 font-mono">Location</div>
              <div className="text-xs sm:text-sm font-semibold text-white">{profileData.location}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 border border-white/10">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-white/50 font-mono">Direct Email</div>
              <a href={`mailto:${profileData.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                {profileData.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 border border-white/10">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-white/50 font-mono">Contact Phone</div>
              <a href={`tel:${profileData.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                {profileData.phone}
              </a>
            </div>
          </div>
        </div>

        {/* 7 Engineering Highlights Grid */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
            Core Competencies Across The Mobile Lifecycle
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="p-5 rounded-2xl bg-[#0E0E0E] border border-white/10 hover:border-white/20 transition-all duration-200 group relative flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center ${item.accent} mb-3.5 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>Verified in 12+ apps</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400/80" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* End-to-End Mobile Lifecycle Pipeline */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#090909] border border-white/10 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  Full-Cycle Mobile Delivery
                </span>
                <h3 className="font-heading font-semibold text-xl text-white">
                  How Every App Is Engineered For Scale
                </h3>
              </div>
              <span className="text-[11px] font-mono text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10 self-start md:self-auto">
                Android 10–16 • iOS 15+
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {lifecycleSteps.map((step, idx) => (
                <div key={step.step} className="relative p-4 rounded-2xl bg-[#121212] border border-white/5 flex flex-col">
                  <span className="font-heading font-bold text-2xl text-emerald-400/30 mb-1.5">
                    {step.step}
                  </span>
                  <h4 className="font-heading font-semibold text-sm text-white mb-1">
                    {step.name}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {step.detail}
                  </p>
                  {idx < lifecycleSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-white/20">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
