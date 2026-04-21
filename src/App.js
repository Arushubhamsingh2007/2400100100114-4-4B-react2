import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css"; // ✅ CSS imported here
import AvatarImg from "./components/Avatar.jpeg";

import {
  FaSignInAlt,
  FaUserPlus,
  FaCalculator,
  FaClock,
  FaList,
  FaFont,
  FaCube,
  FaMapMarkedAlt,
  FaCloudSun,
  FaGamepad,
  FaHome,
  FaCog,
  FaArrowLeft,
  FaRobot,
  FaPaintBrush,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaCommentAlt,
  FaCalendarAlt,
  FaSmile,
  FaGem,
} from "react-icons/fa";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Counter from "./components/Counter";
import Stopwatch from "./components/Stopwatch";
import TodoList from "./components/TodoList";
import Palindrome from "./components/Palindrome";
import ArmstrongCalculator from "./components/ArmstrongCalculator";
import GoogleMap from "./components/GoogleMap";
import Weather from "./components/Weather";
import Game from "./components/Game";
import Portfolio from "./components/Portfolio";
import Stack from "./components/Stack";
import Queue from "./components/Queue";
import Calculator from "./components/Calculator";
import RoboticsPage from "./components/RoboticsPage";
import AdvancedCSS from "./components/AdvancedCSS";
import Comment from "./components/Comment";
import Calendar from "./components/Calendar";
import BaseConverter from "./components/Baeconverter";
import Happy from "./components/Happy";
import Narcissistic from "./components/Narcissistic";



/* ================= MODERN CLOCK COMPONENT ================= */
function ModernClock({ compact = false }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const dateStr = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

  if (compact) {
    return (
      <div className="compact-clock">
        <span className="c-time">{timeStr}</span>
        <span className="c-date">{dateStr}</span>
      </div>
    );
  }

  return (
    <div className="sidebar-clock-node">
      <div className="clock-time">{timeStr}</div>
      <div className="clock-date">{dateStr.toUpperCase()}</div>
      <div className="clock-line"></div>
    </div>
  );
}


/* ================= CUSTOM CURSOR COMPONENT ================= */
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const MoveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsHovering(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest(".card") ||
        target.closest("button") ||
        target.closest(".float-btn")
      );
    };
    window.addEventListener("mousemove", MoveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", MoveCursor);
  }, []);

  return (
    <>
      <div
        className="custom-cursor-follower"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
          borderColor: 'var(--accent-color)',
          boxShadow: isHovering ? '0 0 20px var(--accent-glow)' : 'none'
        }}
      ></div>
      <div
        className="custom-cursor-dot"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          background: 'var(--accent-color)'
        }}
      ></div>
    </>
  );
}

/* ================= SHOOTING BOXES (Decor) ================= */
function ShootingBoxes() {
  const boxes = Array.from({ length: 15 });
  return (
    <div className="shooting-boxes-container">
      {boxes.map((_, i) => (
        <motion.div
          key={i}
          className="shooting-box"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            opacity: [0, 0.4, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: i % 2 === 0 ? 40 : 20, height: i % 2 === 0 ? 40 : 20 }}
        />
      ))}
    </div>
  );
}


export default function App() {
  const [page, setPage] = useState("landing");
  const [module, setModule] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [bgAccent, setBgAccent] = useState("maroon"); // sky, violet, pink, green, orange, maroon
  const [bgStyle, setBgStyle] = useState("aurora"); // plain, aurora
  const [showSettings, setShowSettings] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [animStyle, setAnimStyle] = useState("extra"); // standard, extra

  // Chronological State Engine
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const navigateTo = useCallback((newPage, newModule = "") => {
    setHistory(prev => [...prev, { p: page, m: module }]);
    setFuture([]);
    setPage(newPage);
    setModule(newModule);
  }, [page, module]);

  const goBack = useCallback(() => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setFuture(prev => [{ p: page, m: module }, ...prev]);
    setHistory(prev => prev.slice(0, -1));
    setPage(last.p);
    setModule(last.m);
  }, [history, page, module]);

  const goForward = useCallback(() => {
    if (future.length === 0) return;
    const next = future[0];
    setHistory(prev => [...prev, { p: page, m: module }]);
    setFuture(prev => prev.slice(1));
    setPage(next.p);
    setModule(next.m);
  }, [future, page, module]);

  const openModule = (name) => {
    navigateTo("module", name);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-theme" : "light-theme"} accent-${bgAccent}`}>
      <style>{`
        :root {
          --accent-color: ${
            bgAccent === 'maroon' ? '#800000' :
            bgAccent === 'sky'    ? '#38bdf8' :
            bgAccent === 'violet' ? '#a78bfa' :
            bgAccent === 'pink'   ? '#f472b6' :
            bgAccent === 'green'  ? '#34d399' :
            bgAccent === 'orange' ? '#fb923c' :
            bgAccent === 'gold'   ? '#fbbf24' :
            bgAccent === 'emerald'? '#10b981' :
            bgAccent === 'rose'   ? '#f43f5e' : '#22d3ee' 
          };
          --accent-glow: ${
            bgAccent === 'maroon' ? 'rgba(128, 0, 0, 0.4)' :
            bgAccent === 'sky'    ? 'rgba(56, 189, 248, 0.4)' :
            bgAccent === 'violet' ? 'rgba(167, 139, 250, 0.4)' :
            bgAccent === 'pink'   ? 'rgba(244, 114, 182, 0.4)' :
            bgAccent === 'green'  ? 'rgba(52, 211, 153, 0.4)' :
            bgAccent === 'orange' ? 'rgba(251, 146, 60, 0.4)' :
            bgAccent === 'gold'   ? 'rgba(251, 191, 36, 0.4)' :
            bgAccent === 'emerald'? 'rgba(16, 185, 129, 0.4)' :
            bgAccent === 'rose'   ? 'rgba(244, 63, 94, 0.4)' : 'rgba(34, 211, 238, 0.4)'
          };

          --bg-primary: ${isDarkMode ? '#0a0a0f' : '#ffffff'};
          --bg-panel: ${isDarkMode ? 'rgba(20, 20, 30, 0.6)' : 'rgba(255, 255, 255, 0.9)'};
          --text-main: ${isDarkMode ? '#f1f5f9' : '#0f172a'};
          --text-dim: ${isDarkMode ? '#94a3b8' : '#475569'};
          --card-bg: ${isDarkMode ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.8)'};
        }
        .app {
          background: ${bgStyle === 'aurora'
          ? (isDarkMode
            ? 'linear-gradient(-45deg, #0a0a0f, #1a1a2e, #0f0f1a, #000)'
            : 'linear-gradient(-45deg, #f8fafc, #e2e8f0, #f1f5f9, #fff)')
          : 'var(--bg-primary)'};
          background-size: 400% 400%;
          animation: ${bgStyle === 'aurora' ? 'aurora-shift 15s ease infinite' : 'none'};
          color: var(--text-main);
          transition: all 0.5s;
        }
        .card {
          background: var(--card-bg) !important;
          border-color: ${bgAccent !== 'none' ? 'var(--accent-glow)' : 'rgba(0,0,0,0.1)'} !important;
          color: var(--text-main) !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .card h3 { color: var(--text-main) !important; }
        .card p, .card-desc { color: var(--text-dim) !important; }
        .sidebar-btn { color: var(--text-main) !important; }
        .sidebar-label { color: var(--text-dim) !important; }
        .dashboard-sidebar { background: var(--bg-panel) !important; border-color: var(--accent-glow) !important; }
        .dashboard-main { background: var(--card-bg) !important; border-color: var(--accent-glow) !important; }
        .card:hover {
          background: ${isDarkMode ? 'rgba(var(--accent-color-rgb), 0.15)' : 'rgba(var(--accent-color-rgb), 0.1)'} !important;
          box-shadow: 0 15px 40px var(--accent-glow) !important;
        }
        .float-btn { color: var(--text-main) !important; }
        .q-orb { color: var(--text-main) !important; border-color: ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} !important; }
        .q-item { color: var(--text-dim) !important; }
        .q-label { color: var(--text-main) !important; }
        :root {
          --accent-color-rgb: ${bgAccent === 'maroon' ? '128, 0, 0' :
          bgAccent === 'sky' ? '56, 189, 248' :
            bgAccent === 'violet' ? '167, 139, 250' :
              bgAccent === 'pink' ? '244, 114, 182' :
                bgAccent === 'green' ? '52, 211, 153' : '251, 146, 60'
        };
        }
        .app-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }
        /* Film Grain Effect */
        .app-container::after {
          content: "";
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.04;
          z-index: 5000;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
      `}</style>

      <CustomCursor />
      {bgStyle === "matrix" && <div className="matrix-overlay" />}

      <style>{`
        .shooting-boxes-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .shooting-box {
          position: absolute;
          background: var(--accent-glow);
          border: 1px solid var(--accent-color);
          border-radius: 8px;
          filter: blur(2px);
        }
      `}</style>

      <AnimatePresence mode="wait">

        {/* ================= LANDING ================= */}
        {page === "landing" && (
          <motion.div
            className="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mesh Background Effects */}
            <div className="mesh-bg">
              <div className="mesh-blob mesh-blob-accent blob-1"></div>
              <div className="mesh-blob mesh-blob-accent blob-2" style={{ opacity: 0.1, animationDelay: '-5s' }}></div>
            </div>

            {/* Left Content Area */}
            <motion.div
              className="landing-content"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            >
              <div className="hero-badge">
                <span className="badge-dot pulse"></span>
                <ModernClock compact={true} />
              </div>

              <h1 className="hero-main-title">
                <span className="text-dim" style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>Neural Identity Node: Established</span>
                Hi, I'm <span className="text-gradient">Aru Shubham Singh</span> <br />
                Your Lead Tech Architect.
              </h1>

              <p className="hero-subtitle">
                Deploying high-performance logic modules and immersive digital universes with a focus on Cybersecurity and AI Frontier development.
              </p>

              <div className="hero-actions">
                <button className="premium-btn active" onClick={() => navigateTo("dashboard")}>
                  Explore Universe
                </button>
                <button className="premium-btn outline" onClick={() => navigateTo("portfolio")}>
                  View Credentials
                </button>
              </div>

              {/* Tech Stats Bar */}
              <div className="tech-stats">
                <div className="stat-item">
                  <span className="stat-val">16+</span>
                  <span className="stat-lbl">Active Modules</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-val">60FPS+</span>
                  <span className="stat-lbl">Fluid Logic</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-val">100%</span>
                  <span className="stat-lbl">Responsive</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Area */}
            <motion.div
              className="hero-visual"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              <div className="visual-container">
                <div className="glass-frame neon-glow-accent">
                  <motion.img
                    src={AvatarImg}
                    alt="Lead Architect"
                    className="avatar-premium"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ delay: 1.5, duration: 1, repeat: 1 }}
                  />
                  <div className="avatar-overlay"></div>

                  <motion.div
                    className="hi-bubble"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8, type: "spring" }}
                  >
                    HI ARCHITECT! 👋
                  </motion.div>
                </div>

                {/* Floating Meta Tags */}
                <motion.div className="meta-tag mt-1" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>React.js</motion.div>
                <motion.div className="meta-tag mt-2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>UI/UX</motion.div>
                <motion.div className="meta-tag mt-3" animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }}>Logic</motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ================= PORTFOLIO ================= */}
        {page === "portfolio" && (
          <motion.div
            className="page"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <div style={{ height: "100vh", overflowY: "auto", width: "100vw" }}>
              <Portfolio 
                onEnterUniverse={() => setPage("dashboard")} 
                isDarkMode={isDarkMode}
              />
            </div>
          </motion.div>
        )}

        {/* ================= DASHBOARD & MODULE ================= */}
        {(page === "dashboard" || page === "module") && (
          <motion.div className="dashboard-layout"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sidebar */}
            <div className="dashboard-sidebar glassmorphism neon-glow-purple">
              <ModernClock />
              <div className="sidebar-avatar">
                <img src={AvatarImg} alt="Profile" className="sidebar-pfp" />
                <div className="sidebar-info-stack">
                  <h3 className="sidebar-name-gradient">Aru Shubham Singh</h3>
                  <div className="status-indicator">
                    <span className="dot pulse-green"></span>
                    <span className="status-text">ONLINE</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-nav">
                <div className="sidebar-label">Navigation</div>
                <button onClick={() => navigateTo("landing")} className="sidebar-btn"><FaHome /> Home</button>
                <button onClick={() => navigateTo("portfolio")} className="sidebar-btn"><FaSignInAlt /> Portfolio</button>

                <div className="sidebar-label" style={{ marginTop: '20px' }}>System Health</div>
                <div className="system-health-bar">
                  <div className="health-fill" style={{ width: '92%' }}></div>
                </div>
                <div className="system-health-stats">
                  <span>Logic Sync</span>
                  <span>92%</span>
                </div>
              </div>

              <div className="sidebar-contact quantum-link-box">
                <div className="quantum-header">
                  <span className="q-label">Quantum Link</span>
                  <div className="q-status">
                    <span className="q-dot pulse"></span>
                    ACTIVE
                  </div>
                </div>

                <div className="q-links">
                  <a href="mailto:ashubham701080@gmail.com" className="q-item">
                    <FaEnvelope /> <span>ashubham701080@gmail.com</span>
                  </a>
                  <a href="tel:+917067924565" className="q-item">
                    <FaPhoneAlt /> <span>+91 70679 24565</span>
                  </a>
                </div>

                <div className="q-social-row">
                  <a href="https://github.com/Arushubhamsingh2007" target="_blank" rel="noreferrer" className="q-orb"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/aru-shubham-singh-099a68329" target="_blank" rel="noreferrer" className="q-orb"><FaLinkedin /></a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="dashboard-main custom-scrollbar">
              {animStyle === "extra" && <ShootingBoxes />}
              {page === "dashboard" && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <div className="dashboard-header">
                    <div>
                      <h1 className="title text-gradient" style={{ textAlign: 'left', margin: 0 }}>⚛ Command Center</h1>
                      <p style={{ color: '#64748b', margin: '5px 0 0' }}>Manage and deploy multi-dimensional modules</p>
                    </div>

                    <div className="dashboard-controls">
                      <div className="search-wrapper">
                        <FaRobot className="search-icon" />
                        <input
                          type="text"
                          placeholder="Search logic modules..."
                          className="dashboard-search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="category-row">
                    {["all", "security", "tools", "logic", "reality", "social"].map(cat => (
                      <button
                        key={cat}
                        className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <div className="grid">
                    <ProjectGrid
                      searchTerm={searchTerm}
                      category={activeCategory}
                      openModule={openModule}
                    />
                  </div>
                </motion.div>
              )}

              {page === "module" && (
                <motion.div className="moduleBox" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="topBar" style={{ justifyContent: 'center' }}>
                    <h2 className="module-title text-gradient">{module.toUpperCase()}</h2>
                  </div>

                  <div className="module-render-area">
                    {module === "login" && <Login />}
                    {module === "registration" && <Registration />}
                    {module === "counter" && <Counter />}
                    {module === "stopwatch" && <Stopwatch />}
                    {module === "todolist" && <TodoList />}
                    {module === "palindrome" && <Palindrome />}
                    {module === "armstrong" && <ArmstrongCalculator />}
                    {module === "map" && <GoogleMap />}
                    {module === "weather" && <Weather />}
                    {module === "game" && <Game />}
                    {module === "stack" && <Stack />}
                    {module === "queue" && <Queue />}
                    {module === "calculator" && <Calculator />}
                    {module === "robotics" && <RoboticsPage />}
                    {module === "css" && <AdvancedCSS />}
                    {module === "comment" && <Comment />}
                    {module === "calendar" && <Calendar />}
                    {module === "baseconverter" && <BaseConverter />}
                    {module === "happy" && <Happy />}
                    {module === "narcissistic" && <Narcissistic />}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      <FloatingNav
        page={page}
        goBack={goBack}
        goForward={goForward}
        canForward={future.length > 0}
        setPage={(p) => navigateTo(p)}
        setModule={(m) => navigateTo("module", m)}
        setShowSettings={setShowSettings}
      />

      <SettingsOverlay
        show={showSettings}
        onClose={() => setShowSettings(false)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        bgAccent={bgAccent}
        setBgAccent={setBgAccent}
        bgStyle={bgStyle}
        setBgStyle={setBgStyle}
        animStyle={animStyle}
        setAnimStyle={setAnimStyle}
      />
    </div>
  );
}

/* ================= STATIC NAV ================= */
function FloatingNav({ page, setPage, goBack, goForward, canForward, setShowSettings }) {
  const isHomeActive = page === "landing";

  const socials = [
    { id: 'gh', icon: <FaGithub />, link: 'https://github.com/Arushubhamsingh2007', title: 'GitHub' },
    { id: 'li', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/aru-shubham-singh-099a68329', title: 'LinkedIn' },
    { id: 'ml', icon: <FaEnvelope />, link: 'mailto:ashubham701080@gmail.com', title: 'Email' },
    { id: 'ph', icon: <FaPhoneAlt />, link: 'tel:+917067924565', title: 'Phone' },
  ];

  return (
    <motion.div
      className="floating-nav-container glassmorphism"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <button className={`float-btn ${isHomeActive ? 'active' : ''}`} onClick={() => setPage("landing")} title="Home"><FaHome /></button>
      <button className="float-btn" onClick={goBack} title="Back" disabled={page === "landing"}><FaArrowLeft /></button>
      <button className="float-btn" onClick={goForward} title="Forward" disabled={!canForward}><FaArrowRight /></button>
      <div className="nav-divider"></div>
      {socials.map(soc => (
        <a
          key={soc.id}
          href={soc.link}
          target="_blank"
          rel="noreferrer"
          className="float-btn"
          title={soc.title}
        >
          {soc.icon}
        </a>
      ))}
      <div className="nav-divider"></div>
      <button className="float-btn" onClick={() => setShowSettings(true)} title="Settings"><FaCog /></button>
    </motion.div>
  );
}

/* ================= CARD ================= */
function Card({ title, icon, description, category, onClick }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      layout
    >
      <div className="card-top">
        <span className="card-category">{category}</span>
        <div className="card-status-dot"></div>
      </div>
      <div className="icon-wrapper">
        <div className="icon-phase"></div>
        <div className="icon">{icon}</div>
      </div>
      <h3>{title}</h3>
      <p className="card-desc">{description}</p>
    </motion.div>
  );
}

/* ================= PROJECT DATA & GRID ================= */
const projectsData = [
  { id: "login", title: "#Login", icon: <FaSignInAlt />, category: "security", desc: "Secure user authentication system." },
  { id: "registration", title: "#Register", icon: <FaUserPlus />, category: "security", desc: "Join our community and explore." },
  { id: "counter", title: "#Counter", icon: <FaCalculator />, category: "tools", desc: "Simple and reactive state manager." },
  { id: "stopwatch", title: "#Stopwatch", icon: <FaClock />, category: "tools", desc: "Precision time tracking tool." },
  { id: "todolist", title: "#Todo", icon: <FaList />, category: "tools", desc: "Manage your daily tasks efficiently." },
  { id: "palindrome", title: "#Palindrome", icon: <FaFont />, category: "logic", desc: "String analysis and logic check." },
  { id: "armstrong", title: "#Armstrong", icon: <FaCube />, category: "logic", desc: "Mathematical number validation." },
  { id: "map", title: "#Map", icon: <FaMapMarkedAlt />, category: "reality", desc: "Interactive location explorer." },
  { id: "weather", title: "#Weather", icon: <FaCloudSun />, category: "reality", desc: "Real-time global weather updates." },
  { id: "game", title: "#Game", icon: <FaGamepad />, category: "play", desc: "Fun interactive mini-game challenge." },
  { id: "stack", title: "#Stack", icon: <FaCube />, category: "logic", desc: "Last-in, first-out data structure." },
  { id: "queue", title: "#Queue", icon: <FaList />, category: "logic", desc: "First-in, first-out data structure." },
  { id: "calculator", title: "#Calculator", icon: <FaCalculator />, category: "tools", desc: "Advanced compute engine." },
  { id: "robotics", title: "#Robotics", icon: <FaRobot />, category: "ai", desc: "Neural link interface." },
  { id: "css", title: "#Style Engine", icon: <FaPaintBrush />, category: "logic", desc: "Advanced CSS visual showcase." },
  { id: "comment", title: "#Broadcast", icon: <FaCommentAlt />, category: "social", desc: "Permanent neural-feed communications." },
  { id: "calendar", title: "#Calendar", icon: <FaCalendarAlt />, category: "tools", desc: "Interactive Chronos Matrix manager." },
  { id: "baseconverter", title: "#Base Conv", icon: <FaCube />, category: "tools", desc: "Binary/Hex/Decimal conversion engine." },
  { id: "happy", title: "#Happy Num", icon: <FaSmile />, category: "logic", desc: "Recursive digit-square diagnostic." },
  { id: "narcissistic", title: "#Narc Num", icon: <FaGem />, category: "logic", desc: "Exponential digit-power protocol." },
];

function ProjectGrid({ searchTerm, category, openModule }) {
  const filtered = projectsData.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = category === "all" || p.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <AnimatePresence>
      {filtered.map(p => (
        <Card
          key={p.id}
          title={p.title}
          icon={p.icon}
          category={p.category}
          description={p.desc}
          onClick={() => openModule(p.id)}
        />

      ))}
    </AnimatePresence>
  );
}



function SettingsOverlay({ show, onClose, isDarkMode, setIsDarkMode, bgAccent, setBgAccent, bgStyle, setBgStyle, animStyle, setAnimStyle }) {
  if (!show) return null;

  const accents = ["maroon", "sky", "violet", "pink", "green", "orange", "gold", "emerald", "rose", "cyan"];

  const getAccentColor = (acc) => {
    switch (acc) {
      case 'maroon': return '#800000';
      case 'sky': return '#38bdf8';
      case 'violet': return '#a78bfa';
      case 'pink': return '#f472b6';
      case 'green': return '#34d399';
      case 'orange': return '#fb923c';
      case 'gold': return '#fbbf24';
      case 'emerald': return '#10b981';
      case 'rose': return '#f43f5e';
      case 'cyan': return '#22d3ee';
      default: return '#fff';
    }
  };

  return (
    <motion.div
      className="settings-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <style>{`

        .settings-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .settings-content {
          width: 100%;
          max-width: 500px;
          background: rgba(20, 20, 30, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 40px;
          position: relative;
          box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
        }
        .settings-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: #aaa;
          font-size: 24px;
          cursor: pointer;
        }
        .settings-section {
          margin-bottom: 30px;
        }
        .settings-label {
          display: block;
          margin-bottom: 15px;
          font-family: 'Orbitron';
          font-size: 0.9rem;
          color: #8b5cf6;
          text-transform: uppercase;
        }
        .theme-toggle-row {
          display: flex;
          gap: 15px;
        }
        .accent-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .accent-dot {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid transparent;
          transition: transform 0.2s;
        }
        .accent-dot.active {
          border-color: white;
          transform: scale(1.1);
        }
      `}</style>

      <motion.div
        className="settings-content"
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="settings-close" onClick={onClose}>✕</button>
        <h2 className="text-gradient" style={{ marginBottom: '30px' }}>Universal Controls</h2>

        <div className="settings-section">
          <span className="settings-label">Interface Polarity</span>
          <div className="theme-toggle-row">
            <button
              className={`btn ${isDarkMode ? 'neon-btn' : 'outline-btn'}`}
              onClick={() => setIsDarkMode(true)}
            >
              Obsidian Dark
            </button>
            <button
              className={`btn ${!isDarkMode ? 'neon-btn' : 'outline-btn'}`}
              onClick={() => setIsDarkMode(false)}
            >
              Radiant Light
            </button>
          </div>
        </div>

        <div className="settings-section">
          <span className="settings-label">Neural Accent</span>
          <div className="accent-row">
            {accents.map(acc => (
              <div
                key={acc}
                className={`accent-dot ${bgAccent === acc ? 'active' : ''}`}
                style={{ background: getAccentColor(acc) }}
                onClick={() => setBgAccent(acc)}
              >
                <div className="accent-preview-inner" style={{ background: `rgba(${getAccentColor(acc).replace('#', '')}, 0.2)` }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="settings-section">
          <span className="settings-label">Background Engine</span>
          <div className="theme-toggle-row">
            <button
              className={`btn ${bgStyle === 'plain' ? 'neon-btn' : 'outline-btn'}`}
              onClick={() => setBgStyle('plain')}
            >
              Static Node
            </button>
            <button
              className={`btn ${bgStyle === 'aurora' ? 'neon-btn' : 'outline-btn'}`}
              onClick={() => setBgStyle('aurora')}
            >
              Aurora Pulse
            </button>
            <button
              className={`btn ${bgStyle === 'matrix' ? 'neon-btn' : 'outline-btn'}`}
              onClick={() => setBgStyle('matrix')}
            >
              Neural Matrix
            </button>
          </div>
        </div>

        <div className="settings-section">
          <span className="settings-label">Animation Engine</span>
          <div className="theme-toggle-row">
            <button
              className={`btn ${animStyle === 'standard' ? 'neon-btn' : 'outline-btn'}`}
              onClick={() => setAnimStyle('standard')}
            >
              Streamlined
            </button>
            <button
              className={`btn ${animStyle === 'extra' ? 'neon-btn' : 'outline-btn'}`}
              onClick={() => setAnimStyle('extra')}
            >
              Cinematic
            </button>
          </div>
        </div>

        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '20px' }}>
          * Changes applied globally across all sectors of the React Universe.
        </p>
      </motion.div>
    </motion.div>
  );
}