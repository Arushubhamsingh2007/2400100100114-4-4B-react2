import React, { useEffect, useMemo, useRef, useState } from "react";

const BOARD_SIZE = 16;
const INITIAL_SNAKE = [
  { x: 8, y: 8 },
  { x: 7, y: 8 },
  { x: 6, y: 8 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };

function randomFoodPosition(snake) {
  const occupied = new Set(snake.map((segment) => `${segment.x}-${segment.y}`));
  let position = null;

  while (!position) {
    const x = Math.floor(Math.random() * BOARD_SIZE);
    const y = Math.floor(Math.random() * BOARD_SIZE);
    const key = `${x}-${y}`;
    if (!occupied.has(key)) {
      position = { x, y };
    }
  }

  return position;
}

function Game1() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(() => randomFoodPosition(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(140);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const snakeRef = useRef(snake);
  const directionRef = useRef(direction);

  snakeRef.current = snake;
  directionRef.current = direction;

  const board = useMemo(() => {
    const cells = [];
    for (let y = 0; y < BOARD_SIZE; y += 1) {
      for (let x = 0; x < BOARD_SIZE; x += 1) {
        cells.push({ x, y });
      }
    }
    return cells;
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;
      const directions = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };

      const next = directions[event.key];
      if (!next) return;

      const opposite = directionRef.current.x === -next.x && directionRef.current.y === -next.y;
      if (opposite) return;

      setDirection(next);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);

  useEffect(() => {
    if (!running || gameOver) return;

    const moveInterval = setInterval(() => {
      setSnake((currentSnake) => {
        const head = currentSnake[0];
        const nextHead = {
          x: (head.x + directionRef.current.x + BOARD_SIZE) % BOARD_SIZE,
          y: (head.y + directionRef.current.y + BOARD_SIZE) % BOARD_SIZE,
        };

        const collided = currentSnake.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);
        if (collided) {
          setGameOver(true);
          setRunning(false);
          return currentSnake;
        }

        const ateFood = nextHead.x === food.x && nextHead.y === food.y;
        const nextSnake = [nextHead, ...currentSnake];

        if (!ateFood) {
          nextSnake.pop();
        } else {
          setFood(randomFoodPosition(nextSnake));
          setScore((currentScore) => currentScore + 10);
          setSpeed((currentSpeed) => Math.max(80, currentSpeed - 5));
        }

        return nextSnake;
      });
    }, speed);

    return () => clearInterval(moveInterval);
  }, [running, speed, food, gameOver]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(randomFoodPosition(INITIAL_SNAKE));
    setScore(0);
    setSpeed(140);
    setRunning(true);
    setGameOver(false);
  };

  const pauseGame = () => {
    setRunning(false);
  };

  const startGame = () => {
    if (gameOver) {
      resetGame();
      return;
    }
    setRunning(true);
  };

  const getCellClass = (cell) => {
    const head = snake[0];
    if (cell.x === head.x && cell.y === head.y) return "snake-cell snake-head";
    if (snake.slice(1).some((segment) => segment.x === cell.x && segment.y === cell.y)) {
      return "snake-cell snake-body";
    }
    if (cell.x === food.x && cell.y === food.y) return "snake-cell snake-food";
    return "snake-cell";
  };

  return (
    <div className="widget-card snake-widget">
      <div className="widget-header justify-between">
        <div>
          <span className="widget-tag">Snake & Eat</span>
          <h2 className="widget-title">Snake Feast</h2>
        </div>
        <span className="score-pill">Score {score}</span>
      </div>

      <div className="snake-meta">Use Arrow Keys or WASD to steer. Eat food and grow larger.</div>

      <div className="snake-board">
        {board.map((cell) => (
          <div key={`${cell.x}-${cell.y}`} className={getCellClass(cell)} />
        ))}
      </div>

      <div className="snake-controls widget-actions">
        <button className="widget-button widget-button-primary" onClick={startGame}>
          {running ? "Resume" : gameOver ? "Restart" : "Start"}
        </button>
        <button className="widget-button widget-button-secondary" onClick={pauseGame}>
          Pause
        </button>
      </div>

      <div className="snake-footer">
        <span className="snake-status">Speed: {Math.round(220 - speed)} / 140</span>
        <span className="snake-status">Status: {gameOver ? "Game Over" : running ? "Running" : "Paused"}</span>
      </div>

      {gameOver && <div className="widget-result widget-result-alert">Game Over — hit Start to play again.</div>}
    </div>
  );
}

export default Game1;
