import { FadeIn } from "../hooks/useFadeIn";
import { PROJECTS, ACHIEVEMENTS } from "../data/content";

// ── Work projects grid ─────────────────────────────────────────────────────────
function WorkProjects() {
  return (
    <div>
      <FadeIn>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "#9a9990", textTransform: "uppercase", marginBottom: "2.5rem" }}>
          Projects
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.07}>
            <div className="project-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                <h3 style={{ fontWeight: 500, fontSize: 15 }}>{p.title}</h3>
                <a href={p.link} style={{ fontSize: 14, color: "#9a9990", lineHeight: 1 }}>↗</a>
              </div>
              <p style={{ fontSize: 13.5, color: "#5a5a56", lineHeight: 1.65, marginBottom: "1rem" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ── Personal achievements grid ─────────────────────────────────────────────────
function PersonalAchievements() {
  return (
    <div>
      <FadeIn>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "#1d4ed8", textTransform: "uppercase", marginBottom: "2.5rem" }}>
          Achievements
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
        {ACHIEVEMENTS.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.07}>
            <div
              style={{ background: "#fff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "1.5rem", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#bfdbfe"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.5rem" }}>
                <span style={{ fontSize: 20 }}>{a.emoji}</span>
                <h3 style={{ fontWeight: 500, fontSize: 15 }}>{a.title}</h3>
              </div>

              <div style={{ marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 18, fontWeight: 500, color: "#1d4ed8" }}>{a.stat}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#93a8c4", marginLeft: 8, letterSpacing: "0.04em" }}>{a.statLabel}</span>
              </div>

              <p style={{ fontSize: 13.5, color: "#5a5a56", lineHeight: 1.65, marginBottom: "1rem" }}>{a.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {a.tags.map((t) => (
                  <span key={t} style={{ display: "inline-block", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.03em", color: "#1d4ed8", background: "#dbeafe", borderRadius: 4, padding: "3px 8px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ── Exported section — switches based on mode ──────────────────────────────────
// Note: in personal mode the section id is "achievements" so the nav link works
export default function ProjectsSection({ isPersonal, animKey }) {
  return (
    <section id={isPersonal ? "achievements" : "projects"} style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
      <div key={`proj-${animKey}`} style={{ opacity: 0, animation: "slideDown 0.45s ease forwards" }}>
        {isPersonal ? <PersonalAchievements /> : <WorkProjects />}
      </div>
    </section>
  );
}
