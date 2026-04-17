import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaStopwatch, FaUndo } from "react-icons/fa";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (isActive) return;
    setIsActive(true);
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 10); // Using ms for smoother display
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setIsActive(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="sw-root">
      <style>{`
        .sw-root {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .sw-container {
          width: 100%;
          max-width: 440px;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 32px;
          padding: 50px 30px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(0, 242, 254, 0.05);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .sw-glow-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 320px;
          height: 320px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid rgba(0, 242, 254, 0.1);
          box-shadow: 0 0 30px rgba(0, 242, 254, 0.05);
          pointer-events: none;
        }
        .sw-icon-header {
          font-size: 2.2rem;
          color: #00f2fe;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 10px rgba(0, 242, 254, 0.4));
        }
        .sw-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 4px;
          color: #94a3b8;
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .sw-display-box {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px 10px;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }
        .sw-time {
          font-size: 4rem;
          font-family: 'Fira Code', monospace;
          font-weight: 700;
          color: #00f2fe;
          text-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
          letter-spacing: -2px;
        }
        .sw-controls {
          display: flex;
          justify-content: center;
          gap: 20px;
          position: relative;
          z-index: 1;
        }
        .sw-btn {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 1.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .sw-btn:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        .sw-btn.start {
          background: rgba(56, 189, 248, 0.15);
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .sw-btn.start:hover {
          background: #38bdf8;
          color: #000;
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
        }
        .sw-btn.stop {
          background: rgba(244, 114, 182, 0.15);
          border-color: #f472b6;
          color: #f472b6;
        }
        .sw-btn.stop:hover {
          background: #f472b6;
          color: #000;
          box-shadow: 0 0 30px rgba(244, 114, 182, 0.5);
        }
        .sw-btn.reset {
          background: rgba(139, 92, 246, 0.1);
          border-color: #a78bfa;
          color: #a78bfa;
        }
        .sw-btn.reset:hover {
          background: #a78bfa;
          color: #000;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }
        .sw-pulsar {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #00f2fe;
          border-radius: 50%;
          top: 20px;
          right: 20px;
          box-shadow: 0 0 10px #00f2fe;
          animation: sw-pulse 1.5s infinite;
          opacity: ${isActive ? 1 : 0.3};
        }
        @keyframes sw-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>

      <motion.div 
        className="sw-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sw-glow-ring"></div>
        <div className="sw-pulsar"></div>
        
        <div className="sw-icon-header">
          <FaStopwatch />
        </div>
        
        <h2 className="sw-title">Chronos Module</h2>

        <div className="sw-display-box">
          <div className="sw-time">{formatTime(time)}</div>
        </div>

        <div className="sw-controls">
          {!isActive ? (
            <motion.button 
              className="sw-btn start"
              whileTap={{ scale: 0.9 }}
              onClick={startTimer}
            >
              <FaPlay />
            </motion.button>
          ) : (
            <motion.button 
              className="sw-btn stop"
              whileTap={{ scale: 0.9 }}
              onClick={stopTimer}
            >
              <FaPause />
            </motion.button>
          )}

          <motion.button 
            className="sw-btn reset"
            whileTap={{ scale: 0.9 }}
            onClick={resetTimer}
          >
            <FaUndo />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Stopwatch;