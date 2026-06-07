import FlipPhoto from "./FlipPhoto";

const WORK_LINKS = [
  { label: "GitHub",    href: "https://github.com/jayviswisely" },
  { label: "LinkedIn",  href: "https://linkedin.com/in/jayviswisely" },
  /*{ label: "Resume ↗",  href: "#" },*/
];

const PERSONAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/jayviswiselyy/" },
  { label: "Spotify",   href: "https://open.spotify.com/user/31vhxd4wqywu7fwogdmf5vfpe6wi?si=e0eab34c65d44675" },
];

export default function HeroSection({ isPersonal, onFlip }) {
  return (
    <section id="about" style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
      <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.1s forwards" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "2rem" }}>

          <FlipPhoto isPersonal={isPersonal} onFlip={onFlip} />

          <div style={{ flex: 1, minWidth: 220 }}>
            {/* Mode pill */}
            <div style={{ marginBottom: "0.9rem" }}>
              <span
                className="mode-badge"
                style={{
                  background: isPersonal ? "#dbeafe" : "#f0eeea",
                  color:      isPersonal ? "#1d4ed8" : "#6b6b66",
                }}
              >
                {isPersonal ? "✨ personal mode" : "💼 work mode"}
              </span>
            </div>

            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#9a9990", marginBottom: "0.7rem", textTransform: "uppercase" }}>
              {isPersonal ? "Full-time Human" : "Software Engineer"}
            </p>

            <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Jayvis Wisely
              <span style={{ color: isPersonal ? "#60a5fa" : "#b0aea8" }}>.</span>
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4a4a46", marginBottom: "1.5rem" }}>
              {isPersonal
                ? "Running, Bouldering, Guitar. In love with climbing plastic rocks lately."
                : "Software engineer. AI & ML enthusiast. Based in Tainan, Taiwan."}
            </p>

            <p style={{ fontSize: 12, color: "#b0aea8", fontStyle: "italic", marginBottom: "1.5rem" }}>
              {isPersonal ? "Click the photo to flip back to work mode" : "Click the photo to see the other me ✨"}
            </p>

            {isPersonal ? (
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {PERSONAL_LINKS.map(({ label, href }) => (
                  <a key={label} href={href} className="contact-link" style={{ borderBottomColor: "#bfdbfe" }}>{label}</a>
                ))}
              </div>
            ) : (
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {WORK_LINKS.map(({ label, href }) => (
                  <a key={label} href={href} className="contact-link">{label}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
