import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTerminal, FaStar, FaInfoCircle } from "react-icons/fa";

function Calendar() {
  const [currDate, setCurrDate] = useState(new Date());
  
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Neural Holiday Database
  const holidays = {
    "0-1": "New Year's Day • Matrix Reset",
    "0-14": "Makar Sankranti • Solar Transition",
    "0-26": "Republic Day • Tactical Freedom",
    "1-14": "Valentine's Day • Neural Sync",
    "2-8": "Holi • Chroma Shift",
    "3-22": "Earth Day • Planetary Status",
    "4-1": "May Day • Labor Protocol",
    "7-15": "Independence Day • Sovereign Mode",
    "9-2": "Gandhi Jayanti • Peace Protocol",
    "9-31": "Halloween • Ghost Node",
    "11-25": "Christmas • Winter Solstice",
  };

  const changeMonth = (offset) => {
    setCurrDate(new Date(currDate.getFullYear(), currDate.getMonth() + offset, 1));
  };

  const currentYear = currDate.getFullYear();
  const currentMonth = currDate.getMonth();
  const totalDays = daysInMonth(currentYear, currentMonth);
  const startDay = firstDayOfMonth(currentYear, currentMonth);
  
  const today = new Date();
  const isToday = (day) => 
    day === today.getDate() && 
    currentMonth === today.getMonth() && 
    currentYear === today.getFullYear();

  const getHoliday = (day) => holidays[`${currentMonth}-${day}`];

  return (
    <div className="cal-root">
      <style>{`
        .cal-root {
          width: 100%;
          height: 95%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cal-container {
          flex: 1;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 4px solid var(--accent-color);
          border-radius: 30px;
          padding: 30px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
        }

        .cal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .cal-month-title {
          font-family: 'Orbitron';
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: 4px;
        }

        .cal-month-title span {
          color: var(--accent-color);
          opacity: 0.6;
          margin-left: 10px;
        }

        .cal-nav-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cal-nav-btn:hover {
          background: var(--accent-color);
          color: #000;
          box-shadow: 0 0 20px var(--accent-glow);
        }

        .cal-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-template-rows: auto repeat(6, 1fr);
          gap: 12px;
        }

        .cal-day-label {
          text-align: center;
          font-family: 'Fira Code';
          font-size: 0.75rem;
          color: var(--accent-color);
          font-weight: 800;
          letter-spacing: 2px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .cal-cell {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Orbitron';
          font-size: 1.1rem;
          color: #cbd5e1;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.03);
          background: rgba(255,255,255,0.02);
          cursor: pointer;
          transition: all 0.3s;
          min-height: 60px;
        }

        .cal-cell:hover:not(.empty) {
          background: rgba(255,255,255,0.07);
          border-color: var(--accent-color);
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          z-index: 10;
        }

        .cal-cell.today {
          background: var(--accent-color);
          color: #000 !important;
          box-shadow: 0 0 30px var(--accent-glow);
          border-color: #fff;
          font-weight: 900;
        }

        .cal-cell.holiday {
          border-color: #fbbf24;
          background: rgba(251, 191, 36, 0.05);
        }

        .holiday-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 6px;
          height: 6px;
          background: #fbbf24;
          border-radius: 50%;
          box-shadow: 0 0 8px #fbbf24;
        }

        .holiday-label {
          position: absolute;
          bottom: 5px;
          font-family: 'Fira Code';
          font-size: 0.5rem;
          color: #fbbf24;
          text-align: center;
          width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 700;
        }

        .cal-footer {
          margin-top: 20px;
          padding: 15px 30px;
          background: rgba(0,0,0,0.2);
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Fira Code';
          font-size: 0.8rem;
          color: #64748b;
        }

        .event-active {
          color: #fbbf24;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }
      `}</style>

      <motion.div 
        className="cal-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="cal-header">
          <div className="cal-month-title">
            {monthNames[currentMonth].toUpperCase()} <span>{currentYear}</span>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="cal-nav-btn" onClick={() => changeMonth(-1)}><FaChevronLeft /></button>
            <button className="cal-nav-btn" onClick={() => changeMonth(1)}><FaChevronRight /></button>
          </div>
        </div>

        <div className="cal-grid">
          {days.map(d => <div key={d} className="cal-day-label">{d}</div>)}
          
          {[...Array(startDay)].map((_, i) => <div key={`e-${i}`} className="cal-cell empty"></div>)}
          
          {[...Array(totalDays)].map((_, i) => {
            const day = i + 1;
            const currentIsToday = isToday(day);
            const holidayName = getHoliday(day);
            return (
              <motion.div 
                key={day} 
                className={`cal-cell ${currentIsToday ? 'today' : ''} ${holidayName ? 'holiday' : ''}`}
                whileHover={{ zIndex: 10 }}
              >
                {day}
                {holidayName && <div className="holiday-dot"></div>}
                {holidayName && <div className="holiday-label">{holidayName.split('•')[0]}</div>}
              </motion.div>
            );
          })}
        </div>

        <div className="cal-footer">
          <div className="event-active">
            {Object.keys(holidays).some(k => k.startsWith(`${currentMonth}-`)) ? (
              <><FaStar /> {monthNames[currentMonth]} Events Detected</>
            ) : (
              <><FaInfoCircle /> No Major Protocols Scheduled</>
            )}
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
             <span><FaTerminal /> CHRONOS_SYNC: ACTIVE</span>
             <span>v2.0.4</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Calendar;
