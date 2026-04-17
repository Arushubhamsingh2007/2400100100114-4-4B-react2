import { useState } from "react";

function Queue() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("Enter a value and push it into the queue.");

  const pushItem = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      setStatus("Type a value before pushing.");
      return;
    }
    setQueue((prev) => [...prev, { id: Date.now(), label: trimmed }]);
    setInputValue("");
    setStatus(`Pushed '${trimmed}' at the tail.`);
  };

  const popItem = () => {
    if (!queue.length) {
      setStatus("Queue is empty. Nothing to pop.");
      return;
    }
    const [head, ...rest] = queue;
    setQueue(rest);
    setStatus(`Popped '${head.label}' from the head.`);
  };

  return (
    <div className="queue-shell">
      <div className="queue-card">
        <div className="queue-header">
          <div>
            <span className="queue-tag">FIFO Queue</span>
            <h1>Queue Visualization</h1>
          </div>
          <p className="queue-description">
            Push new values to the tail and pop from the head. This queue follows first-in, first-out order with a glowing graphical display.
          </p>
        </div>

        <div className="queue-controls">
          <label className="queue-label">Item to enqueue</label>
          <div className="queue-input-row">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a queue item"
            />
            <button className="queue-action push" onClick={pushItem}>
              Push
            </button>
            <button className="queue-action pop" onClick={popItem}>
              Pop
            </button>
          </div>
          <p className="queue-status">{status}</p>
        </div>

        <div className="queue-display-wrap">
          <div className="queue-track">
            {queue.length === 0 ? (
              <div className="queue-empty">Queue is empty</div>
            ) : (
              queue.map((item, index) => (
                <div key={item.id} className="queue-item" style={{ animationDelay: `${index * 60}ms` }}>
                  <div className="queue-item-badge">{index === 0 ? "HEAD" : index === queue.length - 1 ? "TAIL" : ""}</div>
                  <span>{item.label}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        .queue-shell {
          display: flex;
          justify-content: center;
          padding: 15px;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .queue-card {
          width: 100%;
          max-width: 800px;
          padding: 24px;
          border-radius: 28px;
          background: rgba(10, 18, 34, 0.95);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 34px 90px rgba(0,0,0,0.32);
          backdrop-filter: blur(20px);
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .queue-card::before {
          content: "";
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(59,130,246,0.12);
          filter: blur(24px);
        }

        .queue-card::after {
          content: "";
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(236,72,153,0.12);
          filter: blur(20px);
        }

        .queue-header {
          position: relative;
          z-index: 1;
          margin-bottom: 20px;
        }

        .queue-tag {
          display: inline-flex;
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(14,165,233,0.16);
          color: #7dd3fc;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .queue-header h1 {
          margin: 10px 0 5px;
          font-size: 1.5rem;
          color: #f8fafc;
          letter-spacing: 0.03em;
        }

        .queue-description {
          margin: 0;
          max-width: 760px;
          line-height: 1.4;
          color: rgba(226,232,240,0.88);
          font-size: 0.8rem;
        }

        .queue-controls {
          position: relative;
          z-index: 1;
          margin-bottom: 25px;
          flex-shrink: 0;
        }

        .queue-label {
          display: block;
          margin-bottom: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .queue-input-row {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 14px;
          align-items: center;
        }

        .queue-input-row input {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(15,23,42,0.92);
          color: #f8fafc;
          padding: 15px 18px;
          font-size: 1rem;
          outline: none;
        }

        .queue-input-row input::placeholder {
          color: rgba(148,163,184,0.6);
        }

        .queue-action {
          min-width: 110px;
          height: 52px;
          border: none;
          border-radius: 18px;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .queue-action:hover {
          transform: translateY(-2px);
        }

        .queue-action.push {
          background: linear-gradient(135deg, #22d3ee, #818cf8);
          box-shadow: 0 16px 30px rgba(34,211,238,0.27);
        }

        .queue-action.pop {
          background: linear-gradient(135deg, #fb7185, #f97316);
          box-shadow: 0 16px 30px rgba(251,113,133,0.26);
        }

        .queue-status {
          margin-top: 16px;
          color: rgba(226,232,240,0.84);
          font-size: 0.96rem;
          line-height: 1.7;
        }

        .queue-display-wrap {
          position: relative;
          padding: 20px;
          border-radius: 20px;
          background: rgba(15,23,42,0.85);
          border: 1px solid rgba(255,255,255,0.08);
          flex: 1;
          overflow-y: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .queue-track {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-start;
          min-height: 350px;
          align-items: flex-start;
          position: relative;
        }

        .queue-track::before {
          content: "";
          position: absolute;
          left: 24px;
          right: 24px;
          top: 50%;
          height: 2px;
          background: linear-gradient(90deg, rgba(56,189,248,0.28), rgba(236,72,153,0.28));
          z-index: 0;
        }

        .queue-empty {
          z-index: 1;
          color: rgba(226,232,240,0.72);
          padding: 20px 18px;
          border-radius: 18px;
          border: 1px dashed rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.03);
        }

        .queue-item {
          position: relative;
          z-index: 1;
          min-width: 100px;
          flex: 0 1 auto;
          padding: 10px 15px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.96));
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 10px 20px rgba(0,0,0,0.22);
          color: #f8fafc;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          overflow: hidden;
          animation: queue-pop 0.35s ease forwards;
        }

        .queue-item-badge {
          min-width: 70px;
          padding: 8px 12px;
          border-radius: 999px;
          text-align: center;
          color: #e2e8f0;
          font-weight: 700;
          font-size: 0.78rem;
          background: rgba(59,130,246,0.18);
        }

        .queue-item span {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.01em;
        }

        @keyframes queue-pop {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 760px) {
          .queue-input-row {
            grid-template-columns: 1fr;
          }
          .queue-action {
            width: 100%;
          }
          .queue-track {
            min-height: 180px;
          }
          .queue-item {
            min-width: 100%;
          }
          .queue-track::before {
            left: 12px;
            right: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default Queue;
