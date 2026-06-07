import { FadeIn } from "../hooks/useFadeIn";

const CONTACT_LINKS = [
  { label: "Email",    href: "mailto:jayvisdev@gmail.com",              display: "jayvisdev@gmail.com" },
  { label: "GitHub",   href: "https://github.com/jayviswisely",         display: "github.com/jayviswisely" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jayviswisely",    display: "linkedin.com/in/jayviswisely" },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
      <FadeIn>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "#9a9990", textTransform: "uppercase", marginBottom: "2rem" }}>
          Contact
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.2rem" }}>
          Let's work together.
        </h2>
        <p style={{ fontSize: 16, color: "#4a4a46", lineHeight: 1.75, maxWidth: 460, marginBottom: "2rem" }}>
          I'm currently open to new opportunities. Whether it's a full-time role, contract work, or an interesting side project — feel free to reach out.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {CONTACT_LINKS.map(({ label, href, display }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#9a9990", width: 60, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {label}
              </span>
              <a href={href} className="contact-link">{display}</a>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
