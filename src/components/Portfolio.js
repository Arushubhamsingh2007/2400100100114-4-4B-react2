import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaShieldAlt,
  FaLaptopCode,
  FaBrain,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaRocket,
  FaArrowRight
} from "react-icons/fa";
import whatsappImg from "./WhatsApp Image 2026-04-11 at 22.34.23.jpeg";

function Portfolio({ onEnterUniverse, isDarkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className={`portfolio-v3 ${isDarkMode ? "dark-v3" : "light-v3"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Poppins:wght@300;400;500;600&family=Fira+Code:wght@400;500&display=swap');

        .portfolio-v3 {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-main);
          font-family: 'Poppins', sans-serif;
          padding: 80px 20px;
          overflow-x: hidden;
          position: relative;
          transition: background 0.5s ease, color 0.5s ease;
        }

        .dark-v3 { background: #020617; color: #f1f5f9; }
        .light-v3 { background: #ffffff; color: #0f172a; }

        /* ── Animated Background ── */
        .pv3-bg-mesh {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, var(--accent-glow) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, var(--accent-glow) 0%, transparent 50%);
          z-index: 0;
          pointer-events: none;
          opacity: 0.5;
        }

        /* ── Hero Section ── */
        .pv3-hero {
          max-width: 1200px;
          margin: 0 auto 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .pv3-profile-box {
          position: relative;
          margin-bottom: 50px;
        }

        .pv3-image-frame {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          padding: 10px;
          background: linear-gradient(135deg, var(--accent-color), #29ffc6);
          box-shadow: 0 0 50px var(--accent-glow);
          position: relative;
          z-index: 2;
        }

        .pv3-image-frame img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--bg-primary);
          position: relative;
          z-index: 1;
        }

        .pv3-scan-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: linear-gradient(to bottom, transparent, var(--accent-color), transparent);
          box-shadow: 0 0 20px var(--accent-color);
          z-index: 10;
          animation: photo-scan 4s linear infinite;
          opacity: 0.6;
          pointer-events: none;
        }

        @keyframes photo-scan {
          0% { top: -10%; }
          50% { top: 110%; }
          100% { top: -10%; }
        }

        .pv3-orbital-ring {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border: 2px dashed var(--accent-color);
          opacity: 0.3;
          border-radius: 50%;
          animation: spin 20s linear infinite;
          pointer-events: none;
        }

        @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }

        .pv3-crosshair {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          z-index: 11;
          opacity: 0.4;
        }

        .ch-box {
          position: absolute;
          width: 20px;
          height: 20px;
          border-top: 2px solid var(--accent-color);
          border-left: 2px solid var(--accent-color);
          top: -20px;
          left: -20px;
        }

        .pv3-floating-badge {
          position: absolute;
          background: var(--bg-primary);
          border: 1px solid var(--accent-color);
          padding: 8px 16px;
          border-radius: 20px;
          font-family: 'Orbitron';
          font-size: 0.75rem;
          color: var(--text-main);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          z-index: 5;
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }

        .badge-1 { top: 20px; right: -80px; }
        .badge-2 { bottom: 40px; left: -100px; }
        .badge-3 { top: 140px; left: -120px; }

        .pv3-name {
          font-family: 'Orbitron', sans-serif;
          font-size: 5rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.1;
          color: var(--text-main);
        }
        
        .name-segment { display: block; }
        .text-gradient {
          background: linear-gradient(90deg, var(--accent-color), #a78bfa);
          -webkit-background-clip: text;
          color: transparent;
        }

        .pv3-role {
          font-family: 'Fira Code', monospace;
          font-size: 1.1rem;
          color: var(--accent-color);
          margin-top: 20px;
          letter-spacing: 4px;
          text-transform: uppercase;
          opacity: 0.8;
        }

        /* ── Info Grid ── */
        .pv3-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .pv3-grid { grid-template-columns: 1fr; }
          .pv3-name { font-size: 3rem; }
        }

        .pv3-panel {
          background: ${isDarkMode ? "rgba(15, 23, 42, 0.4)" : "rgba(255, 255, 255, 0.8)"};
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 30px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .pv3-panel:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
          box-shadow: 0 20px 50px var(--accent-glow);
        }

        .panel-bracket {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid var(--accent-color);
          opacity: 0.4;
        }
        .b-tl { top: 20px; left: 20px; border-bottom: none; border-right: none; }
        .b-br { bottom: 20px; right: 20px; border-top: none; border-left: none; }

        .pv3-panel h2 {
          font-family: 'Orbitron';
          font-size: 1.4rem;
          color: var(--accent-color);
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .pv3-panel p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-main);
          opacity: 0.8;
        }

        .pv3-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        .pv3-skill-tag {
          background: rgba(var(--accent-color-rgb), 0.1);
          color: var(--accent-color);
          padding: 8px 18px;
          border-radius: 12px;
          border: 1px solid var(--accent-glow);
          font-family: 'Fira Code';
          font-size: 0.85rem;
          font-weight: 500;
        }

        .pv3-project-node {
          padding: 20px;
          background: rgba(255,255,255,0.03);
          border-radius: 20px;
          border-left: 4px solid var(--accent-color);
          margin-bottom: 20px;
        }

        .pv3-socials {
          display: flex;
          gap: 25px;
          margin-top: 30px;
        }

        .pv3-social-icon {
          font-size: 1.8rem;
          color: var(--text-main);
          opacity: 0.6;
          cursor: pointer;
          transition: all 0.3s;
        }

        .pv3-social-icon:hover {
          color: var(--accent-color);
          opacity: 1;
          transform: translateY(-5px);
        }

        /* ── Final Portal ── */
        .pv3-portal-section {
          max-width: 1200px;
          margin: 150px auto 0;
          text-align: center;
          padding: 80px 20px;
          position: relative;
        }

        .portal-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%);
          z-index: 0;
          opacity: 0.4;
        }

        .portal-btn {
          position: relative;
          z-index: 1;
          background: var(--accent-color);
          color: #000;
          border: none;
          padding: 25px 60px;
          font-family: 'Orbitron';
          font-weight: 900;
          font-size: 1.4rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.5s;
          display: inline-flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 10px 40px var(--accent-glow);
        }

        .portal-btn:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 20px 60px var(--accent-glow);
          letter-spacing: 2px;
        }
      `}</style>

      <div className="pv3-bg-mesh"></div>

      {/* Hero Section */}
      <motion.section className="pv3-hero" variants={containerVariants} initial="hidden" animate="visible">
        <div className="pv3-profile-box">
          <motion.div 
            className="pv3-image-frame"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="pv3-orbital-ring"></div>
            <div className="pv3-crosshair">
              <div className="ch-box"></div>
              <div className="ch-box" style={{ transform: 'rotate(180deg)', top: 'auto', left: 'auto', bottom: '-20px', right: '-20px' }}></div>
            </div>
            <img src={whatsappImg} alt="ARU SHUBHAM SINGH" />
            <div className="pv3-scan-bar"></div>
          </motion.div>
          
          <motion.div className="pv3-floating-badge badge-1" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <FaShieldAlt /> Cyber Security
          </motion.div>
          <motion.div className="pv3-floating-badge badge-2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <FaLaptopCode /> Full Stack Dev
          </motion.div>
          <motion.div className="pv3-floating-badge badge-3" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
            <FaBrain /> AI Enthusiast
          </motion.div>
        </div>

        <motion.h1 
          className="pv3-name"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="name-segment">
            {"ARU SHUBHAM".split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="name-segment">
            {"SINGH".split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>
        <p className="pv3-role">Tech Titan Node • B.Tech AI & Cyber</p>
      </motion.section>

      <motion.div 
        className="pv3-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* About Me */}
        <motion.div className="pv3-panel" variants={itemVariants}>
          <div className="panel-bracket b-tl"></div>
          <div className="panel-bracket b-br"></div>
          <h2><FaUser /> About Matrix</h2>
          <p>
            I am a 2nd year B.Tech student at UCER with a pulse for Cybersecurity and complex Development systems. 
            Actively mapping the frontier of vulnerability analysis and innovative tech solutions.
          </p>
          <p style={{ color: 'var(--accent-color)', fontSize: '0.75rem', fontFamily: 'Fira Code' }}>
            STATUS: ACTIVE_NODE | CLEARANCE: LEVEL_4
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className="pv3-panel" variants={itemVariants}>
          <div className="panel-bracket b-tl"></div>
          <div className="panel-bracket b-br"></div>
          <h2><FaCode /> Core Protocols</h2>
          <div className="pv3-skills">
            {["C / C++", "Python", "Java", "Linux", "Cyber Sec", "React", "AI", "Logic"].map(s => (
              <span key={s} className="pv3-skill-tag">{s}</span>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div className="pv3-panel" style={{ gridColumn: 'span 1' }} variants={itemVariants}>
          <div className="panel-bracket b-tl"></div>
          <div className="panel-bracket b-br"></div>
          <h2><FaProjectDiagram /> Case Studies</h2>
          <div className="pv3-project-node">
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>Crypto Analysis</h3>
            <p style={{ fontSize: '0.8rem' }}>Heuristic study of blockchain vulnerabilities.</p>
          </div>
          <div className="pv3-project-node">
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>Healthcare AI</h3>
            <p style={{ fontSize: '0.8rem' }}>Intelligent medical guidance engine concept.</p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div className="pv3-panel" variants={itemVariants}>
          <div className="panel-bracket b-tl"></div>
          <div className="panel-bracket b-br"></div>
          <h2><FaEnvelope /> Quantum Channel</h2>
          <p style={{ fontSize: '0.85rem' }}>ashubham701080@gmail.com</p>
          <p style={{ fontSize: '0.85rem' }}>Allahabad, Uttar Pradesh</p>
          
          <div className="pv3-socials">
            <a href="https://github.com/Arushubhamsingh2007" target="_blank" rel="noreferrer" className="pv3-social-icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aru-shubham-singh-099a68329" target="_blank" rel="noreferrer" className="pv3-social-icon"><FaLinkedin /></a>
            <FaTwitter className="pv3-social-icon" />
          </div>
        </motion.div>

      </motion.div>

      {/* Universe Portal Navigation */}
      <motion.div 
        className="pv3-portal-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="portal-glow"></div>
        <h3 style={{ fontFamily: 'Orbitron', letterSpacing: '4px', marginBottom: '30px', opacity: 0.7 }}>PROTOCOL OVERRIDE: READY TO DEPLOY</h3>
        <button className="portal-btn" onClick={onEnterUniverse}>
          <FaRocket /> Enter My Universe <FaArrowRight />
        </button>
      </motion.div>
    </div>
  );
}

export default Portfolio;