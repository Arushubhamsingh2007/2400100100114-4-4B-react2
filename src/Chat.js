import React, { useState } from "react";

function Chat({ user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message !== "") {
      setMessages([...messages, { user: user, text: message }]);
      setMessage("");
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "50px" }}>
      <h2>Chat Room</h2>

      <div style={{
        border: "1px solid gray",
        height: "300px",
        overflowY: "scroll",
        padding: "10px"
      }}>
        {messages.map((msg, index) => (
          <p key={index}>
            <b>{msg.user}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "70%" }}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;