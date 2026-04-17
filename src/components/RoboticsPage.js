import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaBrain, FaMicrochip, FaNetworkWired, FaPaperPlane, FaTerminal } from "react-icons/fa";

function RoboticsPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "IDENTITY CONFIRMED. Systems nominal. I am Titan-AI. How can I assist your architectural deployment today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI Response
    setTimeout(() => {
      let response = "";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        response = "Greetings, Architect. Peripheral neural links are standing by.";
      } else if (lowerInput.includes("who are you")) {
        response = "I am a high-level heuristic engine developed by Aru Shubham Singh to monitor the React Universe.";
      } else if (lowerInput.includes("projects") || lowerInput.includes("work")) {
        response = "You are currently viewing the Command Center. We have 16 active modules including Stack, Queue, and advanced Reality-Simulation systems.";
      } else if (lowerInput.includes("ai") || lowerInput.includes("robotics")) {
        response = "Artificial Intelligence is the core of this universe. We utilize NLP for intent analysis and Neural Networks for structural optimization.";
      } else {
        response = "Input received. Processing... Protocol established. Further data required for specific execution.";
      }

      setMessages(prev => [...prev, { role: "ai", text: response }]);
    }, 800);
  };

  const aiInsights = [
    { icon: <FaBrain />, title: "Neural Sync", desc: "Biometric state management across components." },
    { icon: <FaNetworkWired />, title: "Edge Processing", desc: "Low-latency architectural logic execution." },
    { icon: <FaMicrochip />, title: "Quantum Logic", desc: "Concurrent multi-threaded UI processing." }
  ];

  return (
    <div className="ai-interface-root">
      <style>{`
        .ai-interface-root {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 20px;
          padding: 10px;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        /* ── Left side: Info ── */
        .ai-portal-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ai-hero-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid var(--accent-glow);
          border-radius: 24px;
          padding: 30px;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .ai-hero-card h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          margin-bottom: 15px;
          letter-spacing: 4px;
          color: var(--accent-color);
        }

        .ai-insight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .insight-node {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s;
        }

        .insight-node:hover {
          border-color: var(--accent-color);
          background: rgba(var(--accent-color-rgb), 0.1);
          transform: translateY(-5px);
        }

        .insight-icon {
          font-size: 1.5rem;
          color: var(--accent-color);
          margin-bottom: 10px;
        }

        .insight-node h3 {
          font-family: 'Orbitron';
          font-size: 0.8rem;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .insight-node p {
          font-size: 0.75rem;
          color: var(--text-dim);
          line-height: 1.4;
        }

        /* ── Right side: Chatbot ── */
        .ai-chatbot-system {
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(30px);
          border: 2px solid var(--accent-glow);
          border-radius: 30px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .chat-header {
          padding: 20px;
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .chat-header .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 10px #22c55e;
        }

        .chat-header h2 {
          font-family: 'Orbitron';
          font-size: 0.9rem;
          letter-spacing: 2px;
          margin: 0;
        }

        .chat-feed {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
          scrollbar-width: thin;
          scrollbar-color: var(--accent-glow) transparent;
        }

        .msg {
          max-width: 85%;
          padding: 12px 18px;
          border-radius: 18px;
          font-size: 0.85rem;
          line-height: 1.5;
          position: relative;
        }

        .msg.ai {
          align-self: flex-start;
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(255,255,255,0.05);
          border-bottom-left-radius: 2px;
          color: #e2e8f0;
        }

        .msg.user {
          align-self: flex-end;
          background: var(--accent-color);
          color: #000;
          font-weight: 500;
          border-bottom-right-radius: 2px;
        }

        .chat-input-area {
          padding: 15px;
          background: rgba(0,0,0,0.3);
          display: flex;
          gap: 10px;
        }

        .chat-input {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 15px;
          padding: 12px 15px;
          color: #fff;
          font-size: 0.85rem;
          outline: none;
        }

        .send-btn {
          width: 45px;
          height: 45px;
          border-radius: 15px;
          background: var(--accent-color);
          border: none;
          color: #000;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }

        .send-btn:hover {
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .ai-interface-root { grid-template-columns: 1fr; }
          .ai-chatbot-system { height: 500px; }
        }
      `}</style>

      <div className="ai-portal-main">
        <motion.div 
          className="ai-hero-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1><FaRobot /> NEURAL_OS v4.0</h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '20px' }}>
            Harnessing the power of high-level heuristics to automate the React Universe. 
            Deploy intentional logic gates and edge-processed neural links.
          </p>
          <div className="ai-insight-grid">
            {aiInsights.map((node, i) => (
              <motion.div 
                key={i} 
                className="insight-node"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="insight-icon">{node.icon}</div>
                <h3>{node.title}</h3>
                <p>{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="ai-hero-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <FaNetworkWired style={{ fontSize: '3rem', color: 'var(--accent-glow)', marginBottom: '20px' }} />
          <h2 style={{ fontFamily: 'Orbitron', letterSpacing: '2px', textAlign: 'center' }}>UNIVERSAL INTELLIGENCE UNIT</h2>
          <p style={{ textAlign: 'center' }}>Synchronizing multi-threaded architecture protocols...</p>
        </div>
      </div>

      <motion.div 
        className="ai-chatbot-system"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="chat-header">
          <div className="status-dot pulse"></div>
          <h2><FaTerminal /> TITAN_ASSISTANT</h2>
        </div>

        <div className="chat-feed custom-scrollbar" ref={scrollRef}>
          <AnimatePresence>
            {messages.map((m, i) => (
              <motion.div 
                key={i} 
                className={`msg ${m.role}`}
                initial={{ opacity: 0, x: m.role === 'ai' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {m.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input 
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Query the architect's AI..."
          />
          <button className="send-btn" type="submit">
            <FaPaperPlane />
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default RoboticsPage;