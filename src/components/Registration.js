import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserPlus, FaEnvelope, FaLock, FaIdCard, FaDatabase } from "react-icons/fa";

function Registration() {
  const [formData, setFormData] = useState({ user: "", email: "", pass: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (!formData.user || !formData.email || !formData.pass) {
      setStatus("ERROR: INCOMPLETE DATA PACKETS");
      return;
    }
    setLoading(true);
    setStatus("");
    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem("techtitans_users") || "[]");
      const userExists = existingUsers.some(u => u.user === formData.user || u.email === formData.email);
      
      if (userExists) {
        setStatus("ERROR: IDENTITY ALREADY INDEXED");
        setLoading(false);
        return;
      }

      existingUsers.push(formData);
      localStorage.setItem("techtitans_users", JSON.stringify(existingUsers));
      
      setStatus("SUCCESS: IDENTITY REGISTERED IN MATRIX");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="reg-root">
      <style>{`
        .reg-root {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .reg-container {
          width: 100%;
          max-width: 500px;
          background: rgba(10, 15, 30, 0.85);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 35px;
          padding: 50px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
          color: white;
          position: relative;
        }
        .reg-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .reg-icon-box {
          width: 70px;
          height: 70px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #a78bfa;
          font-size: 1.8rem;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
        }
        .reg-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin: 0;
          background: linear-gradient(90deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          color: transparent;
        }
        .reg-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .reg-field {
          position: relative;
        }
        .reg-f-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
        }
        .reg-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px 16px 16px 50px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .reg-input:focus {
          border-color: #a78bfa;
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
        }
        .reg-btn {
          width: 100%;
          padding: 18px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(90deg, #a78bfa, #8b5cf6);
          color: white;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 10px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .reg-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
        }
        .reg-status {
          margin-top: 25px;
          text-align: center;
          font-size: 0.85rem;
          font-family: 'Fira Code', monospace;
          min-height: 20px;
        }
        .reg-loader {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-top: 3px solid #a78bfa;
          border-radius: 50%;
          animation: reg-spin 1s linear infinite;
        }
        @keyframes reg-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <motion.div 
        className="reg-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="reg-header">
          <div className="reg-icon-box">
            <FaIdCard />
          </div>
          <h2 className="reg-title">Onboarding</h2>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '10px' }}>IDENTITY FRAGMENT REGISTRATION</p>
        </div>

        <div className="reg-form">
          <div className="reg-field">
            <FaUserPlus className="reg-f-icon" />
            <input 
              className="reg-input" 
              placeholder="DESIGNATE ALIAS"
              onChange={(e) => setFormData({...formData, user: e.target.value})}
            />
          </div>

          <div className="reg-field">
            <FaEnvelope className="reg-f-icon" />
            <input 
              className="reg-input" 
              placeholder="COMM CHANNEL (EMAIL)"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="reg-field">
            <FaLock className="reg-f-icon" />
            <input 
              className="reg-input" 
              type="password"
              placeholder="ENCRYPTION KEY"
              onChange={(e) => setFormData({...formData, pass: e.target.value})}
            />
          </div>

          <motion.button 
            className="reg-btn"
            onClick={handleRegister}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? <div className="reg-loader"></div> : <><FaDatabase /> INITIALIZE SYNC</>}
          </motion.button>
        </div>

        <div className="reg-status">
          <AnimatePresence mode="wait">
            {status && (
              <motion.div 
                key={status}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ color: status.includes("SUCCESS") ? "#4ade80" : "#ef4444" }}
              >
                {status}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default Registration;