import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaRedo, FaCogs } from "react-icons/fa";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="cnt-root">
      <style>{`
        .cnt-root {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .cnt-container {
          width: 100%;
          max-width: 420px;
          background: rgba(10, 15, 30, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 30px;
          padding: 45px 30px;
          text-align: center;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(139, 92, 246, 0.1);
          color: white;
          overflow: hidden;
          position: relative;
        }
        .cnt-bg-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          z-index: 0;
        }
        .cnt-header {
          position: relative;
          z-index: 1;
          margin-bottom: 30px;
        }
        .cnt-icon-circle {
          width: 64px;
          height: 64px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          color: #a78bfa;
          font-size: 1.5rem;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        .cnt-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          margin: 0;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 3px;
        }
        .cnt-display {
          margin: 40px 0;
          position: relative;
          z-index: 1;
        }
        .cnt-number {
          font-size: 6rem;
          font-weight: 900;
          font-family: 'Orbitron', sans-serif;
          margin: 0;
          line-height: 1;
          background: linear-gradient(135deg, #fff, #a78bfa);
          -webkit-background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
        }
        .cnt-controls {
          display: flex;
          gap: 20px;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .cnt-btn {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .cnt-btn:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: #a78bfa;
          color: #a78bfa;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .cnt-btn.plus:hover {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .cnt-btn.reset {
          margin-top: 25px;
          width: 50px;
          height: 50px;
          font-size: 1rem;
          opacity: 0.6;
        }
        .cnt-btn.reset:hover {
          opacity: 1;
          background: rgba(244, 114, 182, 0.2);
          border-color: #f472b6;
          color: #f472b6;
          transform: rotate(180deg);
        }
      `}</style>

      <motion.div 
        className="cnt-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="cnt-bg-glow"></div>
        
        <div className="cnt-header">
          <div className="cnt-icon-circle">
            <FaCogs />
          </div>
          <h2 className="cnt-title">System Pulse</h2>
        </div>

        <div className="cnt-display">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={count}
              className="cnt-number"
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.5, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {count}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="cnt-controls">
          <motion.button 
            className="cnt-btn minus"
            whileTap={{ scale: 0.8 }}
            onClick={() => setCount(count - 1)}
          >
            <FaMinus />
          </motion.button>
          
          <motion.button 
            className="cnt-btn plus"
            whileTap={{ scale: 0.8 }}
            onClick={() => setCount(count + 1)}
          >
            <FaPlus />
          </motion.button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.button 
            className="cnt-btn reset"
            whileTap={{ scale: 0.8 }}
            onClick={() => setCount(0)}
            title="Reset Counter"
          >
            <FaRedo />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Counter;
