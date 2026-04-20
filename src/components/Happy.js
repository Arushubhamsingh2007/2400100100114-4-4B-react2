import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSmile, FaSkull, FaInfoCircle } from "react-icons/fa";

function Happy() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);
  const [sequence, setSequence] = useState([]);

  const checkHappy = (n) => {
    let current = parseInt(n);
    const seen = new Set();
    const steps = [];

    while (current !== 1 && !seen.has(current)) {
      seen.add(current);
      steps.push(current);
      let sum = 0;
      let temp = current;
      while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit;
        temp = Math.floor(temp / 10);
      }
      current = sum;
    }
    
    steps.push(current);
    return { isHappy: current === 1, steps };
  };

  React.useEffect(() => {
    if (!num || isNaN(num)) {
      setResult(null);
      setSequence([]);
      return;
    }

    const { isHappy, steps } = checkHappy(num);
    setResult(isHappy);
    setSequence(steps);
  }, [num]);

  return (
    <div className="happy-shell">
      <style>{`
        .happy-shell {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .happy-box {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 4px solid var(--accent-color);
          border-radius: 30px;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        .happy-header {
          margin-bottom: 30px;
          text-align: center;
        }

        .happy-title {
          font-family: 'Orbitron';
          font-size: 1.8rem;
          color: #fff;
          letter-spacing: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .happy-instruction {
          background: rgba(var(--accent-color-rgb), 0.05);
          border-left: 3px solid var(--accent-color);
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .happy-input-row {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .happy-input {
          flex: 1;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 18px 25px;
          color: #fff;
          font-family: 'Orbitron';
          font-size: 1.2rem;
          outline: none;
          transition: 0.3s;
        }

        .happy-input:focus { border-color: var(--accent-color); box-shadow: 0 0 20px var(--accent-glow); }

        .happy-btn {
          background: var(--accent-color);
          color: #000;
          border: none;
          border-radius: 16px;
          padding: 0 30px;
          font-family: 'Orbitron';
          font-weight: 900;
          cursor: pointer;
          transition: 0.3s;
        }

        .happy-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px var(--accent-glow); }

        .happy-result-area {
          margin-top: 40px;
          text-align: center;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 999px;
          font-family: 'Orbitron';
          font-weight: 900;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .happy-true { background: rgba(34, 211, 238, 0.2); color: #22d3ee; border: 1px solid #22d3ee; }
        .happy-false { background: rgba(244, 63, 94, 0.2); color: #f43f5e; border: 1px solid #f43f5e; }

        .sequence-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .seq-node {
          padding: 8px 15px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          font-family: 'Fira Code';
          font-size: 0.8rem;
          color: #fff;
        }

        .seq-arrow { color: var(--accent-color); opacity: 0.5; align-self: center; }
      `}</style>
      
      <motion.div className="happy-box" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="happy-header">
          <h2 className="happy-title"><FaSmile /> HAPPY NUMBER SCANNER</h2>
          <div className="happy-instruction">
            <FaInfoCircle style={{ marginRight: '10px' }} />
            <strong>PROTOCOL:</strong> A Happy Number is defined by a process where you replace the number with the sum of the squares of its digits. If the process repeats until it reaches <strong>1</strong>, the number is Classified as <strong>HAPPY</strong>.
          </div>
        </div>

        <div className="happy-input-row" style={{ justifyContent: 'center' }}>
          <input 
            className="happy-input"
            type="number"
            style={{ textAlign: 'center' }}
            placeholder="INPUT NUMERICAL DATA..."
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>

        <AnimatePresence>
          {result !== null && (
            <motion.div className="happy-result-area" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
              <div className={`status-badge ${result ? 'happy-true' : 'happy-false'}`}>
                {result ? <><FaSmile /> IDENTITY: HAPPY</> : <><FaSkull /> IDENTITY: UNHAPPY</>}
              </div>

              <div className="sequence-grid">
                {sequence.map((s, i) => (
                  <React.Fragment key={i}>
                    <motion.div 
                      className="seq-node"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {s}
                    </motion.div>
                    {i < sequence.length - 1 && <span className="seq-arrow">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Happy;
