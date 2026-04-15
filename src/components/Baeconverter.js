import React, { useState } from "react";

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
  const [status, setStatus] = useState("Enter a value and choose a conversion path.");

  const handleConvert = () => {
    if (!validateValue(inputValue, fromBase)) {
      setResult("");
      setStatus(`Invalid ${baseOptions.find((b) => b.value === fromBase).label} value.`);
      return;
    }

    if (fromBase === toBase) {
      setResult(inputValue.trim().toUpperCase());
      setStatus("Same base selected; value is unchanged.");
      return;
    }

    const converted = convertBase(inputValue, fromBase, toBase);
    setResult(converted);
    setStatus(`Converted from ${baseOptions.find((b) => b.value === fromBase).label} to ${baseOptions.find((b) => b.value === toBase).label}.`);
  };

  const handleSwap = () => {
    setFromBase(toBase);
    setToBase(fromBase);
    setResult("");
    setStatus("Swap complete. Update the value and convert again.");
  };

  return (
    <div className="convert-shell">
      <div className="convert-card">
        <div className="convert-header">
          <div>
            <span className="convert-tag">Base Converter</span>
            <h1>Binary, Octal, Decimal & Hex</h1>
          </div>
          <p className="convert-description">
            Enter a number in any supported base and convert it instantly to another base. The converter validates input and displays the result with a premium animated UI.
          </p>
        </div>

        <div className="convert-panel">
          <div className="convert-field">
            <label>Input value</label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter binary, octal, decimal or hex"
            />
          </div>

          <div className="convert-field split">
            <div>
              <label>From base</label>
              <select value={fromBase} onChange={(e) => setFromBase(Number(e.target.value))}>
                {baseOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <button className="convert-swap" onClick={handleSwap}>
              Swap
            </button>
            <div>
              <label>To base</label>
              <select value={toBase} onChange={(e) => setToBase(Number(e.target.value))}>
                {baseOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="convert-button" onClick={handleConvert}>
            Convert Now
          </button>

          <div className="convert-output">
            <div className="convert-output-card">
              <span className="convert-output-label">Result</span>
              <p>{result || "-"}</p>
            </div>
            <p className="convert-status">{status}</p>
          </div>

          <div className="convert-tips">
            <div className="convert-tip">
              <strong>Binary</strong> uses only 0 and 1.
            </div>
            <div className="convert-tip">
              <strong>Octal</strong> uses digits 0–7.
            </div>
            <div className="convert-tip">
              <strong>Hex</strong> uses 0–9 and A–F.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .convert-shell {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 48px 16px 72px;
          background: radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 24%),
            radial-gradient(circle at bottom right, rgba(236,72,153,0.16), transparent 26%),
            linear-gradient(180deg, #020617, #08101f);
          box-sizing: border-box;
        }

        .convert-card {
          width: min(940px, 100%);
          background: rgba(8, 16, 34, 0.96);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 34px;
          padding: 38px;
          box-shadow: 0 40px 120px rgba(0,0,0,0.35);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .convert-card::before {
          content: "";
          position: absolute;
          top: -64px;
          right: -74px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: rgba(59,130,246,0.12);
          filter: blur(28px);
        }

        .convert-card::after {
          content: "";
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(236,72,153,0.14);
          filter: blur(24px);
        }

        .convert-header {
          position: relative;
          z-index: 1;
          margin-bottom: 28px;
        }

        .convert-tag {
          display: inline-flex;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(59,130,246,0.14);
          color: #7dd3fc;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .convert-header h1 {
          margin: 18px 0 10px;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #f8fafc;
          letter-spacing: 0.04em;
        }

        .convert-description {
          margin: 0;
          max-width: 760px;
          font-size: 1rem;
          color: rgba(226,232,240,0.88);
          line-height: 1.8;
        }

        .convert-panel {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 22px;
        }

        .convert-field {
          display: grid;
          gap: 10px;
        }

        .convert-field.split {
          grid-template-columns: 1fr auto 1fr;
          align-items: end;
        }

        .convert-field label {
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .convert-field input,
        .convert-field select {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(15,23,42,0.92);
          color: #f8fafc;
          padding: 16px 18px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .convert-field input:focus,
        .convert-field select:focus {
          border-color: rgba(59,130,246,0.65);
          transform: translateY(-1px);
        }

        .convert-swap {
          margin: 0 10px;
          min-width: 72px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #a855f7, #3b82f6);
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          height: 52px;
          box-shadow: 0 16px 30px rgba(59,130,246,0.22);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .convert-swap:hover {
          transform: translateY(-2px);
        }

        .convert-button {
          border: none;
          border-radius: 18px;
          padding: 16px 24px;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #22d3ee, #818cf8);
          box-shadow: 0 20px 50px rgba(34,211,238,0.2);
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .convert-button:hover {
          transform: translateY(-2px);
        }

        .convert-output {
          display: grid;
          gap: 16px;
        }

        .convert-output-card {
          padding: 24px;
          border-radius: 26px;
          background: rgba(15,23,42,0.9);
          border: 1px solid rgba(56,189,248,0.12);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.03);
        }

        .convert-output-label {
          display: inline-flex;
          margin-bottom: 10px;
          color: #93c5fd;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          font-weight: 700;
        }

        .convert-output-card p {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: #f8fafc;
          word-break: break-all;
        }

        .convert-status {
          margin: 0;
          color: rgba(226,232,240,0.82);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .convert-tips {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 2px;
        }

        .convert-tip {
          padding: 18px 16px;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .convert-tip strong {
          color: #f8fafc;
        }

        @media (max-width: 820px) {
          .convert-field.split {
            grid-template-columns: 1fr;
          }

          .convert-swap {
            width: 100%;
            margin: 10px 0;
          }

          .convert-tips {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Baeconverter;
