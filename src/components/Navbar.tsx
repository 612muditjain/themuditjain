import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profile";

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "experience", "projects", "achievements", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Brand: Mudit Jain / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
            aria-label="Mudit Jain - Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#111111] border border-white/15 group-hover:border-emerald-500/50 transition-colors shadow-inner">
              <span className="font-heading font-bold text-sm tracking-wider text-white">
                MJ
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm md:text-base tracking-tight text-white flex items-center gap-1.5">
                {profileData.name}
                <span className="hidden sm:inline-block text-[11px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Flutter Dev
                </span>
              </span>
              <span className="text-[11px] font-sans text-white/50 tracking-wide hidden md:block">
                Mobile Application Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/65 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action: Let's Talk */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (onContactClick) {
                  onContactClick();
                } else {
                  scrollToSection(e, "#contact");
                }
              }}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-100 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-[#111111] border border-white/15 text-white/80 hover:text-white hover:border-emerald-500/40 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Left-Side Sidebar Drawer with Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Left-Side Sidebar Drawer */}
            <motion.aside
              key="mobile-sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 left-0 bottom-0 w-[290px] sm:w-[320px] max-w-[85vw] z-50 bg-[#090909] border-r border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-[0_0_60px_rgba(0,0,0,0.95)] lg:hidden overflow-y-auto"
            >
              {/* Top Header inside Sidebar */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#141414] border border-white/15">
                      <span className="font-heading font-bold text-xs tracking-wider text-white">
                        MJ
                      </span>
                      <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-heading font-semibold text-sm text-white">
                        {profileData.name}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">
                        Flutter Dev • 2+ Yrs Exp
                      </span>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close Navigation Menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-semibold"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Action & Info */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onContactClick) {
                      setMobileMenuOpen(false);
                      onContactClick();
                    } else {
                      scrollToSection(e, "#contact");
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-100 rounded-full transition-all active:scale-95 shadow-md"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="p-3 rounded-xl bg-[#111111] border border-white/5 space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-white/50">
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      Status:
                    </span>
                    <span className="text-emerald-400 font-medium">Available</span>
                  </div>

                  <div className="flex items-center justify-between text-white/50">
                    <span>Production Apps:</span>
                    <span className="text-white font-medium">12+ Shipped</span>
                  </div>

                  <div className="flex items-center justify-between text-white/50">
                    <span>Experience:</span>
                    <span className="text-emerald-400 font-medium">2+ Years</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
