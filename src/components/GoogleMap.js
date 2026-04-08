import React, { useState } from "react";

function GoogleMap(){

const [city,setCity] = useState("Lucknow");
const [search,setSearch] = useState("");
const [history,setHistory] = useState(["Lucknow"]);

function searchCity(){

if(!search.trim()) return;

setCity(search);

if(!history.includes(search)){
setHistory([search,...history]);
}

setSearch("");

}

return(

<div style={styles.container}>

{/* Sidebar */}
<div style={styles.sidebar}>

<h2 style={styles.sidebarTitle}>📍 History</h2>

{history.map((item,index)=>(
<div
key={index}
style={styles.historyItem}
onClick={()=>setCity(item)}
>
{item}
</div>
))}

</div>


{/* Main Map Section */}
<div style={styles.main}>

<h1 style={styles.title}>🌍 Map Explorer</h1>

<div style={styles.searchBox}>

<input
style={styles.input}
placeholder="Search city..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button style={styles.button} onClick={searchCity}>
Search
</button>

</div>


<div style={styles.mapCard}>

<iframe
title="map"
width="100%"
height="420"
style={styles.map}
src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
/>

</div>

</div>

</div>

)

}

const styles={

container:{
display:"flex",
height:"100vh",
fontFamily:"Arial"
},

sidebar:{
width:"240px",
background:"#0f172a",
color:"white",
padding:"20px",
boxShadow:"2px 0 10px rgba(0,0,0,0.3)"
},

sidebarTitle:{
marginBottom:"15px"
},

historyItem:{
padding:"10px",
marginTop:"10px",
background:"#1e293b",
borderRadius:"8px",
cursor:"pointer",
transition:"0.3s"
},

main:{
flex:1,
background:"linear-gradient(135deg,#1e3c72,#2a5298)",
display:"flex",
flexDirection:"column",
alignItems:"center",
paddingTop:"40px",
color:"white"
},

title:{
marginBottom:"20px"
},

searchBox:{
display:"flex",
gap:"10px",
marginBottom:"20px"
},

input:{
padding:"10px",
width:"240px",
borderRadius:"8px",
border:"none"
},

button:{
padding:"10px 20px",
background:"#06b6d4",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer",
fontWeight:"bold"
},

mapCard:{
width:"70%",
borderRadius:"15px",
overflow:"hidden",
boxShadow:"0 10px 25px rgba(0,0,0,0.4)",
background:"rgba(255,255,255,0.15)",
backdropFilter:"blur(10px)",
padding:"10px"
},

map:{
border:"0",
borderRadius:"12px"
}

}

export default GoogleMap