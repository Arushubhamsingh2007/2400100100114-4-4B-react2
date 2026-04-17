import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGamepad, FaRobot, FaGhost, FaRocket, FaChevronLeft } from "react-icons/fa";
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";

function Game() {
  const [activeGame, setActiveGame] = useState(null);

  const gameList = [
    { id: 1, name: "Snake Feast", icon: <FaGhost />, color: "#8b5cf6", desc: "Classic reptile grow simulation" },
    { id: 2, name: "Target Blitz", icon: <FaRocket />, color: "#f472b6", desc: "Precision reflex strike arena" },
    { id: 3, name: "Tap Storm", icon: <FaGamepad />, color: "#fb923c", desc: "Infinite frequency tap matrix" },
    { id: 4, name: "Cyber Runner", icon: <FaRobot />, color: "#38bdf8", desc: "Linear obstacle evasion module" },
  ];

  return (
    <div className="gm-root">
      <style>{`
        .gm-root {
          padding: 20px;
          min-height: 80vh;
        }
        .gm-arena-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }
        .gm-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .gm-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.2rem;
          background: linear-gradient(90deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: 6px;
          text-transform: uppercase;
        }
        .gm-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }
        .gm-card {
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 40px 25px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        .gm-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, var(--g-color), transparent 70%);
          opacity: 0.05;
          transition: opacity 0.4s;
        }
        .gm-card:hover {
          transform: translateY(-10px) scale(1.03);
          border-color: var(--g-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px var(--g-color-low);
        }
        .gm-card:hover::before {
          opacity: 0.15;
        }
        .gm-card-icon {
          font-size: 2.5rem;
          color: var(--g-color);
          margin-bottom: 20px;
          filter: drop-shadow(0 0 10px var(--g-color-low));
        }
        .gm-card-name {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.1rem;
          color: white;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }
        .gm-card-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.5;
        }
        .gm-active-viewport {
          background: rgba(10, 15, 30, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 35px;
          padding: 40px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
          position: relative;
        }
        .gm-back-btn {
          position: absolute;
          top: 30px;
          left: 30px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #94a3b8;
          padding: 8px 15px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          z-index: 100;
        }
        .gm-back-btn:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }
      `}</style>

      <div className="gm-arena-container">
        <AnimatePresence mode="wait">
          {!activeGame ? (
            <motion.div 
              key="selector"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="gm-header">
                <h1 className="gm-title">Neural Arena</h1>
                <p style={{ color: '#64748b', letterSpacing: '4px', marginTop: '10px' }}>SELECT SIMULATED PROTOCOL</p>
              </div>

              <div className="gm-grid">
                {gameList.map((g) => (
                  <motion.div 
                    key={g.id}
                    className="gm-card"
                    style={{ '--g-color': g.color, '--g-color-low': g.color + '44' }}
                    onClick={() => setActiveGame(g.id)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="gm-card-icon">{g.icon}</div>
                    <h3 className="gm-card-name">{g.name}</h3>
                    <p className="gm-card-desc">{g.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="gameplay"
              className="gm-active-viewport"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button className="gm-back-btn" onClick={() => setActiveGame(null)}>
                <FaChevronLeft /> EXIT STAGE
              </button>

              {activeGame === 1 && <Game1 />}
              {activeGame === 2 && <Game2 />}
              {activeGame === 3 && <Game3 />}
              {activeGame === 4 && <Game4 />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Game;