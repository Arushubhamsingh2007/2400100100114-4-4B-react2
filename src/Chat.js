import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaUserCircle, FaTerminal, FaShieldAlt } from "react-icons/fa";

function Chat({ user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "SYSTEM", text: "Comm channel established. Encryption active.", type: "sys" },
  ]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { user: user || "GUEST", text: message, type: "user" }]);
      setMessage("");
    }
  };

  return (
    <div className="cht-root">
      <style>{`
        .cht-root {
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
        }
        .cht-container {
          width: 100%;
          max-width: 500px;
          background: rgba(10, 15, 30, 0.85);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 35px;
          display: flex;
          flex-direction: column;
          height: 600px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
        }
        .cht-header {
          padding: 25px;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cht-h-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          letter-spacing: 3px;
          color: #00f2fe;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .cht-msg-area {
          flex: 1;
          padding: 25px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .cht-msg-area::-webkit-scrollbar { width: 5px; }
        .cht-msg-area::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .cht-bubble {
          max-width: 80%;
          padding: 12px 18px;
          border-radius: 18px;
          font-size: 0.9rem;
          line-height: 1.5;
          position: relative;
        }
        .cht-bubble-user {
          align-self: flex-end;
          background: linear-gradient(135deg, #00f2fe, #0072ff);
          color: white;
          border-bottom-right-radius: 4px;
        }
        .cht-bubble-other {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .cht-bubble-sys {
          align-self: center;
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem;
          text-align: center;
          width: 90%;
          border: 1px dashed rgba(56, 189, 248, 0.3);
        }
        .cht-input-box {
          padding: 20px;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .cht-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 12px 18px;
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .cht-input:focus {
          border-color: #00f2fe;
          background: rgba(255, 255, 255, 0.08);
        }
        .cht-send-btn {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #00f2fe;
          border: none;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cht-send-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
        }
        .cht-meta {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 4px;
          display: block;
        }
      `}</style>

      <motion.div 
        className="cht-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="cht-header">
          <div className="cht-h-title">
            <FaTerminal /> SECURE COMMS
          </div>
          <FaShieldAlt color="#22c55e" size={18} />
        </div>

        <div className="cht-msg-area">
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => (
              <motion.div 
                key={index}
                className={`cht-bubble cht-bubble-${msg.type}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
              >
                {msg.type !== 'sys' && <span className="cht-meta">{msg.user}</span>}
                {msg.text}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>

        <div className="cht-input-box">
          <input 
            className="cht-input"
            placeholder="Secure transmission..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <motion.button 
            className="cht-send-btn"
            onClick={sendMessage}
            whileTap={{ scale: 0.9 }}
          >
            <FaPaperPlane />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Chat;