import React from "react";
import { FaPalette, FaFont, FaCheckCircle } from "react-icons/fa";

function SettingsPanel() {
  function changeTheme() {
    document.body.classList.toggle("light-mode-override");
  }

  function increaseFontSize() {
    const currentSize = window.getComputedStyle(document.body).fontSize;
    const newSize = parseFloat(currentSize) + 2;
    document.body.style.fontSize = `${newSize}px`;
  }

  return (
    <div className="sp-root">
      <style>{`
        .sp-root {
          width: 240px;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }
        .sp-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          display: block;
        }
        .sp-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sp-btn {
          width: 100%;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          color: #cbd5e1;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .sp-btn:hover {
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
        }
        .sp-btn-icon {
          font-size: 1rem;
        }
      `}</style>

      <span className="sp-title">Neural Config</span>
      
      <div className="sp-list">
        <button className="sp-btn" onClick={changeTheme}>
          <FaPalette className="sp-btn-icon" />
          <span>Toggle Polarity</span>
        </button>

        <button className="sp-btn" onClick={increaseFontSize}>
          <FaFont className="sp-btn-icon" />
          <span>Expand Ops</span>
        </button>

        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.65rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaCheckCircle color="#22c55e" />
          <span>CORE SYSTEMS SYNCED</span>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;