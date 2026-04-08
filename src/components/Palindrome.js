import React,{useState} from "react";

function Palindrome(){

const[text,setText]=useState("")
const[result,setResult]=useState("")

function check(){

let rev=text.split("").reverse().join("")

if(text===rev)
setResult("Palindrome")
else
setResult("Not Palindrome")

}

return(

<div style={styles.container}>

<h2 style={styles.title}>🔤 Palindrome Checker</h2>

<input style={styles.input}
placeholder="Enter text"
onChange={(e)=>setText(e.target.value)}/>

<button style={styles.button} onClick={check}>
Check
</button>

<h3>{result}</h3>

</div>

)

}

const styles={

container:{
maxWidth:"420px",
margin:"auto",
padding:"35px",
borderRadius:"15px",
background:"linear-gradient(145deg,#141e30,#243b55)",
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
}

}

export default Palindrome