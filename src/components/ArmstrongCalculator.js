import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalculator, FaMicrochip, FaHashtag } from "react-icons/fa";

function ArmstrongCalculator() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);
  const [isArmstrong, setIsArmstrong] = useState(false);

  function check() {
    if (!num) return;
    let n = parseInt(num);
    let temp = n;
    let sum = 0;
    const digits = num.length;

    while (temp > 0) {
      let r = temp % 10;
      sum += Math.pow(r, digits);
      temp = Math.floor(temp / 10);
    }

    const isArm = sum === parseInt(num);
    setIsArmstrong(isArm);
    setResult(isArm ? "✅ High Intelligence Match!" : "❌ Logic Discrepancy Found");
  }

  return (
    <div className="arm-root">
      <style>{`
        .arm-root {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .arm-container {
          width: 100%;
          max-width: 440px;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 24px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 242, 254, 0.1);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .arm-container::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 242, 254, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .arm-header {
          margin-bottom: 30px;
        }
        .arm-icon-box {
          width: 70px;
          height: 70px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          color: #00f2fe;
          font-size: 1.8rem;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
        }
        .arm-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          margin: 0;
          letter-spacing: 2px;
          background: linear-gradient(90deg, #00f2fe, #8b5cf6);
          -webkit-background-clip: text;
          color: transparent;
        }
        .arm-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-top: 10px;
        }
        .arm-input-group {
          position: relative;
          margin-bottom: 25px;
        }
        .arm-input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
        }
        .arm-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 15px 15px 15px 45px;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .arm-input:focus {
          border-color: #00f2fe;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
          background: rgba(0, 0, 0, 0.5);
        }
        .arm-btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #00f2fe, #0072ff);
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .arm-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 242, 254, 0.4);
        }
        .arm-btn:active {
          transform: scale(0.98);
        }
        .arm-result-panel {
          margin-top: 30px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .arm-result-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #f1f5f9;
        }
        .arm-math {
          margin-top: 10px;
          font-family: 'Fira Code', monospace;
          color: #00f2fe;
          font-size: 0.85rem;
        }
      `}</style>

      <motion.div 
        className="arm-container"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="arm-header">
          <div className="arm-icon-box">
            <FaCalculator />
          </div>
          <h2 className="arm-title">Armstrong Checker</h2>
          <p className="arm-desc">Cybernetic numerical validation module</p>
        </div>

        <div className="arm-input-group">
          <FaHashtag className="arm-input-icon" />
          <input
            type="number"
            className="arm-input"
            placeholder="Enter sequence..."
            value={num}
            onChange={(e) => setNum(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && check()}
          />
        </div>

        <motion.button 
          className="arm-btn"
          onClick={check}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaMicrochip /> Execute Analysis
        </motion.button>

        <AnimatePresence>
          {result && (
            <motion.div 
              className="arm-result-panel"
              initial={{ opacity: 0, height: 0, y: 10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
            >
              <div className="arm-result-text">{result}</div>
              {isArmstrong && (
                <p className="arm-math">
                  Verified: The sum of digits powered by total count equals self.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ArmstrongCalculator;