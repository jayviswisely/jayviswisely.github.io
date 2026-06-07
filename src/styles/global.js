const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #fafaf8; }
  a { color: inherit; text-decoration: none; }

  .tag {
    display: inline-block; font-size: 11px; font-family: 'DM Mono', monospace;
    letter-spacing: 0.03em; color: #6b6b66; background: #f0eeea;
    border-radius: 4px; padding: 3px 8px;
  }
  .project-card {
    background: #fff; border: 1px solid #e8e6e1; border-radius: 12px;
    padding: 1.5rem; transition: border-color 0.2s, transform 0.2s; cursor: default;
  }
  .project-card:hover { border-color: #c8c6c0; transform: translateY(-2px); }

  .exp-row { border-left: 1px solid #e0deda; padding-left: 1.5rem; position: relative; }
  .exp-row::before {
    content: ''; position: absolute; left: -4px; top: 6px;
    width: 7px; height: 7px; border-radius: 50%; background: #1a1a18;
  }

  .nav-link {
    font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase;
    font-weight: 500; transition: opacity 0.15s; cursor: pointer;
    background: none; border: none; padding: 0; font-family: inherit;
  }
  .nav-link.active  { opacity: 1; }
  .nav-link.inactive { opacity: 0.35; }
  .nav-link:hover   { opacity: 0.7 !important; }

  .divider { border: none; border-top: 1px solid #e8e6e1; margin: 4rem 0; }

  .contact-link {
    display: inline-flex; align-items: center; gap: 6px; font-size: 14px;
    color: #1a1a18; border-bottom: 1px solid #c8c6c0; padding-bottom: 1px;
    transition: border-color 0.2s;
  }
  .contact-link:hover { border-color: #1a1a18; }

  .mode-badge {
    display: inline-flex; align-items: center; gap: 5px; font-size: 11px;
    font-family: 'DM Mono', monospace; letter-spacing: 0.05em;
    padding: 3px 10px; border-radius: 20px; transition: background 0.4s, color 0.4s;
  }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }

  @media (max-width: 600px)  { .mobile-nav { display: flex !important; } .desktop-nav { display: none !important; } }
  @media (min-width: 601px)  { .mobile-nav { display: none !important; } .desktop-nav { display: flex !important; } }
`;

export default globalStyles;
