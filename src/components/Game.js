import React, { useEffect, useState, useRef } from "react";

function Game() {

const [playerY,setPlayerY] = useState(0);
const [obstacleX,setObstacleX] = useState(800);
const [score,setScore] = useState(0);
const [gameOver,setGameOver] = useState(false);

const velocity = useRef(0);

const gravity = 0.8;
const jumpPower = 20;


// Keyboard control
useEffect(()=>{

const handleKey = (e)=>{

if(e.code==="Space" || e.code==="ArrowUp"){
e.preventDefault();
}

if((e.code==="Space" || e.code==="ArrowUp") && playerY===0 && !gameOver){
velocity.current = jumpPower;
}

};

window.addEventListener("keydown",handleKey);

return ()=>window.removeEventListener("keydown",handleKey);

},[playerY,gameOver]);


// Game loop
useEffect(()=>{

if(gameOver) return;

const interval = setInterval(()=>{

// Jump physics
setPlayerY(prev=>{

let newY = prev + velocity.current;

velocity.current -= gravity;

if(newY < 0){
newY = 0;
velocity.current = 0;
}

return newY;

});


// Move obstacle
setObstacleX(prev=>{

let newX = prev - 8;

if(newX < -40){
setScore(s=>s+1);
return 900;
}

return newX;

});

},30);

return ()=>clearInterval(interval);

},[gameOver]);


// Collision detection
useEffect(()=>{

if(obstacleX < 120 && obstacleX > 60 && playerY < 40){
setGameOver(true);
}

},[obstacleX,playerY]);


// Restart
function restart(){
setPlayerY(0);
velocity.current = 0;
setObstacleX(800);
setScore(0);
setGameOver(false);
}


return(

<div style={styles.container}>

<h1 style={styles.title}>🦊 Runner Game</h1>

<h2>Score: {score}</h2>

<div style={styles.gameArea}>

<div
style={{
...styles.player,
bottom: playerY + "px"
}}
>
🦊
</div>

<div
style={{
...styles.obstacle,
left: obstacleX + "px"
}}
>
🌵
</div>

</div>

<p>Press SPACE or ↑ to Jump</p>

{gameOver && (

<div>

<h2 style={{color:"red"}}>Game Over</h2>

<button style={styles.button} onClick={restart}>
Restart
</button>

</div>

)}

</div>

);

}


const styles = {

container:{
textAlign:"center",
minHeight:"100vh",
padding:"20px",
background:"linear-gradient(135deg,#1e3c72,#2a5298)",
color:"white",
fontFamily:"Arial",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center"
},

title:{
fontSize:"32px"
},

gameArea:{
position:"relative",
width:"90%",
maxWidth:"900px",
height:"250px",
margin:"20px auto",
background:"linear-gradient(#87CEEB,#ffffff)",
borderRadius:"10px",
overflow:"hidden",
border:"4px solid white"
},

player:{
position:"absolute",
left:"80px",
fontSize:"50px",
transition:"bottom 0.05s"
},

obstacle:{
position:"absolute",
bottom:"0px",
fontSize:"40px"
},

button:{
padding:"10px 25px",
background:"#00c6ff",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer",
fontWeight:"bold"
}

};

export default Game;