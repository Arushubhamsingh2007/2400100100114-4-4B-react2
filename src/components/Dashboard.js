import React from "react";
import { motion } from "framer-motion";
import { FaLayerGroup, FaCogs, FaRocket, FaDice, FaCode, FaMicrochip } from "react-icons/fa";

function Dashboard() {
  const stats = [
    { label: "Active Nodes", val: "16", icon: <FaMicrochip /> },
    { label: "Uptime", val: "99.9%", icon: <FaRocket /> },
    { label: "Core Protocol", val: "v3.0", icon: <FaCode /> }
  ];

  return (
    <div className="db-root">
      <style>{`
        .db-root { padding: 40px; }
        .db-header { 
          margin-bottom: 60px; 
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }
        .db-tag {
          font-family: 'Orbitron';
          font-size: 0.7rem;
          color: #38bdf8;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 15px;
          display: block;
        }
        .db-title {
          font-family: 'Orbitron';
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          background: linear-gradient(90deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .db-stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }
        .db-stat-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .db-stat-icon {
          width: 50px; height: 50px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        .db-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        @media (max-width: 800px) {
          .db-grid { grid-template-columns: 1fr; }
          .db-stat-row { grid-template-columns: 1fr; }
        }
        .db-panel {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }
        .db-panel h2 {
          font-family: 'Orbitron';
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .db-panel p { color: #94a3b8; line-height: 1.7; font-size: 0.95rem; }
        .db-tech-list { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 25px; }
        .db-tech-tag {
          padding: 6px 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          font-size: 0.75rem;
          color: #cbd5e1;
        }
      `}</style>

      <motion.div 
        className="db-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="db-tag">Central Command • Dashboard</span>
        <h1 className="db-title">Integrated Module Control System</h1>
        <p style={{color: '#64748b'}}>Neural interface for component management and system diagnostics.</p>
      </motion.div>

      <div className="db-stat-row">
        {stats.map((s, i) => (
          <motion.div 
            key={i} 
            className="db-stat-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="db-stat-icon">{s.icon}</div>
            <div>
              <div style={{fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase'}}>{s.label}</div>
              <div style={{fontFamily: 'Orbitron', color: '#fff', fontSize: '1.1rem'}}>{s.val}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="db-grid">
        <motion.div className="db-panel" whileHover={{ y: -5 }}>
          <h2><FaLayerGroup /> Architecture</h2>
          <p>
            The ecosystem is built on a modular component-first architecture, ensuring high scalability and decoupled logic layers across the repository.
          </p>
          <div className="db-tech-list">
            {["React 19", "Framer Motion", "Vanilla CSS", "Module Routing"].map(t => <span key={t} className="db-tech-tag">{t}</span>)}
          </div>
        </motion.div>

        <motion.div className="db-panel" whileHover={{ y: -5 }}>
          <h2><FaCogs /> Core Protocols</h2>
          <p>
            Standardizing interactive aesthetics using Glassmorphism, Advanced CSS techniques, and smooth motion primitives for a premium feel.
          </p>
          <div className="db-tech-list">
            {["Neon Glows", "Mesh Gradients", "Lazy Load", "Spring Physics"].map(t => <span key={t} className="db-tech-tag">{t}</span>)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
