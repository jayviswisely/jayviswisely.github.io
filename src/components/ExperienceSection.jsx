import { FadeIn } from "../hooks/useFadeIn";
import { EXPERIENCE, HOBBIES, PERSONAL_BIO } from "../data/content";

// ── Work experience timeline ───────────────────────────────────────────────────
function WorkExperience() {
  return (
    <div>
      <FadeIn>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "#9a9990", textTransform: "uppercase", marginBottom: "2.5rem" }}>
          Experience
        </p>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.8rem" }}>
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.08}>
            <div className="exp-row">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.4rem" }}>
                <div>
                  <span style={{ fontWeight: 500, fontSize: 15 }}>{exp.company}</span>
                  <span style={{ color: "#8a8a84", fontSize: 14, marginLeft: 10 }}>{exp.role}</span>
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#9a9990", letterSpacing: "0.04em" }}>
                  {exp.period}
                </span>
              </div>
              <ul style={{ paddingLeft: "1rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: 6 }}>
                {exp.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 14, color: "#4a4a46", lineHeight: 1.65 }}>{b}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ── Personal hobbies showcase ──────────────────────────────────────────────────
function PersonalShowcase() {
  return (
    <div>
      <FadeIn>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "#1d4ed8", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          the other resume
        </p>
        <p style={{ fontSize: 15, color: "#4a5a6a", lineHeight: 1.7, maxWidth: 540, marginBottom: "2.5rem" }}>
          {PERSONAL_BIO}
        </p>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {HOBBIES.map((h, i) => (
          <FadeIn key={h.title} delay={i * 0.08}>
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", borderLeft: "2px solid #bfdbfe", paddingLeft: "1.5rem", position: "relative" }}>
              <div style={{ position: "absolute", left: -9, top: 4, fontSize: 14, lineHeight: 1 }}>{h.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.3rem" }}>
                  <span style={{ fontWeight: 500, fontSize: 15 }}>{h.title}</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#1d4ed8", fontWeight: 500 }}>{h.highlight}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#93a8c4", display: "block", letterSpacing: "0.04em" }}>{h.highlightLabel}</span>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, color: "#5a5a56", lineHeight: 1.65, marginBottom: "0.75rem" }}>{h.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {h.tags.map((t) => (
                    <span key={t} style={{ display: "inline-block", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.03em", color: "#1d4ed8", background: "#dbeafe", borderRadius: 4, padding: "3px 8px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ── Exported section — switches based on mode ──────────────────────────────────
export default function ExperienceSection({ isPersonal, animKey }) {
  return (
    <section id="experience" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
      <div key={animKey} style={{ opacity: 0, animation: "slideDown 0.45s ease forwards" }}>
        {isPersonal ? <PersonalShowcase /> : <WorkExperience />}
      </div>
    </section>
  );
}
