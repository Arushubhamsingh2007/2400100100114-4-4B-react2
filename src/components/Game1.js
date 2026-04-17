import { useEffect, useRef, useState } from "react";

const BOARD_SIZE = 16;
const INITIAL_SNAKE = [{ x: 8, y: 8 }, { x: 7, y: 8 }, { x: 6, y: 8 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

function randomFoodPosition(snake) {
  const occupied = new Set(snake.map((segment) => `${segment.x}-${segment.y}`));
  let position = null;
  while (!position) {
    const x = Math.floor(Math.random() * BOARD_SIZE);
    const y = Math.floor(Math.random() * BOARD_SIZE);
    if (!occupied.has(`${x}-${y}`)) position = { x, y };
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

  const directionRef = useRef(direction);
  directionRef.current = direction;

  useEffect(() => {
    const handleKeyDown = (e) => {
      const dirs = { ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 }, ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 }};
      const next = dirs[e.key];
      if (next && (next.x !== -directionRef.current.x || next.y !== -directionRef.current.y)) setDirection(next);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!running || gameOver) return;
    const move = setInterval(() => {
      setSnake(curr => {
        const head = curr[0];
        const nextHead = { x: (head.x + directionRef.current.x + BOARD_SIZE) % BOARD_SIZE, y: (head.y + directionRef.current.y + BOARD_SIZE) % BOARD_SIZE };
        if (curr.some(s => s.x === nextHead.x && s.y === nextHead.y)) { setGameOver(true); setRunning(false); return curr; }
        const ate = nextHead.x === food.x && nextHead.y === food.y;
        const nextSnake = [nextHead, ...curr];
        if (!ate) nextSnake.pop();
        else { setFood(randomFoodPosition(nextSnake)); setScore(s => s + 10); setSpeed(s => Math.max(80, s - 5)); }
        return nextSnake;
      });
    }, speed);
    return () => clearInterval(move);
  }, [running, speed, food, gameOver]);

  return (
    <div className="snk-wrap">
      <style>{`
        .snk-wrap { display: flex; flex-direction: column; align-items: center; color: white; }
        .snk-board {
          display: grid;
          grid-template-columns: repeat(${BOARD_SIZE}, 1fr);
          gap: 2px;
          background: rgba(0,0,0,0.5);
          padding: 10px;
          border-radius: 12px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          width: 350px; height: 350px;
        }
        .snk-cell { border-radius: 3px; background: rgba(255,255,255,0.03); }
        .snk-head { background: #8b5cf6; box-shadow: 0 0 10px #8b5cf6; border-radius: 5px; }
        .snk-body { background: rgba(139, 92, 246, 0.4); }
        .snk-food { background: #f472b6; box-shadow: 0 0 15px #f472b6; border-radius: 50%; animation: snk-pulse 1s infinite; }
        @keyframes snk-pulse { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }
        .snk-score { font-family: 'Orbitron'; font-size: 1.5rem; margin-bottom: 20px; color: #8b5cf6; }
        .snk-controls { margin-top: 25px; display: flex; gap: 15px; }
        .snk-btn { padding: 10px 25px; border-radius: 10px; border: none; cursor: pointer; font-weight: 700; background: #8b5cf6; color: white; }
      `}</style>
      <div className="snk-score">SCORE: {score}</div>
      <div className="snk-board">
        {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, i) => {
          const x = i % BOARD_SIZE; const y = Math.floor(i / BOARD_SIZE);
          const isHead = snake[0].x === x && snake[0].y === y;
          const isBody = snake.slice(1).some(s => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;
          return <div key={i} className={`snk-cell ${isHead ? 'snk-head' : isBody ? 'snk-body' : isFood ? 'snk-food' : ''}`} />;
        })}
      </div>
      <div className="snk-controls">
        <button className="snk-btn" onClick={() => { if(gameOver) { setSnake(INITIAL_SNAKE); setScore(0); setGameOver(false); } setRunning(!running); }}>
          {gameOver ? "RESTART" : running ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
}
export default Game1;
