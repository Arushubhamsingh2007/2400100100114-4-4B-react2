import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Game3() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { setRunning(false); setFinished(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [running]);

  const tap = () => { if (running) setScore(s => s + 1); };

  return (
    <div className="tap-wrap">
      <style>{`
        .tap-wrap { display: flex; flex-direction: column; align-items: center; color: white; }
        .tap-timer { font-family: 'Orbitron'; font-size: 2.5rem; color: #fb923c; margin-bottom: 30px; }
        .tap-circle {
          width: 220px; height: 220px;
          border-radius: 50%;
          border: 4px solid #fb923c;
          background: rgba(251, 146, 60, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-family: 'Orbitron';
          font-size: 1.5rem;
          user-select: none;
          position: relative;
          box-shadow: 0 0 30px rgba(251, 146, 60, 0.2);
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .tap-circle:active { transform: scale(0.92); box-shadow: 0 0 50px rgba(251, 146, 60, 0.4); }
        .tap-circle::after {
          content: ""; position: absolute; inset: -15px; border-radius: 50%; border: 1px dashed rgba(251, 146, 60, 0.4);
          animation: tap-spin 10s linear infinite;
        }
        @keyframes tap-spin { to { transform: rotate(360deg); } }
        .tap-score { margin-top: 40px; font-family: 'Orbitron'; font-size: 1.2rem; color: #94a3b8; }
        .tap-score strong { color: white; font-size: 2rem; margin-left: 10px; }
        .tap-btn { margin-top: 30px; padding: 12px 35px; border-radius: 30px; border: none; background: #fb923c; color: white; font-weight: 700; cursor: pointer; }
      `}</style>

      <div className="tap-timer">{timeLeft}s</div>

      <motion.div 
        className="tap-circle"
        onClick={tap}
        whileTap={{ scale: 0.9 }}
      >
        {running ? "TAP!" : finished ? "DONE" : "READY"}
      </motion.div>

      <div className="tap-score">CPS: <strong>{(score/10).toFixed(1)}</strong> | TOTAL: <strong>{score}</strong></div>

      {!running && (
        <button className="tap-btn" onClick={() => { setScore(0); setTimeLeft(10); setFinished(false); setRunning(true); }}>
          {finished ? "RE-ENGAGE" : "START SEQUENCE"}
        </button>
      )}
    </div>
  );
}
export default Game3;
