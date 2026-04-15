import React, { useState } from "react";

function Stack() {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("Enter a number and push it to the stack.");
  const [animating, setAnimating] = useState(false);

  const pushItem = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      setMessage("Please enter a valid number before pushing.");
      return;
    }

    const newItem = { id: Date.now(), label: trimmed, status: "entering" };
    setStack((prev) => [newItem, ...prev.map((item) => ({ ...item, status: "normal" }))]);
    setValue("");
    setAnimating(true);
    setMessage(`Adding ${trimmed} to the top of the stack...`);

    window.setTimeout(() => {
      setStack((prev) =>
        prev.map((item) => (item.id === newItem.id ? { ...item, status: "normal" } : item))
      );
      setAnimating(false);
      setMessage(`Pushed '${trimmed}' to the stack.`);
    }, 380);
  };

  const popItem = () => {
    if (!stack.length) {
      setMessage("Stack is empty. Nothing to pop.");
      return;
    }

    if (animating) {
      setMessage("Wait a moment for the current animation to finish.");
      return;
    }

    const topItem = stack[0];
    setStack((prev) => prev.map((item, index) => (index === 0 ? { ...item, status: "removing" } : item)));
    setAnimating(true);
    setMessage(`Removing ${topItem.label} from the top...`);

    window.setTimeout(() => {
      setStack((prev) => prev.filter((item) => item.status !== "removing"));
      setAnimating(false);
      setMessage(`Popped '${topItem.label}' from the stack.`);
    }, 360);
  };

  return (
    <div className="stack-shell">
      <div className="stack-card">
        <div className="stack-header">
          <div>
            <span className="stack-tag">Data Structure</span>
            <h1>Stack (LIFO)</h1>
          </div>
          <p className="stack-description">
            Push values on top, then pop them in reverse order. This stack visualization shows the latest element at the top and updates in real time.
          </p>
        </div>

        <div className="stack-actions">
          <label className="stack-input-label">Value to push</label>
          <div className="stack-input-row">
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter a number"
              disabled={animating}
            />
            <button className="stack-btn push" onClick={pushItem} disabled={animating}>
              Push
            </button>
            <button className="stack-btn pop" onClick={popItem} disabled={animating}>
              Pop
            </button>
          </div>
          <p className="stack-message">{message}</p>
        </div>

        <div className="stack-visual-wrap">
          <div className="stack-axis" />
          <div className="stack-visual">
            {stack.length === 0 ? (
              <div className="stack-empty">Stack is empty</div>
            ) : (
              stack.map((item, index) => (
                <div key={item.id} className={`stack-node ${item.status || "normal"}`}>
                  {index === 0 && <span className="stack-node-head">TOP</span>}
                  <span className="stack-node-label">{item.label}</span>
                  <span className="stack-node-index">{stack.length - index}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        .stack-shell {
          display: flex;
          justify-content: center;
          padding: 40px 16px 60px;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .stack-card {
          width: min(840px, 100%);
          background: rgba(10, 18, 34, 0.92);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 32px;
          padding: 32px;
          box-shadow: 0 28px 90px rgba(0,0,0,0.35);
          backdrop-filter: blur(18px);
          color: #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .stack-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(56,189,248,0.14), transparent 22%),
            radial-gradient(circle at bottom right, rgba(236,72,153,0.12), transparent 20%);
          pointer-events: none;
        }

        .stack-header {
          position: relative;
          z-index: 1;
          margin-bottom: 28px;
        }

        .stack-tag {
          display: inline-flex;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(56,189,248,0.16);
          color: #bef264;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .stack-header h1 {
          margin: 18px 0 10px;
          font-size: clamp(2rem, 3.5vw, 3rem);
          letter-spacing: 0.06em;
          color: #ffffff;
        }

        .stack-description {
          margin: 0;
          max-width: 700px;
          line-height: 1.8;
          color: rgba(226,232,240,0.9);
        }

        .stack-actions {
          position: relative;
          z-index: 1;
          margin-bottom: 32px;
        }

        .stack-input-label {
          display: block;
          margin-bottom: 12px;
          color: #94a3b8;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.82rem;
        }

        .stack-input-row {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 14px;
          align-items: center;
        }

        .stack-input-row input {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(15,23,42,0.88);
          color: #f8fafc;
          padding: 14px 16px;
          border-radius: 16px;
          font-size: 1rem;
          outline: none;
        }

        .stack-input-row input::placeholder {
          color: rgba(226,232,240,0.5);
        }

        .stack-btn {
          border: none;
          min-width: 110px;
          height: 52px;
          border-radius: 18px;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
        }

        .stack-btn:hover {
          transform: translateY(-2px);
        }

        .stack-btn.push {
          background: linear-gradient(135deg, #38bdf8, #6366f1);
          box-shadow: 0 18px 30px rgba(56,189,248,0.25);
        }

        .stack-btn.pop {
          background: linear-gradient(135deg, #f97316, #ef4444);
          box-shadow: 0 18px 30px rgba(248,113,113,0.25);
        }

        .stack-message {
          margin-top: 16px;
          font-size: 0.96rem;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .stack-visual-wrap {
          position: relative;
          padding: 24px;
          background: rgba(15,23,42,0.78);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.03);
        }

        .stack-axis {
          position: absolute;
          left: 50%;
          top: 20px;
          bottom: 20px;
          width: 4px;
          background: linear-gradient(180deg, rgba(56,189,248,0.85), rgba(236,72,153,0.35));
          transform: translateX(-50%);
          border-radius: 999px;
        }

        .stack-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          min-height: 360px;
          justify-content: center;
        }

        .stack-empty {
          color: rgba(226,232,240,0.72);
          padding: 22px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px dashed rgba(255,255,255,0.12);
        }

        .stack-node {
          width: 260px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.14);
          background: linear-gradient(135deg, rgba(15,23,42,0.94), rgba(30,41,59,0.96));
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
          color: #f8fafc;
          transform: translateY(20px);
          opacity: 0;
          animation: slide-up 0.35s forwards;
          position: relative;
          overflow: hidden;
        }

        .stack-node.normal {
          animation: slide-up 0.35s forwards;
        }

        .stack-node.entering {
          animation: push-in 0.4s ease forwards;
          background: linear-gradient(135deg, rgba(56,189,248,0.95), rgba(99,102,241,0.92));
          box-shadow: 0 22px 46px rgba(56,189,248,0.28);
        }

        .stack-node.removing {
          animation: pop-out 0.35s ease forwards;
          background: linear-gradient(135deg, rgba(248,113,113,0.95), rgba(241,145,42,0.92));
          border-color: rgba(248,113,113,0.35);
        }

        .stack-node-head {
          position: absolute;
          top: 12px;
          right: 14px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(56,189,248,0.18);
          color: #7dd3fc;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .stack-node-label {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .stack-node-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,0.3), rgba(15,23,42,0.8));
          color: #dbeafe;
          font-size: 0.95rem;
          font-weight: 700;
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes push-in {
          from {
            transform: translateY(-120px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pop-out {
          to {
            transform: translateX(100px) rotate(6deg);
            opacity: 0;
          }
        }

        @media (max-width: 780px) {
          .stack-card {
            padding: 24px;
          }
          .stack-input-row {
            grid-template-columns: 1fr;
          }
          .stack-btn {
            width: 100%;
          }
          .stack-node,
          .stack-empty {
            width: 100%;
          }
          .stack-axis {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Stack;
