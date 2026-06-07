import workPhoto from "../assets/photo_work.jpg";
import funPhoto  from "../assets/photo_fun.jpg";

// ── NAV ────────────────────────────────────────────────────────────────────────
export const NAV_ITEMS_WORK     = ["about", "experience", "projects", "contact"];
export const NAV_ITEMS_PERSONAL = ["about", "experience", "achievements", "contact"];

// ── PHOTOS ─────────────────────────────────────────────────────────────────────
// Replace these with your actual image URLs or local imports
export const WORK_PHOTO_URL     = workPhoto;
export const PERSONAL_PHOTO_URL = funPhoto;

// ── WORK DATA ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  { title: "SEO PAA Analysis Dashboard",   description: "Full-stack SEO analytics platform that automates Google People Also Ask research, generates AI-powered content suggestions, and visualizes search insights through an interactive dashboard.", tags: ["Next.js", "PostgreSQL", "Google Gemini API"], link: "https://github.com/jayviswisely/seo-paa-dashboard" },
  { title: "NCKU TA Reservation System",     description: "A full-stack PHP and MySQL system for scheduling and managing TA consultations, developed as a university project to demonstrate database-driven application design.", tags: ["PHP", "MySQL", "JavaScript"], link: "https://github.com/jayviswisely/ta-reservation-system" },
  { title: "AniBoxd",   description: "Letterboxd-inspired web application that allows users to search, track, rate, and review anime. Built for anime fans who want a clean, modern platform to manage their watchlist and share thoughts on their favorite series.", tags: ["React", "Firebase", "Anilist API"], link: "https://aniboxd.netlify.app/" },
  { title: "FilmFess",   description: "An anonymous confession platform where messages are paired with movies to capture feelings, memories, and vibes, because some emotions are cinematic.", tags: ["React", "Supabase", "TMDB API"], link: "https://github.com/jayviswisely/filmfess" },
];
      
export const EXPERIENCE = [
  { company: "AREA Energy", role: "Intern", period: "Incoming", bullets: ["Incoming intern for the summer of 2026."] },
  { company: "Hult Prize Foundation", role: "Logistics & IT Regional Lead", period: "2025 - 2026", bullets: ["Led a 5-member Logistics & IT team and coordinated operational planning across university and regional-stage entrepreneurship competitions involving 20+ organizing committee members and multiple startup teams.", "Directed the design of venue layouts, logistics workflows, and participant management systems to support the execution of workshops, training programs, and competition rounds.", "Developed the official Hult Prize @ NCKU website using Framer with custom-coded React components, implementing responsive design and interactive features to improve user experience."] },
  { company: "Parallax Coder", role: "Co-Founder, Web Developer", period: "2022 - 2024", bullets: [" Co-founded a nonprofit coding education initiative focused on increasing access to competitive programming education.", "Designed and developed the organization website and a certificate verification system used to validate student credentials."] },
  { company: "Algorithmics Indonesia", role: "Programming and Game Design Tutor", period: "2023", bullets: ["Earned Top Performing Tutor recognition twice for achieving the highest student retention rates across the Indonesia region.", "Mentored 100+ students in programming and computational thinking using Python, Lua, and Scratch.", "Selected to lead tutor development workshops focused on communication, motivation, and classroom management for 200+ peers."] },
];

// ── PERSONAL DATA ──────────────────────────────────────────────────────────────
export const PERSONAL_BIO = "When I'm not writing code, I'm usually running, climbing plastic rocks, or shredding my guitar. Here's a slice of life beyond the terminal.";

export const HOBBIES = [
  {
    emoji: "🏃",
    title: "Running",
    highlight: "21.1 km",
    highlightLabel: "Half marathon finisher",
    description: "Completed my first half marathon in 2:04. Currently training for a sub-2hr. Running clears the mind in ways that nothing else does.",
    tags: ["ZEPRO RUN Kaohsiung HM", "Sun Moon Lake Marathon 12k", "5k PR: 5:00/km"],
  },
  {
    emoji: "🧗‍♂️",
    title: "Bouldering",
    highlight: "V3 Climber",
    highlightLabel: "(almost)",
    description: "Recently picked up bouldering and loving the blend of physical and mental challenge. Currently working on sending V3s at my local gym. Also making bouldering contents, check out @perbouldertive on your favorite social medias!",
    tags: ["@perbouldertive", "V0 Flasher", "Projecting V3s"],
  },
  {
    emoji: "🎸",
    title: "Guitar",
    highlight: "Self-taught",
    highlightLabel: "and not so good at it",
    description: "Self-taught. Don't really play that much nowadays but occasionally perform for school events.",
    tags: ["@meraki___band", "@theclubfiction", "Lead Guitarist"],
  },
];

export const ACHIEVEMENTS = [
  {
    emoji: "🏅",
    title: "Half Marathon Finisher",
    stat: "2:20:03",
    statLabel: "2026 ZEPRO RUN Kaohsiung",
    description: "Crossed the finish line of my first 21.1km race.",
    tags: ["Running", "Pace 6:38/km"],
  },
  {
    emoji: "🏅",
    title: "12km Finisher",
    stat: "1:12:16",
    statLabel: "Sun Moon Lake Marathon 2026",
    description: "First 10k+ race! Beautiful course around the lake but uphills went crazy.",
    tags: ["Running", "Pace 6:01/km", "Rank 64/2032"],
  },
  {
    emoji: "🏅",
    title: "5km Finisher",
    stat: "0:28:20",
    statLabel: "Sun Moon Lake Marathon 2026",
    description: "First ever event! Hosted by PERPITA in my school, finished podium unofficially 💪",
    tags: ["Running", "Pace 5:36/km", "Rank 2"],
  },
];
