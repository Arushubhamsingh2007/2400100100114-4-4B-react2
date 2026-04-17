import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaintBrush,
  FaCubes,
  FaMagic,
  FaLayerGroup,
  FaStar,
  FaBolt,
  FaEye,
} from "react-icons/fa";

const cssTopics = [
  {
    id: 1,
    name: "Glassmorphism",
    icon: <FaLayerGroup />,
    cls: "sky",
    description:
      "Create frosted-glass UI effects using backdrop-filter, transparency, and layered backgrounds for a modern, depth-rich interface.",
    demo: "glass",
  },
  {
    id: 2,
    name: "Neumorphism",
    icon: <FaCubes />,
    cls: "violet",
    description:
      "Soft, extruded UI elements using inner and outer box-shadows on matching backgrounds, giving a clay-like tactile feel.",
    demo: "neumorphism",
  },
  {
    id: 3,
    name: "Gradient Animations",
    icon: <FaPaintBrush />,
    cls: "pink",
    description:
      "Smoothly transitioning multi-color gradients using background-size animation and keyframes for eye-catching backgrounds.",
    demo: "gradient",
  },
  {
    id: 4,
    name: "3D Transforms",
    icon: <FaMagic />,
    cls: "orange",
    description:
      "Leverage perspective, rotateX/Y/Z, and translateZ to build immersive 3D card flips, cubes, and spatial layouts.",
    demo: "transform3d",
  },
  {
    id: 5,
    name: "Neon Glow Effects",
    icon: <FaBolt />,
    cls: "green",
    description:
      "Vivid neon text and borders using layered text-shadow and box-shadow with high-saturation colors on dark backgrounds.",
    demo: "neon",
  },
  {
    id: 6,
    name: "Micro-Interactions",
    icon: <FaStar />,
    cls: "yellow",
    description:
      "Subtle hover transitions, button ripples, and focus states that give satisfying, responsive feedback to users.",
    demo: "micro",
  },
];

/* ─── Live Demo Components ─── */

function GlassDemo() {
  return (
    <div className="acss-demo-area acss-demo-glass">
      <div className="acss-glass-bg">
        <div className="acss-glass-orb acss-glass-orb-1" />
        <div className="acss-glass-orb acss-glass-orb-2" />
        <div className="acss-glass-orb acss-glass-orb-3" />
        <div className="acss-glass-card">
          <h4>Glass Card</h4>
          <p>backdrop-filter: blur(20px)</p>
          <p>background: rgba(255,255,255,0.08)</p>
        </div>
      </div>
    </div>
  );
}

function NeumorphismDemo() {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="acss-demo-area acss-demo-neumorph">
      <div className="acss-neumorph-surface">
        <div
          className={`acss-neumorph-btn ${pressed ? "pressed" : ""}`}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
        >
          <span>Press Me</span>
        </div>
        <div className="acss-neumorph-input">
          <span>Soft Input Field</span>
        </div>
        <div className="acss-neumorph-circle">
          <FaEye />
        </div>
      </div>
    </div>
  );
}

function GradientDemo() {
  return (
    <div className="acss-demo-area acss-demo-gradient">
      <div className="acss-gradient-box" />
      <div className="acss-gradient-text">GRADIENT</div>
      <div className="acss-gradient-border-box">
        <span>Animated Border</span>
      </div>
    </div>
  );
}

function Transform3DDemo() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="acss-demo-area acss-demo-3d">
      <div
        className={`acss-flip-card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="acss-flip-inner">
          <div className="acss-flip-front">
            <FaMagic size={32} />
            <p>Click to Flip</p>
          </div>
          <div className="acss-flip-back">
            <p>3D Transform!</p>
            <small>rotateY(180deg)</small>
          </div>
        </div>
      </div>
      <div className="acss-cube-scene">
        <div className="acss-cube">
          <div className="acss-cube-face front">F</div>
          <div className="acss-cube-face back">B</div>
          <div className="acss-cube-face left">L</div>
          <div className="acss-cube-face right">R</div>
          <div className="acss-cube-face top">T</div>
          <div className="acss-cube-face bottom">Bo</div>
        </div>
      </div>
    </div>
  );
}

function NeonDemo() {
  return (
    <div className="acss-demo-area acss-demo-neon">
      <div className="acss-neon-text">NEON</div>
      <div className="acss-neon-line" />
      <div className="acss-neon-box">
        <span>Glow Box</span>
      </div>
      <div className="acss-neon-dots">
        <span /><span /><span /><span /><span />
      </div>
    </div>
  );
}

function MicroDemo() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="acss-demo-area acss-demo-micro">
      <button
        className={`acss-micro-heart ${liked ? "liked" : ""}`}
        onClick={() => setLiked(!liked)}
      >
        {liked ? "❤️" : "🤍"} {liked ? "Liked!" : "Like"}
      </button>
      <button
        className="acss-micro-ripple"
        onClick={() => setCount((c) => c + 1)}
      >
        Tap Count: {count}
      </button>
      <div className="acss-micro-toggle-row">
        <label className="acss-toggle-switch">
          <input type="checkbox" />
          <span className="acss-toggle-slider" />
        </label>
        <span>Toggle</span>
      </div>
    </div>
  );
}

const demoMap = {
  glass: GlassDemo,
  neumorphism: NeumorphismDemo,
  gradient: GradientDemo,
  transform3d: Transform3DDemo,
  neon: NeonDemo,
  micro: MicroDemo,
};

/* ─── Main Component ─── */

export default function AdvancedCSS() {
  const [selected, setSelected] = useState(null);

  const DemoComponent = selected ? demoMap[selected.demo] : null;

  return (
    <div className="acss-root">
      <style>{advancedCSSStyles}</style>

      <motion.div
        className="acss-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="acss-logo-mark">
          <span className="acss-logo-bracket">{"{"}</span>
          <span className="acss-logo-css">CSS</span>
          <span className="acss-logo-bracket">{"}"}</span>
        </div>
        <h1 className="acss-title">Advanced CSS Showcase</h1>
        <p className="acss-subtitle">
          Interactive demonstrations of modern CSS techniques — hover, click &amp; explore
        </p>
      </motion.div>

      {/* ─── Symmetric Grid ─── */}
      <motion.div
        className="acss-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {cssTopics.map((topic) => (
          <motion.div
            key={topic.id}
            className={`acss-card acss-card-${topic.cls} ${selected?.id === topic.id ? "active" : ""}`}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              setSelected(selected?.id === topic.id ? null : topic)
            }
            layout
          >
            <div className="acss-card-icon-wrapper">
              <div className="acss-card-icon-phase"></div>
              <div className="acss-card-icon">{topic.icon}</div>
            </div>
            <h3 className="acss-card-name">{topic.name}</h3>
            <p className="acss-card-desc">{topic.description}</p>
            <div className="acss-card-badge">
              {selected?.id === topic.id ? "Close Demo ✕" : "Live Demo →"}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ─── Live Demo Panel ─── */}
      <AnimatePresence mode="wait">
        {selected && DemoComponent && (
          <motion.div
            className={`acss-demo-panel acss-panel-${selected.cls}`}
            key={selected.id}
            initial={{ opacity: 0, height: 0, y: 30 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: 30 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <div className="acss-demo-header">
              <div className="acss-demo-icon">{selected.icon}</div>
              <div>
                <h2 className="acss-demo-title">{selected.name}</h2>
                <p className="acss-demo-sub">Interactive live preview</p>
              </div>
              <button
                className="acss-demo-close"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>
            <DemoComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════════════
   ─── ALL STYLES (Advanced CSS)  ───
   ════════════════════════════════════════════════ */

const advancedCSSStyles = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap');

/* ── Root Container ── */
.acss-root {
  padding: 40px 30px 60px;
  max-width: 1100px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  color: var(--text-main);
}

/* ── Header ── */
.acss-header {
  text-align: center;
  margin-bottom: 48px;
}

.acss-logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.acss-logo-bracket {
  color: #475569;
  font-weight: 400;
}

.acss-logo-css {
  background: linear-gradient(135deg, #38bdf8, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 800;
  letter-spacing: 3px;
}

.acss-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
  margin: 0 0 10px;
  background: linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6, #fb923c);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: acss-title-shift 6s ease infinite;
}

@keyframes acss-title-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.acss-subtitle {
  color: #94a3b8;
  font-size: 1rem;
  margin: 0;
  letter-spacing: 0.5px;
}

/* ── Symmetric Grid ── */
.acss-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 36px;
}

@media (max-width: 900px) {
  .acss-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .acss-grid { grid-template-columns: 1fr; }
}

/* ── Card Base ── */
.acss-card {
  position: relative;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 30px 20px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  aspect-ratio: 1 / 1;
  justify-content: center;
  gap: 15px;
}

.acss-card > * {
  position: relative;
  z-index: 1;
}

.acss-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(15, 23, 42, 0.95);
  border-color: transparent;
}

/* Card Icon Wrapper */
.acss-card-icon-wrapper {
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.acss-card-icon-phase {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(8px);
  transition: all 0.4s ease;
}

.acss-card:hover .acss-card-icon-phase {
  transform: scale(1.6);
  opacity: 0.8;
  filter: blur(12px);
}

/* Card Icon */
.acss-card-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  z-index: 2;
  transition: transform 0.6s, box-shadow 0.4s;
}

.acss-card:hover .acss-card-icon {
  transform: rotateY(360deg);
}

/* Card Name */
.acss-card-name {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: #f1f5f9;
  transition: color 0.3s;
}

/* Card Description */
.acss-card-desc {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--text-dim);
  margin: 0 0 16px;
  flex: 1;
}

/* Card Badge */
.acss-card-badge {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 99px;
  transition: background 0.3s, transform 0.3s;
}

.acss-card:hover .acss-card-badge {
  transform: translateY(-2px);
}

/* ═══════════════════════════════
   PER-COLOR CARD THEMES
   ═══════════════════════════════ */

/* ── Sky (Glassmorphism) ── */
.acss-card-sky .acss-card-icon-phase { background: radial-gradient(circle, #38bdf8, transparent); }
.acss-card-sky .acss-card-icon {
  color: #38bdf8;
  background: rgba(56,189,248,0.12);
  border: 1px solid rgba(56,189,248,0.25);
}
.acss-card-sky:hover, .acss-card-sky.active {
  border-color: #38bdf8 !important;
  box-shadow: 0 0 30px rgba(56,189,248,0.4), 0 12px 40px rgba(0,0,0,0.4);
}

/* ── Violet (Neumorphism) ── */
.acss-card-violet .acss-card-icon-phase { background: radial-gradient(circle, #a78bfa, transparent); }
.acss-card-violet .acss-card-icon {
  color: #a78bfa;
  background: rgba(167,139,250,0.12);
  border: 1px solid rgba(167,139,250,0.25);
}
.acss-card-violet:hover, .acss-card-violet.active {
  border-color: #a78bfa !important;
  box-shadow: 0 0 30px rgba(167,139,250,0.4), 0 12px 40px rgba(0,0,0,0.4);
}

/* ── Pink (Gradient Animations) ── */
.acss-card-pink .acss-card-icon-phase { background: radial-gradient(circle, #f472b6, transparent); }
.acss-card-pink .acss-card-icon {
  color: #f472b6;
  background: rgba(244,114,182,0.12);
  border: 1px solid rgba(244,114,182,0.25);
}
.acss-card-pink:hover, .acss-card-pink.active {
  border-color: #f472b6 !important;
  box-shadow: 0 0 30px rgba(244,114,182,0.4), 0 12px 40px rgba(0,0,0,0.4);
}

/* ── Orange (3D Transforms) ── */
.acss-card-orange .acss-card-icon-phase { background: radial-gradient(circle, #fb923c, transparent); }
.acss-card-orange .acss-card-icon {
  color: #fb923c;
  background: rgba(251,146,60,0.12);
  border: 1px solid rgba(251,146,60,0.25);
}
.acss-card-orange:hover, .acss-card-orange.active {
  border-color: #fb923c !important;
  box-shadow: 0 0 30px rgba(251,146,60,0.4), 0 12px 40px rgba(0,0,0,0.4);
}

/* ── Green (Neon Glow) ── */
.acss-card-green .acss-card-icon-phase { background: radial-gradient(circle, #34d399, transparent); }
.acss-card-green .acss-card-icon {
  color: #34d399;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.25);
}
.acss-card-green:hover, .acss-card-green.active {
  border-color: #34d399 !important;
  box-shadow: 0 0 30px rgba(52,211,153,0.4), 0 12px 40px rgba(0,0,0,0.4);
}

/* ── Yellow (Micro-Interactions) ── */
.acss-card-yellow .acss-card-icon-phase { background: radial-gradient(circle, #facc15, transparent); }
.acss-card-yellow .acss-card-icon {
  color: #facc15;
  background: rgba(250,204,21,0.12);
  border: 1px solid rgba(250,204,21,0.25);
}
.acss-card-yellow:hover, .acss-card-yellow.active {
  border-color: #facc15 !important;
  box-shadow: 0 0 30px rgba(250,204,21,0.4), 0 12px 40px rgba(0,0,0,0.4);
}

/* ══════════════════════════════
   DEMO PANEL
   ══════════════════════════════ */

.acss-demo-panel {
  background: var(--card-bg);
  border: 1px solid var(--accent-glow);
  border-radius: 24px;
  padding: 32px;
  margin-top: 8px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}

.acss-panel-sky    { border-color: rgba(56,189,248,0.35);  box-shadow: 0 0 40px rgba(56,189,248,0.12); }
.acss-panel-violet { border-color: rgba(167,139,250,0.35); box-shadow: 0 0 40px rgba(167,139,250,0.12); }
.acss-panel-pink   { border-color: rgba(244,114,182,0.35); box-shadow: 0 0 40px rgba(244,114,182,0.12); }
.acss-panel-orange { border-color: rgba(251,146,60,0.35);  box-shadow: 0 0 40px rgba(251,146,60,0.12); }
.acss-panel-green  { border-color: rgba(52,211,153,0.35);  box-shadow: 0 0 40px rgba(52,211,153,0.12); }
.acss-panel-yellow { border-color: rgba(250,204,21,0.35);  box-shadow: 0 0 40px rgba(250,204,21,0.12); }

.acss-demo-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.acss-demo-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.acss-panel-sky .acss-demo-icon    { color: #38bdf8; background: rgba(56,189,248,0.12);  border: 1px solid rgba(56,189,248,0.25); }
.acss-panel-violet .acss-demo-icon { color: #a78bfa; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.25); }
.acss-panel-pink .acss-demo-icon   { color: #f472b6; background: rgba(244,114,182,0.12); border: 1px solid rgba(244,114,182,0.25); }
.acss-panel-orange .acss-demo-icon { color: #fb923c; background: rgba(251,146,60,0.12);  border: 1px solid rgba(251,146,60,0.25); }
.acss-panel-green .acss-demo-icon  { color: #34d399; background: rgba(52,211,153,0.12);  border: 1px solid rgba(52,211,153,0.25); }
.acss-panel-yellow .acss-demo-icon { color: #facc15; background: rgba(250,204,21,0.12);  border: 1px solid rgba(250,204,21,0.25); }

.acss-demo-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
}

.acss-panel-sky .acss-demo-title    { color: #38bdf8; }
.acss-panel-violet .acss-demo-title { color: #a78bfa; }
.acss-panel-pink .acss-demo-title   { color: #f472b6; }
.acss-panel-orange .acss-demo-title { color: #fb923c; }
.acss-panel-green .acss-demo-title  { color: #34d399; }
.acss-panel-yellow .acss-demo-title { color: #facc15; }

.acss-demo-sub {
  margin: 4px 0 0;
  font-size: 0.82rem;
  color: #64748b;
}

.acss-demo-close {
  margin-left: auto;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
}

.acss-demo-close:hover {
  background: rgba(239,68,68,0.15);
  border-color: rgba(239,68,68,0.4);
  color: #f87171;
}

/* ── Demo Area (shared) ── */
.acss-demo-area {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 20px;
}

/* ═══════════════════
   1. GLASS DEMO
   ═══════════════════ */

.acss-demo-glass .acss-glass-bg {
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 260px;
  border-radius: 20px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.acss-glass-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: acss-orb-float 6s ease-in-out infinite alternate;
}

.acss-glass-orb-1 {
  width: 180px; height: 180px;
  background: rgba(56,189,248,0.5);
  top: -40px; left: -30px;
}

.acss-glass-orb-2 {
  width: 140px; height: 140px;
  background: rgba(167,139,250,0.5);
  bottom: -30px; right: -20px;
  animation-delay: -2s;
}

.acss-glass-orb-3 {
  width: 100px; height: 100px;
  background: rgba(244,114,182,0.5);
  top: 50%; left: 60%;
  animation-delay: -4s;
}

@keyframes acss-orb-float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(20px, -20px) scale(1.15); }
}

.acss-glass-card {
  position: relative;
  z-index: 2;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 18px;
  padding: 28px 32px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.acss-glass-card h4 {
  margin: 0 0 12px;
  font-size: 1.2rem;
  color: #fff;
}

.acss-glass-card p {
  margin: 4px 0;
  font-size: 0.78rem;
  font-family: 'Fira Code', monospace;
  color: #94a3b8;
}

/* ═══════════════════
   2. NEUMORPHISM DEMO
   ═══════════════════ */

.acss-demo-neumorph .acss-neumorph-surface {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 480px;
  border: 1px solid rgba(0,0,0,0.05);
}

.acss-neumorph-btn {
  width: 140px;
  height: 52px;
  border-radius: 16px;
  background: var(--bg-primary);
  box-shadow:
    8px 8px 16px rgba(0,0,0,0.15),
    -8px -8px 16px rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--accent-color);
  font-weight: 600;
  font-size: 0.9rem;
  user-select: none;
}

.dark-theme .acss-neumorph-btn {
  box-shadow:
    8px 8px 16px rgba(0,0,0,0.5),
    -8px -8px 16px rgba(255,255,255,0.05);
}

.acss-neumorph-btn.pressed {
  box-shadow:
    inset 6px 6px 12px rgba(0,0,0,0.15),
    inset -6px -6px 12px rgba(255,255,255,0.8);
}

.dark-theme .acss-neumorph-btn.pressed {
  box-shadow:
    inset 6px 6px 12px rgba(0,0,0,0.5),
    inset -6px -6px 12px rgba(255,255,255,0.05);
}

.acss-neumorph-input {
  width: 180px;
  height: 44px;
  border-radius: 14px;
  background: #2a2a3e;
  box-shadow:
    inset 4px 4px 8px rgba(0,0,0,0.45),
    inset -4px -4px 8px rgba(60,60,80,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.8rem;
}

.acss-neumorph-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #2a2a3e;
  box-shadow:
    8px 8px 16px rgba(0,0,0,0.5),
    -8px -8px 16px rgba(60,60,80,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #a78bfa;
}

/* ═══════════════════
   3. GRADIENT DEMO
   ═══════════════════ */

.acss-demo-gradient {
  flex-direction: column;
  gap: 20px;
}

.acss-gradient-box {
  width: 100%;
  max-width: 400px;
  height: 80px;
  border-radius: 18px;
  background: linear-gradient(270deg, #ec4899, #8b5cf6, #38bdf8, #34d399, #facc15, #ec4899);
  background-size: 600% 100%;
  animation: acss-grad-move 6s ease infinite;
}

@keyframes acss-grad-move {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.acss-gradient-text {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 8px;
  background: linear-gradient(90deg, #f472b6, #e879f9, #a78bfa, #38bdf8);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: acss-grad-move 4s ease infinite;
}

.acss-gradient-border-box {
  position: relative;
  padding: 16px 32px;
  border-radius: 14px;
  background: #0f172a;
  z-index: 1;
}

.acss-gradient-border-box::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 16px;
  background: linear-gradient(90deg, #ec4899, #8b5cf6, #38bdf8, #ec4899);
  background-size: 400% 100%;
  animation: acss-grad-move 4s ease infinite;
  z-index: -1;
}

.acss-gradient-border-box span {
  color: #e2e8f0;
  font-weight: 600;
  font-size: 0.95rem;
}

/* ═══════════════════
   4. 3D TRANSFORM DEMO
   ═══════════════════ */

.acss-demo-3d {
  gap: 40px;
  perspective: 800px;
}

.acss-flip-card {
  width: 160px;
  height: 200px;
  cursor: pointer;
  perspective: 600px;
}

.acss-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.acss-flip-card.flipped .acss-flip-inner {
  transform: rotateY(180deg);
}

.acss-flip-front,
.acss-flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.acss-flip-front {
  background: linear-gradient(135deg, rgba(249,115,22,0.2), rgba(251,146,60,0.1));
  border: 1px solid rgba(249,115,22,0.3);
  color: #fb923c;
}

.acss-flip-back {
  background: linear-gradient(135deg, rgba(249,115,22,0.3), rgba(251,146,60,0.15));
  border: 1px solid rgba(249,115,22,0.4);
  color: #fdba74;
  transform: rotateY(180deg);
}

.acss-flip-back small {
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: #94a3b8;
}

/* Spinning Cube */
.acss-cube-scene {
  width: 80px;
  height: 80px;
  perspective: 400px;
}

.acss-cube {
  width: 80px;
  height: 80px;
  position: relative;
  transform-style: preserve-3d;
  animation: acss-cube-spin 8s linear infinite;
}

@keyframes acss-cube-spin {
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

.acss-cube-face {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 1px solid rgba(249,115,22,0.4);
  background: rgba(249,115,22,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fb923c;
  font-size: 0.9rem;
}

.acss-cube-face.front  { transform: translateZ(40px); }
.acss-cube-face.back   { transform: rotateY(180deg) translateZ(40px); }
.acss-cube-face.left   { transform: rotateY(-90deg) translateZ(40px); }
.acss-cube-face.right  { transform: rotateY(90deg) translateZ(40px); }
.acss-cube-face.top    { transform: rotateX(90deg) translateZ(40px); }
.acss-cube-face.bottom { transform: rotateX(-90deg) translateZ(40px); }

/* ═══════════════════
   5. NEON DEMO
   ═══════════════════ */

.acss-demo-neon {
  flex-direction: column;
  gap: 24px;
  background: #050a0f;
  border-radius: 20px;
  padding: 40px;
  width: 100%;
}

.acss-neon-text {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 12px;
  color: #34d399;
  text-shadow:
    0 0 7px #34d399,
    0 0 20px #34d399,
    0 0 42px #10b981,
    0 0 82px #10b981;
  animation: acss-neon-flicker 3s ease-in-out infinite;
}

@keyframes acss-neon-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
  52% { opacity: 1; }
  54% { opacity: 0.9; }
}

.acss-neon-line {
  width: 80%;
  height: 2px;
  background: #34d399;
  box-shadow: 0 0 8px #34d399, 0 0 20px #10b981;
  border-radius: 99px;
}

.acss-neon-box {
  padding: 16px 36px;
  border: 2px solid #34d399;
  border-radius: 14px;
  box-shadow:
    0 0 10px rgba(52,211,153,0.3),
    inset 0 0 10px rgba(52,211,153,0.1);
  transition: all 0.3s;
}

.acss-neon-box:hover {
  box-shadow:
    0 0 20px rgba(52,211,153,0.6),
    0 0 60px rgba(52,211,153,0.2),
    inset 0 0 20px rgba(52,211,153,0.15);
}

.acss-neon-box span {
  color: #34d399;
  font-weight: 600;
  letter-spacing: 2px;
}

.acss-neon-dots {
  display: flex;
  gap: 16px;
}

.acss-neon-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px #34d399, 0 0 20px #10b981;
  animation: acss-dot-pulse 1.5s ease-in-out infinite;
}

.acss-neon-dots span:nth-child(2) { animation-delay: 0.3s; }
.acss-neon-dots span:nth-child(3) { animation-delay: 0.6s; }
.acss-neon-dots span:nth-child(4) { animation-delay: 0.9s; }
.acss-neon-dots span:nth-child(5) { animation-delay: 1.2s; }

@keyframes acss-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.6); opacity: 0.6; }
}

/* ═══════════════════
   6. MICRO DEMO
   ═══════════════════ */

.acss-demo-micro {
  gap: 28px;
}

.acss-micro-heart {
  padding: 14px 28px;
  border-radius: 14px;
  border: 1px solid rgba(250,204,21,0.3);
  background: rgba(250,204,21,0.06);
  color: #facc15;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.acss-micro-heart:hover {
  background: rgba(250,204,21,0.12);
  transform: scale(1.05);
}

.acss-micro-heart.liked {
  background: rgba(250,204,21,0.18);
  border-color: #facc15;
  box-shadow: 0 0 20px rgba(250,204,21,0.3);
  animation: acss-heart-pop 0.4s ease;
}

@keyframes acss-heart-pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}

.acss-micro-ripple {
  padding: 14px 28px;
  border-radius: 14px;
  border: 1px solid rgba(250,204,21,0.3);
  background: rgba(250,204,21,0.06);
  color: #facc15;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.25s;
}

.acss-micro-ripple:active {
  transform: scale(0.95);
  box-shadow: 0 0 25px rgba(250,204,21,0.4);
}

.acss-micro-toggle-row {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #facc15;
  font-weight: 600;
}

.acss-toggle-switch {
  position: relative;
  width: 52px;
  height: 28px;
  display: inline-block;
}

.acss-toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.acss-toggle-slider {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.1);
  border-radius: 28px;
  cursor: pointer;
  transition: all 0.35s;
}

.acss-toggle-slider::before {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #94a3b8;
  left: 3px;
  top: 3px;
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.acss-toggle-switch input:checked + .acss-toggle-slider {
  background: rgba(250,204,21,0.25);
  box-shadow: 0 0 15px rgba(250,204,21,0.3);
}

.acss-toggle-switch input:checked + .acss-toggle-slider::before {
  transform: translateX(24px);
  background: #facc15;
  box-shadow: 0 0 10px rgba(250,204,21,0.6);
}

`;
