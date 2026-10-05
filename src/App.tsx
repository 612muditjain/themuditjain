import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Fixed Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Technical Expertise & Skills */}
        <Skills />

        {/* Experience Timeline */}
        <Experience />

        {/* Featured Projects with Asymmetric Layouts & Modals */}
        <Projects />

        {/* Achievements & Metrics */}
        <Achievements />

        {/* Education Timeline */}
        <Education />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
