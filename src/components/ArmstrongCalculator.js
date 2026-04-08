import React,{useState} from "react";

function ArmstrongCalculator(){

const[num,setNum]=useState("")
const[result,setResult]=useState("")

function check(){

let n=parseInt(num)
let sum=0

while(n>0){

let r=n%10
sum=sum+r*r*r
n=parseInt(n/10)

}

if(sum===parseInt(num))
setResult("✅ Armstrong Number")
else
setResult("❌ Not an Armstrong Number")

}

return(

<div style={styles.container}>

<h2 style={styles.title}>🔢 Armstrong Number Checker</h2>

<p style={styles.description}>
Enter a number to check whether it is an Armstrong number.
Example: 153 = 1³ + 5³ + 3³
</p>

<input
type="number"
placeholder="Enter number..."
style={styles.input}
onChange={(e)=>setNum(e.target.value)}
/>

<button style={styles.button} onClick={check}>
Check Number
</button>

<h3 style={styles.result}>{result}</h3>

</div>

)

}

const styles={

container:{
maxWidth:"450px",
margin:"auto",
padding:"40px",
borderRadius:"15px",
background:"linear-gradient(145deg,#0f2027,#203a43,#2c5364)",
boxShadow:"0 0 30px rgba(0,255,255,0.4)",
textAlign:"center",
color:"white",
border:"1px solid cyan",
transition:"0.3s"
},

title:{
marginBottom:"10px",
letterSpacing:"1px"
},

description:{
fontSize:"14px",
opacity:"0.8",
marginBottom:"25px"
},

input:{
padding:"12px",
width:"80%",
borderRadius:"8px",
border:"1px solid cyan",
background:"black",
color:"white",
marginBottom:"20px",
outline:"none"
},

button:{
padding:"12px 25px",
borderRadius:"8px",
border:"none",
background:"linear-gradient(90deg,#00c6ff,#0072ff)",
color:"white",
fontWeight:"bold",
cursor:"pointer",
transition:"0.3s"
},

result:{
marginTop:"20px",
fontSize:"20px"
}

}

export default ArmstrongCalculator