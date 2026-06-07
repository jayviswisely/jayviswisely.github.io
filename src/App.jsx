import { useState, useEffect } from "react";

import globalStyles                       from "./styles/global";
import { NAV_ITEMS_WORK, NAV_ITEMS_PERSONAL } from "./data/content";
import NavBar                             from "./components/NavBar";
import HeroSection                        from "./components/HeroSection";
import ExperienceSection                  from "./components/ExperienceSection";
import ProjectsSection                    from "./components/ProjectsSection";
import ContactSection                     from "./components/ContactSection";

export default function App() {
  const [active,    setActive]    = useState("about");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [animKey,   setAnimKey]   = useState(0); // bumped on every mode toggle to restart animations

  // ── Active-section tracking ──────────────────────────────────────────────────
  useEffect(() => {
    const navItems  = isPersonal ? NAV_ITEMS_PERSONAL : NAV_ITEMS_WORK;
    const sections  = navItems.map((id) => document.getElementById(id)).filter(Boolean);
    const observer  = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isPersonal]);

  // ── Scroll helper ────────────────────────────────────────────────────────────
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ── Photo flip ───────────────────────────────────────────────────────────────
  const handlePhotoFlip = () => {
    setIsPersonal((prev) => !prev);
    setAnimKey((k) => k + 1);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#fafaf8", color: "#1a1a18", minHeight: "100vh" }}>
      <style>{globalStyles}</style>

      <NavBar
        active={active}
        isPersonal={isPersonal}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "0 1.5rem 6rem" }}>
        <HeroSection      isPersonal={isPersonal} onFlip={handlePhotoFlip} />
        <hr className="divider" />
        <ExperienceSection isPersonal={isPersonal} animKey={animKey} />
        <hr className="divider" />
        <ProjectsSection  isPersonal={isPersonal} animKey={animKey} />
        <hr className="divider" />
        <ContactSection />

        <p style={{ marginTop: "4rem", fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#b0aea8", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} Jayvis Wisely. Built with React.
        </p>
      </main>
    </div>
  );
}