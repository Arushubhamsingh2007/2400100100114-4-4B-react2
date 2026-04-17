import { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaAdjust } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <div className="tm-root">
      <style>{`
        .tm-root {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          padding: 20px;
        }
        .tm-container {
          width: 100%;
          max-width: 450px;
          background: ${dark ? "rgba(15, 23, 42, 0.85)" : "rgba(241, 245, 249, 0.9)"};
          backdrop-filter: blur(20px);
          border: 1px solid ${dark ? "rgba(0, 242, 254, 0.3)" : "rgba(100, 116, 139, 0.2)"};
          border-radius: 40px;
          padding: 60px 40px;
          text-align: center;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          color: ${dark ? "white" : "#1e293b"};
          position: relative;
          overflow: hidden;
        }
        .tm-orb {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          cursor: pointer;
          position: relative;
          z-index: 1;
          background: ${dark ? "rgba(0, 242, 254, 0.1)" : "rgba(245, 158, 11, 0.1)"};
          border: 2px dashed ${dark ? "#00f2fe" : "#f59e0b"};
          color: ${dark ? "#00f2fe" : "#f59e0b"};
          box-shadow: 0 0 40px ${dark ? "rgba(0, 242, 254, 0.2)" : "rgba(245, 158, 11, 0.2)"};
          transition: all 0.6s;
        }
        .tm-orb:hover {
          transform: rotate(180deg) scale(1.1);
          border-style: solid;
        }
        .tm-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .tm-desc {
          font-size: 0.9rem;
          opacity: 0.7;
          margin-bottom: 40px;
        }
        .tm-switch-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        .tm-toggle-btn {
          width: 180px;
          padding: 16px;
          border-radius: 30px;
          border: none;
          background: ${dark ? "linear-gradient(90deg, #00f2fe, #0072ff)" : "linear-gradient(90deg, #f59e0b, #ef4444)"};
          color: white;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.4s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .tm-toggle-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .tm-bg-effect {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, ${dark ? "rgba(0, 242, 254, 0.05)" : "rgba(245, 158, 11, 0.05)"} 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <motion.div 
        className="tm-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="tm-bg-effect"></div>
        
        <motion.div 
          className="tm-orb"
          onClick={() => setDark(!dark)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {dark ? <FaMoon /> : <FaSun />}
        </motion.div>

        <h2 className="tm-title">{dark ? "Obsidian" : "Radiant"}</h2>
        <p className="tm-desc">Polarity Synchronization Module</p>

        <div className="tm-switch-wrap">
          <motion.button 
            className="tm-toggle-btn"
            onClick={() => setDark(!dark)}
            whileHover={{ scale: 1.05 }}
          >
            <FaAdjust /> {dark ? "IGNITE LIGHT" : "INDUCE DARK"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default ThemeToggle;