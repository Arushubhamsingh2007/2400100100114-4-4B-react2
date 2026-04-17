import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentAlt, FaHeart, FaPaperPlane, FaUserSecret, FaTerminal } from "react-icons/fa";

function CommentModule() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("techtitans_comments");
    if (saved) setComments(JSON.parse(saved));
  }, []);

  const saveComments = (newComments) => {
    setComments(newComments);
    localStorage.setItem("techtitans_comments", JSON.stringify(newComments));
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      user: userName.trim() || "Anonymous Architect",
      text: input,
      likes: 0,
      timestamp: new Date().toLocaleTimeString(),
      liked: false
    };

    saveComments([newComment, ...comments]);
    setInput("");
  };

  const toggleLike = (id) => {
    const updated = comments.map(c => {
      if (c.id === id) {
        return { 
          ...c, 
          likes: c.liked ? c.likes - 1 : c.likes + 1,
          liked: !c.liked 
        };
      }
      return c;
    });
    saveComments(updated);
  };

  return (
    <div className="comment-root">
      <style>{`
        .comment-root {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 20px;
        }

        /* ── Input Box ── */
        .comment-input-panel {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid var(--accent-glow);
          border-radius: 24px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .comment-header {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .comment-header h2 {
          font-family: 'Orbitron';
          font-size: 1.1rem;
          letter-spacing: 2px;
          margin: 0;
          color: var(--accent-color);
        }

        .user-field {
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 8px 15px;
          color: #fff;
          font-size: 0.8rem;
          outline: none;
          font-family: 'Fira Code';
        }

        .comment-textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 15px;
          padding: 15px;
          color: #fff;
          font-size: 0.95rem;
          min-height: 100px;
          resize: vertical;
          outline: none;
          transition: border-color 0.3s;
        }

        .comment-textarea:focus {
          border-color: var(--accent-color);
        }

        .post-btn-bar {
          display: flex;
          justify-content: flex-end;
        }

        .post-btn {
          padding: 12px 30px;
          background: var(--accent-color);
          border: none;
          border-radius: 12px;
          color: #000;
          font-family: 'Orbitron';
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
        }

        .post-btn:hover {
          box-shadow: 0 0 20px var(--accent-glow);
          transform: translateY(-2px);
        }

        /* ── Comment Feed ── */
        .comment-feed {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .comment-card {
          background: rgba(20, 20, 30, 0.6);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 20px;
          position: relative;
          transition: all 0.3s;
        }

        .comment-card:hover {
          border-color: rgba(255,255,255,0.1);
          background: rgba(20, 20, 30, 0.8);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .card-user {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Orbitron';
          font-size: 0.8rem;
          color: var(--accent-color);
        }

        .card-time {
          font-size: 0.7rem;
          color: #64748b;
        }

        .card-text {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #cbd5e1;
          margin-bottom: 15px;
        }

        .card-footer {
          display: flex;
          gap: 20px;
        }

        .like-btn {
          background: transparent;
          border: none;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.3s;
        }

        .like-btn.active {
          color: #f43f5e;
          text-shadow: 0 0 10px rgba(244, 63, 94, 0.4);
        }

        .like-btn:hover {
          transform: scale(1.1);
        }

        .heart-particle {
          position: absolute;
          pointer-events: none;
          color: #f43f5e;
        }
      `}</style>

      <motion.div 
        className="comment-input-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="comment-header">
          <FaCommentAlt />
          <h2>COMMUNICATION FEED</h2>
          <div style={{ flex: 1 }}></div>
          <input 
            className="user-field" 
            placeholder="Assign ID..." 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        
        <textarea 
          className="comment-textarea"
          placeholder="Broadcast your neural state..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="post-btn-bar">
          <motion.button 
            className="post-btn" 
            onClick={handlePost}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane /> DEPLOY COMMENT
          </motion.button>
        </div>
      </motion.div>

      <div className="comment-feed">
        <AnimatePresence>
          {comments.map((c) => (
            <motion.div 
              key={c.id} 
              className="comment-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              layout
            >
              <div className="card-header">
                <div className="card-user">
                  <FaUserSecret /> {c.user}
                </div>
                <div className="card-time">{c.timestamp}</div>
              </div>
              
              <div className="card-text">{c.text}</div>
              
              <div className="card-footer">
                <motion.button 
                  className={`like-btn ${c.liked ? 'active' : ''}`}
                  onClick={() => toggleLike(c.id)}
                  whileTap={{ scale: 1.4, rotate: [0, -20, 20, 0] }}
                >
                  <FaHeart /> <span>{c.likes}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {comments.length === 0 && (
          <div style={{ textAlign: 'center', py: 50, opacity: 0.3 }}>
            <FaTerminal style={{ fontSize: '3rem', marginBottom: '20px' }} />
            <h3>No entries found in localized storage.</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentModule;
