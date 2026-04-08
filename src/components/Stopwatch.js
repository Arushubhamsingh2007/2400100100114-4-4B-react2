import React, { useState, useRef } from "react";

function Stopwatch() {

const [time, setTime] = useState(0);
const timerRef = useRef(null);

const startTimer = () => {
  if (timerRef.current !== null) return;

  timerRef.current = setInterval(() => {
    setTime((prev) => prev + 1);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerRef.current);
  timerRef.current = null;
};

const resetTimer = () => {
  clearInterval(timerRef.current);
  timerRef.current = null;
  setTime(0);
};

return (

<div style={styles.container}>

<h2 style={styles.title}>⏱ Stopwatch</h2>

<h1>{time} sec</h1>

<button style={styles.button} onClick={startTimer}>
Start
</button>

<button style={styles.button} onClick={stopTimer}>
Stop
</button>

<button style={styles.button} onClick={resetTimer}>
Reset
</button>

</div>

);

}

const styles = {

container:{
maxWidth:"420px",
margin:"auto",
padding:"35px",
borderRadius:"15px",
background:"linear-gradient(145deg,#0f2027,#203a43,#2c5364)",
boxShadow:"0 0 30px rgba(0,255,255,0.3)",
textAlign:"center",
color:"white",
border:"1px solid cyan"
},

title:{marginBottom:"20px"},

button:{
margin:"10px",
padding:"10px 20px",
background:"linear-gradient(90deg,#00c6ff,#0072ff)",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer"
}

};

export default Stopwatch;