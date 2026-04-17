import { useState } from "react";

function ObjectExample() {
  const [user, setUser] = useState({ name: "Aru", age: 25 });

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>User Info:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

export default ObjectExample;