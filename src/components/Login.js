import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaUser, FaShieldAlt, FaKey } from "react-icons/fa";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true);
    setMsg("");
    
    // Simulate auth delay
    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem("techtitans_users") || "[]");
      const foundUser = existingUsers.find(u => u.user === user && u.pass === pass);

      if ((user === "admin" && pass === "1234") || foundUser) {
        setMsg(`ACCESS GRANTED: WELCOME ${user.toUpperCase()}`);
      } else {
        setMsg("ACCESS DENIED: INVALID CREDENTIALS");
      }
      setIsLoading(false);
    }, 1200);
  }

  return (
    <div className="lgn-root">
      <style>{`
        .lgn-root {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .lgn-container {
          width: 100%;
          max-width: 440px;
          background: rgba(10, 15, 30, 0.82);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 32px;
          padding: 50px 40px;
          text-align: center;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .lgn-shield {
          font-size: 3rem;
          color: #00f2fe;
          margin-bottom: 25px;
          filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.5));
        }
        .lgn-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .lgn-subtitle {
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }
        .lgn-field {
          position: relative;
          margin-bottom: 25px;
        }
        .lgn-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #475569;
          transition: color 0.3s;
        }
        .lgn-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px 16px 16px 50px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .lgn-input:focus {
          border-color: #00f2fe;
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.15);
        }
        .lgn-input:focus + .lgn-icon {
          color: #00f2fe;
        }
        .lgn-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(90deg, #00f2fe, #0072ff);
          color: white;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 10px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .lgn-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 242, 254, 0.4);
        }
        .lgn-status {
          margin-top: 30px;
          height: 20px;
        }
        .lgn-status-text {
          font-size: 0.85rem;
          font-family: 'Fira Code', monospace;
          letter-spacing: 1px;
        }
        .lgn-loader {
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-top: 3px solid #00f2fe;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: lgn-spin 1s linear infinite;
        }
        @keyframes lgn-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <motion.div 
        className="lgn-container"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        <div className="lgn-shield">
          <FaShieldAlt />
        </div>
        
        <h2 className="lgn-title">Security</h2>
        <p className="lgn-subtitle">Authentication Required</p>

        <div className="lgn-field">
          <FaUser className="lgn-icon" />
          <input 
            className="lgn-input"
            placeholder="ACCESS ID"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="lgn-field">
          <FaKey className="lgn-icon" />
          <input 
            className="lgn-input"
            type="password"
            placeholder="SECURE PASS"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        <motion.button 
          className="lgn-btn"
          onClick={handleLogin}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          {isLoading ? <div className="lgn-loader"></div> : <><FaLock /> AUTHORIZE</>}
        </motion.button>

        <div className="lgn-status">
          <AnimatePresence mode="wait">
            {msg && (
              <motion.div 
                key={msg}
                className="lgn-status-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{ color: msg.includes("GRANTED") ? "#4ade80" : "#ef4444" }}
              >
                {msg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;