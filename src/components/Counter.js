// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ marginBottom: "20px" }}>
//       <h2>Counter: {count}</h2>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

import React,{useState} from "react";

function Counter(){

const[count,setCount]=useState(0)

return(

<div style={styles.container}>

<h2 style={styles.title}>🔢 Counter Tool</h2>

<h1>{count}</h1>

<button style={styles.button} onClick={()=>setCount(count+1)}>
Increase
</button>

<button style={styles.button} onClick={()=>setCount(count-1)}>
Decrease
</button>

</div>

)

}

const styles={

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

}

export default Counter
