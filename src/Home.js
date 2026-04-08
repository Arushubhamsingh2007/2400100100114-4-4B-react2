import React from "react";

function Home({ user, setPage }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Welcome, {user} 🎉</h1>

        <button style={styles.btn} onClick={() => alert("Feature 1")}>
          Feature 1
        </button>

        <button style={styles.btn} onClick={() => alert("Feature 2")}>
          Feature 2
        </button>

        <button style={styles.logout} onClick={() => setPage("login")}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #43cea2, #185a9d)",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  btn: {
    display: "block",
    width: "200px",
    margin: "15px auto",
    padding: "12px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  logout: {
    marginTop: "20px",
    background: "crimson",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Home;