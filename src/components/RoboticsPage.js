import React from "react";
import { motion } from "framer-motion";

function RoboticsPage() {
  return (
    <div style={styles.container}>

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.title}
      >
        🤖 Robotics Interface
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={styles.text}
      >
        Welcome to the futuristic robotic control panel.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={styles.button}
      >
        Activate System
      </motion.button>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "radial-gradient(circle, #020024, #090979, #000000)",
    color: "cyan",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Orbitron"
  },

  title: {
    fontSize: "50px",
    textShadow: "0px 0px 20px cyan"
  },

  text: {
    fontSize: "20px",
    margin: "20px"
  },

  button: {
    padding: "15px 40px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "2px solid cyan",
    background: "transparent",
    color: "cyan",
    cursor: "pointer",
    boxShadow: "0 0 20px cyan"
  }
};

export default RoboticsPage;