import React from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut, FaSignOutAlt, FaRocket, FaShieldAlt } from "react-icons/fa";

function Home({ user, setPage }) {
  return (
    <div className="hm-root">
      <style>{`
        .hm-root {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #020617;
          font-family: 'Orbitron', sans-serif;
          padding: 20px;
        }
        .hm-container {
          width: 100%;
          max-width: 480px;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 40px;
          padding: 60px 40px;
          text-align: center;
          color: white;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
          position: relative;
          overflow: hidden;
        }
        .hm-avatar-box {
          width: 100px;
          height: 100px;
          background: rgba(0, 242, 254, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          font-size: 3rem;
          color: #00f2fe;
          border: 2px dashed rgba(0, 242, 254, 0.3);
          box-shadow: 0 0 30px rgba(0, 242, 254, 0.2);
        }
        .hm-title {
          font-size: 1.8rem;
          letter-spacing: 4px;
          margin-bottom: 5px;
        }
        .hm-status {
          font-family: 'Fira Code', monospace;
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }
        .hm-btn-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 30px;
        }
        .hm-btn {
          padding: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .hm-btn:hover {
          background: rgba(0, 242, 254, 0.1);
          border-color: #00f2fe;
          color: #00f2fe;
          transform: translateY(-5px);
        }
        .hm-logout {
          margin-top: 20px;
          background: transparent;
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 12px 30px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 auto;
        }
        .hm-logout:hover {
          background: rgba(239, 68, 68, 0.1);
          border-color: #ef4444;
        }
      `}</style>

      <motion.div 
        className="hm-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="hm-avatar-box">
          <FaUserAstronaut />
        </div>
        
        <h1 className="hm-title">Welcome, {user}</h1>
        <p className="hm-status">ACTIVE SESSION • USER AUTHORIZED</p>

        <div className="hm-btn-row">
          <button className="hm-btn" onClick={() => alert("SYNCHRONIZING FEATURES...")}>
            <FaRocket style={{fontSize: '1.2rem'}} />
            <span>DRIVE</span>
          </button>
          <button className="hm-btn" onClick={() => alert("ENCRYPTING DATA...")}>
            <FaShieldAlt style={{fontSize: '1.2rem'}} />
            <span>VAULT</span>
          </button>
        </div>

        <button className="hm-logout" onClick={() => setPage && setPage("login")}>
          <FaSignOutAlt /> TERMINATE
        </button>
      </motion.div>
    </div>
  );
}

export default Home;