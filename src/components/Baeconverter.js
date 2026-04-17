import { useState } from "react";

const baseOptions = [
  { value: 2, label: "Binary" },
  { value: 8, label: "Octal" },
  { value: 10, label: "Decimal" },
  { value: 16, label: "Hexadecimal" },
];

const validateValue = (value, base) => {
  if (!value) return false;
  const normalized = value.trim().toUpperCase();
  const patterns = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^\d+$/,
    16: /^[0-9A-F]+$/,
  };
  return patterns[base].test(normalized);
};

const convertBase = (value, fromBase, toBase) => {
  const normalized = value.trim().toUpperCase();
  const decimal = parseInt(normalized, fromBase);
  if (Number.isNaN(decimal)) return "Invalid input";
  return decimal.toString(toBase).toUpperCase();
};

function Baeconverter() {
  const [inputValue, setInputValue] = useState("");
  const [fromBase, setFromBase] = useState(2);
  const [toBase, setToBase] = useState(10);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("Enter value & choose path.");

  const handleConvert = () => {
    if (!validateValue(inputValue, fromBase)) {
      setResult("");
      setStatus(`Error: Invalid ${baseOptions.find((b) => b.value === fromBase).label} input.`);
      return;
    }

    if (fromBase === toBase) {
      setResult(inputValue.trim().toUpperCase());
      setStatus("Base identical; no shift required.");
      return;
    }

    const converted = convertBase(inputValue, fromBase, toBase);
    setResult(converted);
    setStatus(`Converted to ${baseOptions.find((b) => b.value === toBase).label}.`);
  };

  const handleSwap = () => {
    setFromBase(toBase);
    setToBase(fromBase);
    setResult("");
    setStatus("I/O Matrix Swapped.");
  };

  return (
    <div className="conv-v2-container">
      <style>{`
        .conv-v2-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 20px;
          box-sizing: border-box;
          overflow-y: auto;
        }

        .conv-v2-card {
          width: 100%;
          max-width: 650px;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 3px solid var(--accent-color);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .conv-v2-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 15px;
        }

        .conv-v2-header h2 {
          font-family: 'Orbitron';
          font-size: 1.2rem;
          margin: 0;
          color: var(--accent-color);
          letter-spacing: 2px;
        }

        .conv-v2-header p {
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 5px;
        }

        .conv-v2-form {
          display: grid;
          gap: 15px;
        }

        .conv-v2-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .conv-v2-label {
          font-family: 'Fira Code';
          font-size: 0.7rem;
          color: var(--accent-color);
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .conv-v2-input, .conv-v2-select {
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 12px 15px;
          color: #fff;
          font-family: 'Poppins';
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }

        .conv-v2-input:focus {
          border-color: var(--accent-color);
        }

        .conv-v2-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: flex-end;
          gap: 10px;
        }

        .conv-v2-swap {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.7rem;
          transition: all 0.3s;
        }

        .conv-v2-swap:hover {
          background: var(--accent-color);
          color: #000;
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .conv-v2-action {
          background: var(--accent-color);
          color: #000;
          border: none;
          border-radius: 12px;
          padding: 15px;
          font-family: 'Orbitron';
          font-weight: 900;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 1px;
        }

        .conv-v2-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px var(--accent-glow);
        }

        .conv-v2-result-container {
          background: rgba(255,255,255,0.03);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          border: 1px dashed rgba(255,255,255,0.1);
        }

        .conv-v2-result-val {
          font-family: 'Orbitron';
          font-size: 1.5rem;
          color: #fff;
          word-break: break-all;
          margin: 10px 0;
        }

        .conv-v2-status {
          font-family: 'Fira Code';
          font-size: 0.7rem;
          color: #64748b;
        }
      `}</style>

      <div className="conv-v2-card">
        <div className="conv-v2-header">
          <h2>NEURAL BASE CONVERTER</h2>
          <p>Multi-dimensional numerical system transition engine.</p>
        </div>

        <div className="conv-v2-form">
          <div className="conv-v2-group">
            <span className="conv-v2-label">Enter Input String</span>
            <input 
              className="conv-v2-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g. 101010 or FF02..."
            />
          </div>

          <div className="conv-v2-row">
            <div className="conv-v2-group">
              <span className="conv-v2-label">Source</span>
              <select className="conv-v2-select" value={fromBase} onChange={(e) => setFromBase(Number(e.target.value))}>
                {baseOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            
            <button className="conv-v2-swap" onClick={handleSwap}>⇄</button>

            <div className="conv-v2-group">
              <span className="conv-v2-label">Target</span>
              <select className="conv-v2-select" value={toBase} onChange={(e) => setToBase(Number(e.target.value))}>
                {baseOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
          </div>

          <button className="conv-v2-action" onClick={handleConvert}>DEPLOY CONVERSION</button>
        </div>

        <div className="conv-v2-result-container">
          <span className="conv-v2-label">Resultant Matrix</span>
          <div className="conv-v2-result-val">{result || "---"}</div>
          <div className="conv-v2-status">{status}</div>
        </div>
      </div>
    </div>
  );
}

export default Baeconverter;
