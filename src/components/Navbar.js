import React, { useState } from "react";
import { FaHome, FaCog, FaChevronLeft, FaThLarge } from "react-icons/fa";
import SettingsPanel from "./SettingsPanel";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nv-root">
      <style>{`
        .nv-root {
          position: fixed;
          top: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 9999;
          align-items: flex-end;
        }
        .nv-btn {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .nv-btn:hover {
          color: #38bdf8;
          background: rgba(15, 23, 42, 0.95);
          border-color: rgba(56, 189, 248, 0.3);
          transform: scale(1.1);
        }
        .nv-settings-wrapper {
          position: absolute;
          top: 70px;
          right: 0;
        }
      `}</style>

      <Link to="/" className="nv-btn" title="Return Home">
        <FaHome />
      </Link>

      <motion.button 
        className="nv-btn" 
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        title="Settings"
      >
        <FaCog style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.5s' }} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="nv-settings-wrapper"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
          >
            <SettingsPanel />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;