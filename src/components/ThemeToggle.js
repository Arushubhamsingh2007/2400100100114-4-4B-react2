import React,{useState} from "react";

function ThemeToggle(){

const[dark,setDark]=useState(false)

const style={
background:dark?"black":"white",
color:dark?"white":"black",
padding:"40px"
}

return(

<div style={style}>

<h2>Theme Toggle</h2>

<button onClick={()=>setDark(!dark)}>Toggle Theme</button>

</div>

)

}

export default ThemeToggle