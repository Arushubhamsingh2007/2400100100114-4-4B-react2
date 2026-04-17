import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaSyncAlt } from "react-icons/fa";

function Palindrome() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [isPalin, setIsPalin] = useState(false);

  useEffect(() => {
    if (!text.trim()) {
      setResult(null);
      return;
    }
    const cleanStr = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const rev = cleanStr.split("").reverse().join("");
    
    const matched = cleanStr !== "" && cleanStr === rev;
    setIsPalin(matched);
    setResult(matched ? "Symmetry Detected" : "Asymmetric Sequence");
  }, [text]);

  return (
    <div className="pal-root">
      <style>{`
        .pal-root {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .pal-container {
          width: 100%;
          max-width: 440px;
          background: rgba(10, 15, 30, 0.82);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 30px 25px;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          color: white;
          overflow: hidden;
        }
        .pal-icon {
          font-size: 2.2rem;
          color: #f472b6;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 10px rgba(244, 114, 182, 0.4));
        }
        .pal-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 3px;
          background: linear-gradient(90deg, #f472b6, #fb923c);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .pal-desc {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 25px;
        }
        .pal-input-wrap {
          margin-bottom: 25px;
          position: relative;
        }
        .pal-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 16px 20px;
          color: white;
          font-size: 1.1rem;
          outline: none;
          transition: all 0.3s;
          text-align: center;
          box-sizing: border-box;
        }
        .pal-input:focus {
          border-color: #f472b6;
          box-shadow: 0 0 20px rgba(244, 114, 182, 0.2);
          background: rgba(0, 0, 0, 0.5);
        }
        .pal-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(90deg, #f472b6, #fb923c);
          color: white;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .pal-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(244, 114, 182, 0.4);
        }
        .pal-res-panel {
          margin-top: 35px;
          padding: 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .pal-res-text {
          font-size: 1.2rem;
          font-weight: 700;
          color: ${isPalin ? '#4ade80' : '#f87171'};
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pal-visual {
          margin-top: 15px;
          display: flex;
          justify-content: center;
          gap: 5px;
        }
        .pal-char {
          width: 20px;
          height: 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <motion.div 
        className="pal-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="pal-icon">
          <FaSyncAlt />
        </div>
        
        <h2 className="pal-title">Symmetry Analyzer</h2>
        <p className="pal-desc">Linguistic balance verification module</p>

        <div className="pal-input-wrap">
          <input 
            className="pal-input"
            placeholder="Type sequence..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <AnimatePresence>
          {result && (
            <motion.div 
              className="pal-res-panel"
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="pal-res-text">{result}</div>
              <div className="pal-visual">
                {text.split("").slice(0, 10).map((c, i) => (
                  <motion.div 
                    key={i}
                    className="pal-char"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {c}
                  </motion.div>
                ))}
                {text.length > 10 && <span>...</span>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Palindrome;