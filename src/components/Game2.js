import { useState } from "react";

const ARENA_SIZE = 12;

function Game2() {
  const [target, setTarget] = useState({ x: 5, y: 5 });
  const [score, setScore] = useState(0);
  const [shots, setShots] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [active, setActive] = useState(false);

  const spawn = () => ({
    x: Math.floor(Math.random() * ARENA_SIZE),
    y: Math.floor(Math.random() * ARENA_SIZE)
  });

  const hit = (x, y) => {
    if (!active || gameOver) return;
    if (x === target.x && y === target.y) {
      setScore(s => s + 20);
      setTarget(spawn());
    } else {
      setShots(s => {
        if (s <= 1) setGameOver(true);
        return s - 1;
      });
    }
  };

  return (
    <div className="blz-wrap">
      <style>{`
        .blz-wrap { display: flex; flex-direction: column; align-items: center; color: white; }
        .blz-stats { display: flex; gap: 40px; margin-bottom: 25px; font-family: 'Orbitron'; }
        .blz-stat-box { text-align: center; }
        .blz-stat-box span { display: block; font-size: 0.7rem; color: #94a3b8; margin-bottom: 5px; }
        .blz-stat-box strong { font-size: 1.4rem; color: #f472b6; }
        .blz-grid {
          display: grid;
          grid-template-columns: repeat(${ARENA_SIZE}, 1fr);
          gap: 4px;
          background: rgba(0,0,0,0.4);
          padding: 10px;
          border-radius: 16px;
          border: 1px solid rgba(244, 114, 182, 0.2);
          width: 360px; height: 360px;
        }
        .blz-cell {
          background: rgba(255,255,255,0.02);
          border-radius: 6px;
          cursor: crosshair;
          transition: all 0.2s;
          border: 1px solid transparent;
        }
        .blz-cell:hover { background: rgba(244, 114, 182, 0.1); border-color: rgba(244, 114, 182, 0.2); }
        .blz-target {
          background: #f472b6;
          box-shadow: 0 0 20px #f472b6, inset 0 0 10px white;
          border-radius: 50%;
          transform: scale(0.85);
          animation: blz-ping 0.8s infinite alternate;
        }
        @keyframes blz-ping { from { transform: scale(0.7); opacity: 0.7; } to { transform: scale(0.9); opacity: 1; } }
        .blz-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          border-radius: 16px;
        }
        .blz-btn {
          padding: 12px 30px;
          border-radius: 12px;
          border: none;
          background: #f472b6;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>

      <div className="blz-stats">
        <div className="blz-stat-box"><span>SCORE</span><strong>{score}</strong></div>
        <div className="blz-stat-box"><span>AMMO</span><strong>{shots}</strong></div>
      </div>

      <div className="blz-grid" style={{position: 'relative'}}>
        {!active && (
          <div className="blz-overlay">
            <button className="blz-btn" onClick={() => setActive(true)}>INITIALIZE SIGHTS</button>
          </div>
        )}
        {gameOver && (
          <div className="blz-overlay">
            <h2 style={{color: '#f472b6', marginBottom: '15px', fontFamily: 'Orbitron'}}>SYSTEM DEPLETED</h2>
            <button className="blz-btn" onClick={() => { setScore(0); setShots(10); setGameOver(false); setTarget(spawn()); }}>RELOAD</button>
          </div>
        )}
        {Array.from({ length: ARENA_SIZE * ARENA_SIZE }).map((_, i) => {
          const x = i % ARENA_SIZE; const y = Math.floor(i / ARENA_SIZE);
          const isTarget = target.x === x && target.y === y;
          return <div key={i} className={`blz-cell ${isTarget ? 'blz-target' : ''}`} onClick={() => hit(x, y)} />;
        })}
      </div>
    </div>
  );
}
export default Game2;
