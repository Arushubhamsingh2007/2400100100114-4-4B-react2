import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaHistory, FaBackspace, FaPercentage, FaEquals } from "react-icons/fa";

const buttons = [
  ["C", "DEL", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "sqrt", "sq"],
  ["pi", "ANS", "CLR", "="]
];

function evaluateMathExpression(expression) {
  try {
    // Basic evaluation for simplicity in display
    let sanitized = expression.replace(/[^-+/*0-9.]/g, '');
    // eslint-disable-next-line no-eval
    return eval(sanitized);
  } catch {
    return 0;
  }
}

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");
  const [history, setHistory] = useState([]);

  const resetCalculator = useCallback(() => {
    setDisplay("0");
    setFormula("");
  }, []);

  const removeLast = useCallback(() => {
    setFormula(prev => prev.length <= 1 ? "0" : prev.slice(0, -1));
    setDisplay(prev => prev.length <= 1 ? "0" : prev.slice(0, -1));
  }, []);

  const pushInput = useCallback((value) => {
    setFormula(prev => {
      if (prev === "0" && !isNaN(value)) return value;
      return prev + value;
    });
    setDisplay(prev => {
      if (prev === "0" || /[+\-*/]/.test(prev)) return value;
      return prev + value;
    });
  }, []);

  const calculateResult = useCallback(() => {
    if (!formula) return;
    try {
      const result = evaluateMathExpression(formula);
      setHistory(h => [`${formula} = ${result}`, ...h].slice(0, 5));
      setDisplay(String(result));
      setFormula(String(result));
    } catch {
      setDisplay("ERR");
    }
  }, [formula]);

  return (
    <div className="calc-v3-root">
      <style>{`
        .calc-v3-root {
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 80px); /* Fit within viewport */
          overflow: hidden;
        }
        .calc-v3-container {
          width: 100%;
          max-width: 960px;
          display: grid;
          grid-template-columns: 1fr 320px 1fr;
          gap: 20px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .calc-v3-container { grid-template-columns: 1fr; overflow-y: auto; height: 100%; }
          .calc-v3-side { display: none; }
        }
        .calc-v3-main {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 20px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.6);
        }
        .calc-v3-screen {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 20px;
          padding: 15px 20px;
          margin-bottom: 20px;
          text-align: right;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .calc-v3-formula {
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem;
          color: #64748b;
          height: 18px;
          margin-bottom: 2px;
          overflow: hidden;
        }
        .calc-v3-display {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          color: #f1f5f9;
          letter-spacing: 1.5px;
          overflow: hidden;
        }
        .calc-v3-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .calc-v3-btn {
          height: 50px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.03);
          color: #cbd5e1;
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .calc-v3-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }
        .calc-v3-btn-op { color: #22d3ee; background: rgba(34, 211, 238, 0.05); }
        .calc-v3-btn-eq { 
          background: linear-gradient(135deg, #22d3ee, #818cf8); 
          color: white; 
          grid-column: span 1;
        }
        .calc-v3-side {
          padding: 20px;
          background: rgba(255, 255, 255, 0.015);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          height: fit-content;
          max-height: 480px;
          overflow: hidden;
        }
        .calc-v3-side h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.8rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .calc-v3-history-item {
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem;
          color: #64748b;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .formula-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .formula-chip {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #e2e8f0;
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 0.75rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }
        .formula-chip:hover {
          background: rgba(34, 211, 238, 0.2);
          border-color: #22d3ee;
          transform: translateX(4px);
        }
      `}</style>

      <div className="calc-v3-container">
        <div className="calc-v3-side">
          <h3><FaHistory /> Node Log</h3>
          {history.map((h, i) => (
            <div key={i} className="calc-v3-history-item">{h}</div>
          ))}
          {history.length === 0 && <p style={{color: '#475569', fontSize: '0.8rem'}}>Memory empty...</p>}
        </div>

        <motion.div 
          className="calc-v3-main"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="calc-v3-screen">
            <div className="calc-v3-formula">{formula || "0"}</div>
            <div className="calc-v3-display">{display}</div>
          </div>

          <div className="calc-v3-grid">
            {buttons.flat().map((btn) => {
              const isOp = /[+\-*/=C]|DEL|ANS|%]/.test(btn);
              return (
                <motion.button
                  key={btn}
                  className={`calc-v3-btn ${isOp ? 'calc-v3-btn-op' : ''} ${btn === '=' ? 'calc-v3-btn-eq' : ''}`}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => {
                    if (btn === "C") resetCalculator();
                    else if (btn === "CLR") { resetCalculator(); setHistory([]); }
                    else if (btn === "DEL") removeLast();
                    else if (btn === "=") calculateResult();
                    else if (btn === "ANS") setFormula(prev => prev + display);
                    else if (btn === "pi") pushInput(String(Math.PI.toFixed(4)));
                    else if (btn === "sqrt") {
                      const res = Math.sqrt(evaluateMathExpression(formula || display)).toFixed(4);
                      setDisplay(String(res));
                      setFormula(`sqrt(${formula || display})`);
                    }
                    else if (btn === "sq") {
                      const res = Math.pow(evaluateMathExpression(formula || display), 2).toFixed(4);
                      setDisplay(String(res));
                      setFormula(`(${formula || display})²`);
                    }
                    else pushInput(btn);
                  }}
                >
                  {btn === "DEL" ? <FaBackspace /> : btn === "%" ? <FaPercentage /> : btn === "=" ? <FaEquals /> : btn === "sqrt" ? "√" : btn === "sq" ? "x²" : btn === "pi" ? "π" : btn}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div className="calc-v3-side">
          <h3><FaCalculator /> Formula Wizard</h3>
          <div className="formula-list">
            <button className="formula-chip" onClick={() => { setFormula("3.14 * (5^2)"); setDisplay("78.53"); setHistory(h => ["A = πr² (r=5) = 78.53", ...h]); }}>Area: πr²</button>
            <button className="formula-chip" onClick={() => { setFormula("sqrt(3^2 + 4^2)"); setDisplay("5"); setHistory(h => ["c = √(a²+b²) (3,4) = 5", ...h]); }}>Pythagoras</button>
            <button className="formula-chip" onClick={() => { setFormula("10 * 9.8"); setDisplay("98"); setHistory(h => ["F = m*a (10, 9.8) = 98", ...h]); }}>Force: m*a</button>
            <button className="formula-chip" onClick={() => { setFormula("1 * (3*10^8)^2"); setDisplay("9e16"); setHistory(h => ["E = mc² (m=1) = 9e16", ...h]); }}>E = mc²</button>
          </div>
          <div style={{marginTop: '15px', padding: '12px', borderRadius: '12px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', fontSize: '0.75rem', color: '#38bdf8'}}>
            ENGINE: OPTIMIZED
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
