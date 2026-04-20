import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFingerprint, FaInfoCircle, FaGem } from "react-icons/fa";

function Narcissistic() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);
  const [calculation, setCalculation] = useState("");

  const checkNarcissistic = (n) => {
    const s = n.toString();
    const len = s.length;
    let sum = 0;
    let calcStr = "";

    for (let i = 0; i < len; i++) {
      const digit = parseInt(s[i]);
      const power = Math.pow(digit, len);
      sum += power;
      calcStr += `${digit}^${len}${i < len - 1 ? " + " : ""}`;
    }

    return { 
      isNarc: sum === parseInt(n), 
      sum, 
      eq: `${calcStr} = ${sum}` 
    };
  };

  React.useEffect(() => {
    if (!num || isNaN(num) || num === "") {
      setResult(null);
      setCalculation("");
      return;
    }

    const data = checkNarcissistic(num);
    setResult(data.isNarc);
    setCalculation(data.eq);
  }, [num]);

  return (
    <div className="narc-shell">
      <style>{`
        .narc-shell {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .narc-box {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 4px solid var(--accent-color);
          border-radius: 30px;
          padding: 40px;
          position: relative;
        }

        .narc-header {
          margin-bottom: 30px;
          text-align: right;
        }

        .narc-title {
          font-family: 'Orbitron';
          font-size: 1.8rem;
          color: #fff;
          letter-spacing: 4px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 15px;
        }

        .narc-instruction {
          background: rgba(255,255,255,0.03);
          border-right: 3px solid var(--accent-color);
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.6;
          text-align: right;
        }

        .narc-input-row {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
        }

        .narc-input {
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 18px 25px;
          color: #fff;
          font-family: 'Orbitron';
          font-size: 1.2rem;
          outline: none;
          text-align: center;
          transition: 0.3s;
        }

        .narc-input:focus { border-color: var(--accent-color); box-shadow: 0 0 20px var(--accent-glow); }

        .narc-btn {
          background: linear-gradient(90deg, var(--accent-color), #a78bfa);
          color: #fff;
          border: none;
          border-radius: 16px;
          padding: 18px;
          font-family: 'Orbitron';
          font-weight: 900;
          cursor: pointer;
          transition: 0.3s;
        }

        .narc-btn:hover { transform: scale(1.02); box-shadow: 0 10px 40px var(--accent-glow); }

        .narc-result-area {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .narc-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          border-radius: 12px;
          font-family: 'Orbitron';
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: 3px;
        }

        .narc-true { background: #10b981; color: #000; box-shadow: 0 0 30px rgba(16, 185, 129, 0.4); }
        .narc-false { background: #475569; color: #fff; opacity: 0.5; }

        .narc-calc-box {
          background: rgba(0,0,0,0.5);
          padding: 15px 25px;
          border-radius: 12px;
          font-family: 'Fira Code';
          font-size: 1.1rem;
          color: var(--accent-color);
          border: 1px dashed rgba(255,255,255,0.1);
        }
      `}</style>

      <motion.div className="narc-box" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="narc-header">
          <h2 className="narc-title">NARCISSISTIC PROCOCOL <FaFingerprint /></h2>
          <div className="narc-instruction">
            <FaInfoCircle style={{ marginLeft: '10px' }} />
            <strong>DEFINITION:</strong> A Narcissistic Number (Armstrong) is a number that is the sum of its own digits each raised to the power of the number of digits.
          </div>
        </div>

        <div className="narc-input-row">
          <input 
            className="narc-input"
            type="number"
            placeholder="HEX-CORE INPUT..."
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>

        <AnimatePresence>
          {result !== null && (
            <motion.div className="narc-result-area" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className={`narc-badge ${result ? 'narc-true' : 'narc-false'}`}>
                {result ? <><FaGem /> ARMSTRONG DETECTED</> : "SYSTEM REJECTED"}
              </div>

              <motion.div className="narc-calc-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                {calculation}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Narcissistic;
