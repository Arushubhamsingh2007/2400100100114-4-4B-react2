// import React, { useState } from "react";

// function Login({ setUser }) {
//   const [name, setName] = useState("");

//   const handleLogin = () => {
//     if (name !== "") {
//       setUser(name);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Login to Chat</h2>

//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={handleLogin}>Enter Chat</button>
//     </div>
//   );
// }

// export default Login;

import React,{useState} from "react";

function Login(){

const[user,setUser]=useState("")
const[pass,setPass]=useState("")
const[msg,setMsg]=useState("")

function login(){

if(user==="admin" && pass==="1234")
setMsg("Login Successful")
else
setMsg("Invalid Credentials")

}

return(

<div style={styles.container}>

<h2 style={styles.title}>🔐 Login System</h2>

<input style={styles.input} placeholder="Username"
onChange={(e)=>setUser(e.target.value)}/>

<input style={styles.input} type="password" placeholder="Password"
onChange={(e)=>setPass(e.target.value)}/>

<button style={styles.button} onClick={login}>
Login
</button>

<h3 style={styles.result}>{msg}</h3>

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

input:{
width:"80%",
padding:"12px",
margin:"10px",
borderRadius:"8px",
border:"1px solid cyan",
background:"black",
color:"white"
},

button:{
padding:"10px 20px",
background:"linear-gradient(90deg,#00c6ff,#0072ff)",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer"
},

result:{marginTop:"15px"}

}

export default Login