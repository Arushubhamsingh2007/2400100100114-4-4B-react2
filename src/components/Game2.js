import React, { useEffect, useMemo, useRef, useState } from "react";

const ARENA_SIZE = 16;
const INITIAL_SHOTS = 5;

function randomTarget() {
  return {
    x: Math.floor(Math.random() * ARENA_SIZE),
    y: Math.floor(Math.random() * ARENA_SIZE),
  };
}

function Game2() {
  const [target, setTarget] = useState(randomTarget());
  const [score, setScore] = useState(0);
  const [shots, setShots] = useState(INITIAL_SHOTS);
  const [combo, setCombo] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [fastMode, setFastMode] = useState(false);
  const [timer, setTimer] = useState(10);
  const timerRef = useRef(null);
  const board = useMemo(() => {
    const cells = [];
    for (let y = 0; y < ARENA_SIZE; y += 1) {
      for (let x = 0; x < ARENA_SIZE; x += 1) {
        cells.push({ x, y });
      }
    }
    return cells;
  }, []);

  useEffect(() => {
    if (!fastMode || gameOver) return;

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [fastMode, gameOver]);

  useEffect(() => {
    if (gameOver && timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, [gameOver]);

  const resetGame = () => {
    setTarget(randomTarget());
    setScore(0);
    setShots(INITIAL_SHOTS);
    setCombo(0);
    setGameOver(false);
    setFastMode(false);
    setTimer(10);
    clearInterval(timerRef.current);
  };

  const shootTarget = (cell) => {
    if (gameOver) return;
    if (shots <= 0) return;

    setShots((prev) => prev - 1);

    const hit = cell.x === target.x && cell.y === target.y;
    if (hit) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      setScore((prev) => prev + 20 + newCombo * 2);
      setTarget(randomTarget());
      if (shots > 0 && !fastMode) {
        setFastMode(true);
        setTimer(10);
      }
    } else {
      setCombo(0);
    }

    if (shots - 1 <= 0) {
      setGameOver(true);
    }
  };

  return (
    <div className="widget-card shoot-widget">
      <div className="widget-header justify-between">
        <div>
          <span className="widget-tag">Shooting Ball</span>
          <h2 className="widget-title">Target Blitz</h2>
        </div>
        <span className="score-pill">Score {score}</span>
      </div>

      <div className="shoot-meta">Click the glowing target to score. Keep your streak alive and finish with style.</div>

      <div className="shoot-grid">
        {board.map((cell) => {
          const isTarget = cell.x === target.x && cell.y === target.y;
          return (
            <button
              key={`${cell.x}-${cell.y}`}
              type="button"
              className={`shoot-cell ${isTarget ? "shoot-target" : "shoot-cell-empty"}`}
              onClick={() => shootTarget(cell)}
            />
          );
        })}
      </div>

      <div className="shoot-stats widget-actions">
        <div className="shoot-tile">
          <span>Shots</span>
          <strong>{shots}</strong>
        </div>
        <div className="shoot-tile">
          <span>Combo</span>
          <strong>{combo}</strong>
        </div>
        <div className="shoot-tile">
          <span>Time</span>
          <strong>{fastMode ? `${timer}s` : "Ready"}</strong>
        </div>
      </div>

      <div className="widget-actions">
        <button className="widget-button widget-button-primary" onClick={resetGame}>
          {gameOver ? "Play Again" : "Restart"}
        </button>
      </div>

      {gameOver && (
        <div className="widget-result widget-result-alert">
          {score === 0 ? "No hits yet — keep shooting!" : "Game Over — your final score is " + score}
        </div>
      )}
    </div>
  );
}

export default Game2;
