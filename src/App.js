
//THIS IS THE PROGRAM FOR THE COUNTER APP USING USESTATE HOOK IN REACT

// import React, { useState } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   const containerStyle = {
//     textAlign: "center",
//     marginTop: "100px",
//     fontFamily: "Arial"
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     margin: "10px",
//     fontSize: "20px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer"
//   };

//   return (
//     <div style={containerStyle}>

//       <h1>Counter App 🔢</h1>

//       <h2>{count}</h2>

//       <button
//         style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white" }}
//         onClick={increment}
//       >
//         +
//       </button>

//       <button
//         style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
//         onClick={decrement}
//       >
//         -
//       </button>

//       <br />

//       <button
//         style={{ ...buttonStyle, backgroundColor: "#2196F3", color: "white" }}
//         onClick={reset}
//       >
//         Reset 🔄
//       </button>

//     </div>
//   );
// }

// export default App;


//this is for registration page.js

// import React, { useState } from "react";

// function App() {

//   const [page, setPage] = useState("login");

//   const goToRegister = () => {
//     setPage("register");
//   };

//   const goToLogin = () => {
//     setPage("login");
//   };

//   return (
//     <div style={{textAlign:"center", marginTop:"100px"}}>

//       {page === "login" && (
//         <div>
//           <h2>Login Page 🔐</h2>

//           <input type="text" placeholder="Enter Username" /><br/><br/>
//           <input type="password" placeholder="Enter Password" /><br/><br/>

//           <button onClick={goToRegister}>Login</button>
//         </div>
//       )}

//       {page === "register" && (
//         <div>
//           <h2>Register Page 📝</h2>

//           <input type="text" placeholder="Enter Name" /><br/><br/>
//           <input type="email" placeholder="Enter Email" /><br/><br/>
//           <input type="password" placeholder="Enter Password" /><br/><br/>

//           <button>Register</button><br/><br/>

//           <button onClick={goToLogin}>Back to Login</button>
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;



//Here below  is the program using the usestate

// import React from "react";
// import Counter from "./Counter";
// import NameExample from "./NameExample";
// import ToggleExample from "./ToggleExample";
// import ArrayExample from "./TodoList";
// import ObjectExample from "./ObjectExample";

// function App() {
//   return (
//     <div
//       style={{
//         display: "flex",           // Use flexbox
//         flexDirection: "column",   // Stack components vertically
//         alignItems: "center",      // Center horizontally
//         justifyContent: "center",  // Center vertically
//         minHeight: "100vh",        // Full screen height
//         textAlign: "center",       // Center text
//         fontFamily: "Arial",
//         padding: "20px",
//         backgroundColor: "#f0f0f0" // Optional light background
//       }}
//     >
//       <h1>5 Simple useState Examples</h1>
//       <Counter />
//       <hr style={{ width: "50%" }} />
//       <NameExample />
//       <hr style={{ width: "50%" }} />
//       <ToggleExample />
//       <hr style={{ width: "50%" }} />
//       <ArrayExample />
//       <hr style={{ width: "50%" }} />
//       <ObjectExample />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// import Login from "./Login";
// import Registration from "./Registration";
// import TodoList from "./TodoList";
// import Counter from "./Counter";
// import NameExample from "./NameExample";
// import ToggleExample from "./ToggleExample";
// import ObjectExample from "./ObjectExample";
// import Chat from "./Chat";

// function App() {

//   const [page, setPage] = useState("");

//   return (
//     <div style={container}>

//       <h1 style={title}>✨ React Magic Dashboard ✨</h1>

//       {/* Menu Buttons */}
//       <div style={menu}>

//         <button style={btn} onClick={() => setPage("login")}>Login</button>
//         <button style={btn} onClick={() => setPage("registration")}>Registration</button>
//         <button style={btn} onClick={() => setPage("todolist")}>TodoList</button>
//         <button style={btn} onClick={() => setPage("counter")}>Counter</button>
//         <button style={btn} onClick={() => setPage("nameexample")}>NameExample</button>
//         <button style={btn} onClick={() => setPage("toggle")}>ToggleExample</button>
//         <button style={btn} onClick={() => setPage("object")}>ObjectExample</button>
//         <button style={btn} onClick={() => setPage("chat")}>Chat</button>

//       </div>

//       {/* Display Components */}
//       <div style={content}>

//         {page === "login" && <Login />}
//         {page === "registration" && <Registration />}
//         {page === "todolist" && <TodoList />}
//         {page === "counter" && <Counter />}
//         {page === "nameexample" && <NameExample />}
//         {page === "toggle" && <ToggleExample />}
//         {page === "object" && <ObjectExample />}
//         {page === "chat" && <Chat />}

//       </div>

//     </div>
//   );
// }

// /* Magical Background */

// const container = {
//   minHeight: "100vh",
//   textAlign: "center",
//   padding: "40px",
//   background: "linear-gradient(135deg,#667eea,#764ba2,#6dd5ed)",
//   color: "white",
//   fontFamily: "Arial"
// };

// const title = {
//   fontSize: "40px",
//   marginBottom: "30px",
//   textShadow: "0px 4px 10px rgba(0,0,0,0.4)"
// };

// const menu = {
//   display: "flex",
//   justifyContent: "center",
//   flexWrap: "wrap",
//   gap: "15px",
//   marginBottom: "30px"
// };

// const btn = {
//   padding: "12px 22px",
//   border: "none",
//   borderRadius: "25px",
//   background: "linear-gradient(45deg,#ff6a00,#ee0979)",
//   color: "white",
//   fontSize: "15px",
//   cursor: "pointer",
//   boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
//   transition: "0.3s"
// };

// const content = {
//   background: "rgba(255,255,255,0.15)",
//   padding: "30px",
//   borderRadius: "15px",
//   backdropFilter: "blur(10px)"
// };

// export default App;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
FaSignInAlt,
FaUserPlus,
FaCalculator,
FaClock,
FaList,
FaFont,
FaCube,
FaPalette,
FaMapMarkedAlt,
FaCloudSun,
FaGamepad
} from "react-icons/fa";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Counter from "./components/Counter";
import Stopwatch from "./components/Stopwatch";
import TodoList from "./components/TodoList";
import Palindrome from "./components/Palindrome";
import ArmstrongCalculator from "./components/ArmstrongCalculator";
import ThemeToggle from "./components/ThemeToggle";
import GoogleMap from "./components/GoogleMap";
import Weather from "./components/Weather";
import Game from "./components/Game";

function App(){

const [page,setPage] = useState("");

return(

<div style={styles.main}>

{/* Header */}
<div style={styles.header}>
<div style={styles.home} onClick={()=>setPage("")}>🏠 Home</div>
<div style={styles.name}>Aru Shubham Singh</div>
</div>

<h1 style={styles.title}>⚛ React Project Dashboard</h1>

<p style={styles.description}>
This interactive dashboard contains multiple small React modules such as login
systems, utilities, and mini applications. The design is inspired by futuristic
robotic control panels used in computer science systems.
</p>

{page === "" && (

<div style={styles.grid}>

<Card
title="Login"
desc="Secure login authentication interface"
icon={<FaSignInAlt size={40}/>}
page="login"
setPage={setPage}
/>

<Card
title="Registration"
desc="Create and register new users"
icon={<FaUserPlus size={40}/>}
page="registration"
setPage={setPage}
/>

<Card
title="Counter"
desc="Simple number increment & decrement tool"
icon={<FaCalculator size={40}/>}
page="counter"
setPage={setPage}
/>

<Card
title="Stopwatch"
desc="Measure time with precision"
icon={<FaClock size={40}/>}
page="stopwatch"
setPage={setPage}
/>

<Card
title="Todo List"
desc="Organize daily tasks efficiently"
icon={<FaList size={40}/>}
page="todolist"
setPage={setPage}
/>

<Card
title="Palindrome"
desc="Check whether text is palindrome"
icon={<FaFont size={40}/>}
page="palindrome"
setPage={setPage}
/>

<Card
title="Armstrong"
desc="Calculate Armstrong numbers"
icon={<FaCube size={40}/>}
page="armstrong"
setPage={setPage}
/>

<Card
title="Theme Toggle"
desc="Switch between UI themes"
icon={<FaPalette size={40}/>}
page="theme"
setPage={setPage}
/>

<Card
title="Map"
desc="Interactive map location viewer"
icon={<FaMapMarkedAlt size={40}/>}
page="map"
setPage={setPage}
/>

<Card
title="Weather"
desc="Check real-time weather updates"
icon={<FaCloudSun size={40}/>}
page="weather"
setPage={setPage}
/>

<Card
title="Jump Game"
desc="Fun obstacle jumping game"
icon={<FaGamepad size={40}/>}
page="game"
setPage={setPage}
center
/>

</div>

)}

<AnimatePresence>

{page !== "" && (

<motion.div
style={styles.module}
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
exit={{opacity:0,scale:0.8}}
transition={{duration:0.4}}
>

<div style={styles.moduleHeader}>

<h2 style={styles.moduleTitle}>{page.toUpperCase()} MODULE</h2>

<button style={styles.back} onClick={()=>setPage("")}>
⬅ Back
</button>

</div>

<div style={styles.moduleContent}>

{page==="login" && <Login/>}
{page==="registration" && <Registration/>}
{page==="counter" && <Counter/>}
{page==="stopwatch" && <Stopwatch/>}
{page==="todolist" && <TodoList/>}
{page==="palindrome" && <Palindrome/>}
{page==="armstrong" && <ArmstrongCalculator/>}
{page==="theme" && <ThemeToggle/>}
{page==="map" && <GoogleMap/>}
{page==="weather" && <Weather/>}
{page==="game" && <Game/>}

</div>

</motion.div>

)}

</AnimatePresence>

</div>

)

}

function Card({title,desc,icon,page,setPage,center}){

return(

<motion.div
style={{
...styles.card,
gridColumn:center ? "2" : "auto"
}}
whileHover={{
scale:1.08,
boxShadow:"0 0 25px cyan"
}}
whileTap={{scale:0.9}}
onClick={()=>setPage(page)}
>

<div style={styles.icon}>{icon}</div>

<h3>{title}</h3>

<p style={styles.cardDesc}>{desc}</p>

</motion.div>

)

}

const styles={

main:{
minHeight:"100vh",
backgroundColor:"black",
backgroundImage:
"url('https://images.unsplash.com/photo-1581094794329-c8112a89af12'), url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
backgroundSize:"cover",
backgroundBlendMode:"overlay",
color:"white",
padding:"30px",
textAlign:"center"
},

header:{
display:"flex",
justifyContent:"space-between",
borderBottom:"1px solid cyan",
paddingBottom:"10px",
marginBottom:"20px"
},

home:{
cursor:"pointer"
},

name:{
fontWeight:"bold"
},

title:{
fontSize:"44px",
marginBottom:"10px"
},

description:{
maxWidth:"650px",
margin:"auto",
marginBottom:"40px",
opacity:"0.9"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"35px",
maxWidth:"900px",
margin:"auto",
justifyItems:"center"
},

card:{
width:"230px",
height:"190px",
border:"1px solid cyan",
borderRadius:"15px",
background:"rgba(255,255,255,0.05)",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
padding:"15px",
cursor:"pointer"
},

icon:{
marginBottom:"10px"
},

cardDesc:{
fontSize:"13px",
opacity:"0.8",
marginTop:"5px"
},

module:{
margin:"40px auto",
maxWidth:"900px",
padding:"30px",
border:"1px solid cyan",
borderRadius:"15px",
background:"rgba(0,0,0,0.85)"
},

moduleHeader:{
display:"flex",
justifyContent:"space-between",
marginBottom:"20px"
},

moduleTitle:{
fontSize:"30px"
},

moduleContent:{
background:"rgba(255,255,255,0.05)",
padding:"25px",
borderRadius:"10px"
},

back:{
padding:"8px 15px",
border:"1px solid cyan",
background:"black",
color:"cyan",
cursor:"pointer"
}

}

export default App;