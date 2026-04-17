import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaUndo } from "react-icons/fa";

function Game4() {
  const [playerY, setPlayerY] = useState(0);
  const [obstacleX, setObstacleX] = useState(800);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);

  const velocity = useRef(0);
  const gravity = 0.8;
  const jumpPower = 18;

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.code === "Space" || e.code === "ArrowUp") && playerY === 0 && !gameOver && running) {
        velocity.current = jumpPower;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playerY, gameOver, running]);

  useEffect(() => {
    if (gameOver || !running) return;
    const interval = setInterval(() => {
      setPlayerY((prev) => {
        let newY = prev + velocity.current;
        velocity.current -= gravity;
        if (newY < 0) {
          newY = 0;
          velocity.current = 0;
        }
        return newY;
      });
      setObstacleX((prev) => {
        let newX = prev - (8 + Math.floor(score / 5));
        if (newX < -40) {
          setScore((s) => s + 1);
          return 900;
        }
        return newX;
      });
    }, 24);
    return () => clearInterval(interval);
  }, [gameOver, running, score]);

  useEffect(() => {
    if (obstacleX < 90 && obstacleX > 30 && playerY < 50) {
      setGameOver(true);
      setRunning(false);
    }
  }, [obstacleX, playerY]);

  const restart = () => {
    setPlayerY(0);
    velocity.current = 0;
    setObstacleX(800);
    setScore(0);
    setGameOver(false);
    setRunning(true);
  };

  return (
    <div className="run-root">
      <style>{`
        .run-root {
          padding: 20px;
          text-align: center;
        }
        .run-area {
          position: relative;
          width: 100%;
          max-width: 800px;
          height: 300px;
          margin: 20px auto;
          background: linear-gradient(to bottom, #0f172a, #1e293b);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .run-ground {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: #38bdf8;
          box-shadow: 0 0 15px #38bdf8;
        }
        .run-player {
          position: absolute;
          left: 50px;
          font-size: 50px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
          z-index: 5;
        }
        .run-obstacle {
          position: absolute;
          bottom: 0;
          font-size: 45px;
          filter: drop-shadow(0 0 10px rgba(244,114,182,0.4));
        }
        .run-score {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          color: #38bdf8;
          margin-bottom: 20px;
        }
        .run-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          backdrop-filter: blur(5px);
        }
        .run-btn {
          padding: 15px 40px;
          border-radius: 30px;
          border: none;
          background: #38bdf8;
          color: #000;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
        }
      `}</style>

      <div className="run-score">Score: {score}</div>

      <div className="run-area">
        {!running && !gameOver && (
          <div className="run-overlay">
            <motion.button className="run-btn" onClick={() => setRunning(true)} whileHover={{scale:1.1}}>
              <FaPlay /> INITIALIZE
            </motion.button>
            <p style={{marginTop: '15px', color: '#94a3b8'}}>Press SPACE to jump</p>
          </div>
        )}

        {gameOver && (
          <div className="run-overlay">
            <h2 style={{color: '#ef4444', fontFamily: 'Orbitron', marginBottom: '20px'}}>SYSTEM CRITICAL: COLLISION</h2>
            <button className="run-btn" onClick={restart}><FaUndo /> REBOOT</button>
          </div>
        )}

        <div className="run-ground"></div>
        
        <div className="run-player" style={{ bottom: playerY + "px" }}>🦊</div>
        
        <div className="run-obstacle" style={{ left: obstacleX + "px" }}>🌵</div>
      </div>
    </div>
  );
}

export default Game4;
