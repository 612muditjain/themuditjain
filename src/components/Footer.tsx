import React from "react";
import { ArrowUp, Mail, Smartphone } from "lucide-react";
import { profileData } from "../data/profile";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Left info */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/15 flex items-center justify-center font-heading font-bold text-xs text-white">
                MJ
              </div>
              <span className="font-heading font-semibold text-lg text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/50 font-sans">
              Flutter Developer • Mobile Application Engineer
            </p>
            <p className="text-xs text-emerald-400/80 font-mono mt-1">
              Bhilwara, Rajasthan, India • Android & iOS Specialist
            </p>
          </div>

          {/* Right Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-white/65 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-white/65 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-2 text-xs sm:text-sm text-white/65 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 text-white/70 hover:text-white transition-all ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Tech Mindset */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 text-center sm:text-left">
          <div>
            © 2026 Mudit Jain. Built with Flutter mindset & React.
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Android • iOS • Kotlin • Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
