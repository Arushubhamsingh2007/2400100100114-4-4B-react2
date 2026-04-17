import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaHistory, FaLocationArrow } from "react-icons/fa";

function GoogleMap() {
  const [city, setCity] = useState("Lucknow");
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState(["Lucknow", "Delhi", "Mumbai", "London", "New York"]);
  const [isTyping, setIsTyping] = useState(false);

  const executeSearch = useCallback((cityName) => {
    setCity(cityName);
    setHistory(prev => {
      if (!prev.includes(cityName)) {
        return [cityName, ...prev.slice(0, 4)];
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        executeSearch(search);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [search, executeSearch]);


  return (
    <div className="map-root">
      <style>{`
        .map-root {
          display: flex;
          justify-content: center;
          padding: 20px;
          min-height: 80vh;
          align-items: center;
        }
        .map-container {
          width: 100%;
          max-width: 1000px;
          display: grid;
          grid-template-columns: 280px 1fr;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 35px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
        }
        @media (max-width: 850px) {
          .map-container { grid-template-columns: 1fr; }
          .map-sidebar { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
        .map-sidebar {
          background: rgba(0, 0, 0, 0.2);
          padding: 35px 25px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }
        .map-sb-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.9rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .map-history-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .map-history-item {
          padding: 15px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          color: #cbd5e1;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .map-history-item:hover {
          background: rgba(0, 242, 254, 0.1);
          border-color: rgba(0, 242, 254, 0.3);
          color: #00f2fe;
          transform: translateX(8px);
        }
        .map-main {
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .map-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
        }
        .map-title-box h1 {
          margin: 0;
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          background: linear-gradient(90deg, #00f2fe, #8b5cf6);
          -webkit-background-clip: text;
          color: transparent;
        }
        .map-search-wrapper {
          position: relative;
          width: 320px;
        }
        .map-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 15px 15px 15px 50px;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .map-input:focus {
          border-color: #00f2fe;
        }
        .map-search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          color: #64748b;
        }
        .map-frame-container {
          flex: 1;
          background: #000;
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.05);
          position: relative;
          min-height: 450px;
        }
        .map-status-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 10px 18px;
          background: rgba(10, 15, 30, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 242, 254, 0.3);
          border-radius: 12px;
          font-family: 'Orbitron';
          font-size: 0.75rem;
          color: #00f2fe;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }
        .dot-pulse {
          width: 6px;
          height: 6px;
          background: #00f2fe;
          border-radius: 50%;
          animation: pulse 1s infinite alternate;
        }
        @keyframes pulse {
          from { transform: scale(0.8); opacity: 0.5; }
          to { transform: scale(1.4); opacity: 1; }
        }
        .map-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0,242,254,0.1);
          border-top-color: #00f2fe;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="map-container">
        <div className="map-sidebar">
          <div className="map-sb-title"><FaHistory /> Position Log</div>
          <div className="map-history-list">
            {history.map(h => (
              <div key={h} className="map-history-item" onClick={() => setCity(h)}>
                <FaLocationArrow style={{ fontSize: '0.8rem' }} /> {h}
              </div>
            ))}
          </div>
        </div>

        <div className="map-main">
          <div className="map-header">
            <div className="map-title-box">
              <h1>Global Map</h1>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '5px' }}>Location Matrix Interface</p>
            </div>
            <div className="map-search-wrapper">
              <input 
                className="map-input"
                placeholder="Coordinate indexing..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
              />
              <div className="map-search-icon">
                {isTyping ? <div className="map-spinner" /> : <FaSearch />}
              </div>
            </div>
          </div>

          <motion.div 
            className="map-frame-container"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            key={city}
          >
            <div className="map-status-overlay">
              <div className="dot-pulse"></div>
              TARGET: {city.toUpperCase()} | STATUS: TRACKING
            </div>
            <iframe
              title="Global Positioning"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${city}&output=embed`}
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;