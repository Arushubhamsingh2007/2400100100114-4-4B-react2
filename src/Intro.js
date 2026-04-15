import React from "react";
import { motion } from "framer-motion";

const text = "My React Project";

const Intro = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -50, color: "cyan" }}
          animate={{ opacity: 1, y: 0, color: getRandomColor() }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          style={{ fontSize: "40px", fontWeight: "bold", marginRight: "5px" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Helper function for random colors
function getRandomColor() {
  const colors = ["cyan", "yellow", "lime", "orange", "pink", "purple", "red"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default Intro;