import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCloudSun, FaSearch, FaWind, FaHistory, FaMapMarkerAlt } from "react-icons/fa";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const getWeather = useCallback(async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError("");
    try {
      const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
      const geoData = await geo.json();

      if (!geoData.results) {
        setError("Location coordinate synchronization failed.");
        setWeather(null);
        return;
      }

      const { latitude: lat, longitude: lon, name: cityReal } = geoData.results[0];
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const weatherData = await weatherRes.json();

      setWeather({
        name: cityReal,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        time: weatherData.current_weather.time
      });

      setHistory(prev => {
        if (!prev.includes(cityReal)) {
          return [cityReal, ...prev.slice(0, 4)];
        }
        return prev;
      });
    } catch {
      setError("Atmospheric data retrieval error.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (city) {
        getWeather(city);
      }
    }, 1000); 
    return () => clearTimeout(timer);
  }, [city, getWeather]);


  return (
    <div className="wth-root">
      <style>{`
        .wth-root {
          display: flex;
          justify-content: center;
          padding: 20px;
          min-height: 80vh;
          align-items: center;
        }
        .wth-container {
          width: 100%;
          max-width: 850px;
          display: grid;
          grid-template-columns: 240px 1fr;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 242, 254, 0.2);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 768px) {
          .wth-container { grid-template-columns: 1fr; }
          .wth-sidebar { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
        .wth-sidebar {
          background: rgba(0, 0, 0, 0.2);
          padding: 30px;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }
        .wth-sb-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.9rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
        }
        .wth-history-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wth-history-item {
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          color: #cbd5e1;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wth-history-item:hover {
          background: rgba(0, 242, 254, 0.1);
          border-color: rgba(0, 242, 254, 0.3);
          color: #00f2fe;
          transform: translateX(5px);
        }
        .wth-main {
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .wth-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .wth-search-box {
          position: relative;
          width: 300px;
        }
        .wth-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 12px 15px 12px 45px;
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .wth-input:focus {
          border-color: #00f2fe;
        }
        .wth-search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
        }
        .wth-weather-card {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .wth-hero {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 40px;
        }
        .wth-temp-box {
          text-align: center;
        }
        .wth-temp {
          font-family: 'Orbitron', sans-serif;
          font-size: 4rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .wth-city {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-top: 10px;
        }
        .wth-icon-large {
          font-size: 6rem;
          color: #00f2fe;
          filter: drop-shadow(0 0 20px rgba(0, 242, 254, 0.4));
        }
        .wth-details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .wth-detail-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .wth-detail-icon {
          font-size: 1.8rem;
          color: #38bdf8;
        }
        .wth-detail-info h4 {
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          margin: 0 0 5px;
          letter-spacing: 1px;
        }
        .wth-detail-val {
          font-family: 'Orbitron';
          font-size: 1.1rem;
          color: #fff;
        }
        .wth-error {
          padding: 20px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 15px;
          color: #f87171;
          margin-top: 20px;
        }
        .spinner-small {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: #00f2fe;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        .typing-indicator {
          position: absolute;
          top: 65px;
          left: 10px;
          font-size: 0.65rem;
          font-family: 'Fira Code';
          color: #00f2fe;
          opacity: 0.8;
          letter-spacing: 1px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="wth-container">
        <div className="wth-sidebar">
          <div className="wth-sb-title"><FaHistory /> Scanning History</div>
          <div className="wth-history-list">
            {history.map(h => (
              <div key={h} className="wth-history-item" onClick={() => setCity(h)}>
                <FaMapMarkerAlt /> {h}
              </div>
            ))}
          </div>
        </div>
        <div className="wth-main">
          <div className="wth-header">
            <div className="wth-search-box">
              <input 
                className="wth-input"
                placeholder="Synchronize region..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onFocus={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
              />
              <div className="wth-search-icon">
                {loading || isTyping ? <div className="spinner-small" /> : <FaSearch />}
              </div>
              {isTyping && <div className="typing-indicator">Neural Link Syncing...</div>}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {loading && !weather ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Retrieving atmospheric data...
              </motion.div>
            ) : weather ? (
              <motion.div 
                className="wth-weather-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={weather.name}
              >
                <div className="wth-hero">
                  <div className="wth-temp-box">
                    <div className="wth-temp">{Math.round(weather.temp)}°</div>
                    <div className="wth-city">{weather.name}</div>
                  </div>
                  <FaCloudSun className="wth-icon-large" />
                </div>
                <div className="wth-details-grid">
                  <div className="wth-detail-item">
                    <FaWind className="wth-detail-icon" />
                    <div className="wth-detail-info">
                      <h4>Wind Velocity</h4>
                      <div className="wth-detail-val">{weather.wind} km/h</div>
                    </div>
                  </div>
                  <div className="wth-detail-item">
                    <FaCloudSun className="wth-detail-icon" style={{ color: '#fb923c' }} />
                    <div className="wth-detail-info">
                      <h4>Condition</h4>
                      <div className="wth-detail-val">STABLE</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : !city && (
              <div style={{ textAlign: 'center', opacity: 0.5 }}>
                <FaCloudSun style={{ fontSize: '4rem', marginBottom: '20px' }} />
                <h3>Enter a city to begin synchronization.</h3>
              </div>
            )}
          </AnimatePresence>
          {error && <div className="wth-error">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;