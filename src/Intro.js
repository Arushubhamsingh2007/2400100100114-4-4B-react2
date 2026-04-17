import React from "react";
import { motion } from "framer-motion";

const titleText = "TECH TITAN";

const Intro = () => {
  return (
    <div className="itr-root">
      <style>{`
        .itr-root {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #020617;
          overflow: hidden;
        }
        .itr-container {
          position: relative;
          display: flex;
          gap: 10px;
        }
        .itr-char {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 900;
          letter-spacing: 5px;
          text-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
        }
        .itr-loading-bar {
          margin-top: 40px;
          width: 300px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }
        .itr-loading-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: #38bdf8;
          box-shadow: 0 0 10px #38bdf8;
        }
        .itr-status {
          margin-top: 20px;
          font-family: 'Fira Code', monospace;
          color: #64748b;
          font-size: 0.8rem;
          letter-spacing: 2px;
        }
      `}</style>

      <div className="itr-container">
        {titleText.split("").map((char, index) => (
          <motion.span
            key={index}
            className="itr-char"
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              color: ["#fff", "#38bdf8", "#fff"]
            }}
            transition={{ 
              delay: index * 0.1, 
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      <div className="itr-loading-bar">
        <motion.div 
          className="itr-loading-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>

      <motion.div 
        className="itr-status"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        INITIALIZING CORE PROTOCOLS...
      </motion.div>
    </div>
  );
};

export default Intro;