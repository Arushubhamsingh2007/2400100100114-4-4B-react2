import { useState } from "react";

function NameExample() {
  const [likes, setLikes] = useState(0); // Count of likes
  const [name] = useState("Rahul");      // Static name

  // Function to increment likes
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h2>Name: {name}</h2>
      <p>Likes: {likes}</p>
      <button
        onClick={handleLike}
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Like 👍
      </button>
    </div>
  );
}

export default NameExample;