import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTrash, FaCheck, FaLayerGroup } from "react-icons/fa";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="todo-root">
      <style>{`
        .todo-root {
          display: flex;
          justify-content: center;
          padding: 20px;
        }
        .todo-container {
          width: 100%;
          max-width: 500px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          position: relative;
        }
        .todo-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 35px;
        }
        .todo-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, #8b5cf6, #d946ef);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
        }
        .todo-title-group h2 {
          margin: 0;
          font-family: 'Orbitron', sans-serif;
          font-size: 1.4rem;
          color: #f1f5f9;
        }
        .todo-title-group p {
          margin: 5px 0 0;
          font-size: 0.8rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .todo-input-wrap {
          display: flex;
          gap: 12px;
          margin-bottom: 30px;
        }
        .todo-input {
          flex: 1;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 15px 20px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s;
        }
        .todo-input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
        }
        .todo-add-btn {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          border: none;
          background: #8b5cf6;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s;
        }
        .todo-add-btn:hover {
          background: #7c3aed;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
        }
        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 5px;
        }
        .todo-list::-webkit-scrollbar {
          width: 5px;
        }
        .todo-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .todo-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          transition: all 0.3s;
        }
        .todo-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateX(5px);
        }
        .todo-item.completed {
          opacity: 0.6;
        }
        .todo-check {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          border: 2px solid #8b5cf6;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          font-size: 0.8rem;
          transition: all 0.2s;
        }
        .todo-check.active {
          background: #8b5cf6;
        }
        .todo-text {
          flex: 1;
          font-size: 1rem;
          color: #e2e8f0;
          transition: all 0.3s;
        }
        .todo-item.completed .todo-text {
          text-decoration: line-through;
          color: #64748b;
        }
        .todo-del-btn {
          color: #ef4444;
          background: transparent;
          border: none;
          cursor: pointer;
          opacity: 0.4;
          transition: all 0.3s;
        }
        .todo-item:hover .todo-del-btn {
          opacity: 1;
        }
        .todo-del-btn:hover {
          transform: scale(1.2);
        }
        .todo-empty {
          text-align: center;
          color: #64748b;
          padding: 40px 0;
          font-style: italic;
        }
      `}</style>

      <motion.div 
        className="todo-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="todo-header">
          <div className="todo-icon-box">
            <FaLayerGroup />
          </div>
          <div className="todo-title-group">
            <h2>Task Matrix</h2>
            <p>Priority Synchronization</p>
          </div>
        </div>

        <div className="todo-input-wrap">
          <input 
            className="todo-input"
            type="text"
            placeholder="Initialize new objective..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <motion.button 
            className="todo-add-btn"
            onClick={addTask}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus />
          </motion.button>
        </div>

        <div className="todo-list">
          <AnimatePresence>
            {tasks.length === 0 ? (
              <motion.div 
                className="todo-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No active objectives in current matrix.
              </motion.div>
            ) : (
              tasks.map((task) => (
                <motion.div 
                  key={task.id}
                  className={`todo-item ${task.completed ? 'completed' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout
                >
                  <div 
                    className={`todo-check ${task.completed ? 'active' : ''}`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.completed && <FaCheck />}
                  </div>
                  <span className="todo-text">{task.text}</span>
                  <button className="todo-del-btn" onClick={() => removeTask(task.id)}>
                    <FaTrash />
                  </button>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default TodoList;