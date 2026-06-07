import { NAV_ITEMS_WORK, NAV_ITEMS_PERSONAL } from "../data/content";

export default function NavBar({ active, isPersonal, menuOpen, setMenuOpen, scrollTo }) {
  const navItems = isPersonal ? NAV_ITEMS_PERSONAL : NAV_ITEMS_WORK;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: isPersonal ? "rgba(219,234,254,0.93)" : "rgba(250,250,248,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${isPersonal ? "#bfdbfe" : "#e8e6e1"}`,
        transition: "background 0.5s, border-color 0.5s",
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.04em", fontWeight: 500 }}>
          Jayvis Wisely
        </span>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ gap: 28 }}>
          {navItems.map((id) => (
            <button
              key={id}
              className={`nav-link ${active === id ? "active" : "inactive"}`}
              onClick={() => scrollTo(id)}
            >
              {id}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#1a1a18" }}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid #e8e6e1",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            background: "rgba(250,250,248,0.97)",
          }}
        >
          {navItems.map((id) => (
            <button
              key={id}
              className={`nav-link ${active === id ? "active" : "inactive"}`}
              onClick={() => scrollTo(id)}
              style={{ textAlign: "left" }}
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
