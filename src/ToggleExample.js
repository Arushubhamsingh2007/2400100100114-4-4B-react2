import { useState } from "react";

function ToggleExample() {
  const [showText, setShowText] = useState(true);

  return (
    <div style={{ marginBottom: "20px" }}>
      {showText && <h2>Hello Student!</h2>}
      <button onClick={() => setShowText(!showText)}>Toggle Text</button>
    </div>
  );
}

export default ToggleExample;