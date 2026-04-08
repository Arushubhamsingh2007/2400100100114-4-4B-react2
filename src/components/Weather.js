import React, { useState } from "react";

function WeatherDashboard() {

const [city,setCity] = useState("")
const [weather,setWeather] = useState(null)
const [history,setHistory] = useState([])
const [error,setError] = useState("")

async function getWeather(cityName){

try{

// convert city → coordinates
const geo = await fetch(
`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
)

const geoData = await geo.json()

if(!geoData.results){
setError("City not found")
return
}

const lat = geoData.results[0].latitude
const lon = geoData.results[0].longitude
const cityReal = geoData.results[0].name

// weather data
const weatherRes = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
)

const weatherData = await weatherRes.json()

setWeather({
name: cityReal,
temp: weatherData.current_weather.temperature,
wind: weatherData.current_weather.windspeed
})

setError("")

if(!history.includes(cityReal))
setHistory([cityReal,...history])

}catch{

setError("Error fetching weather")

}

}

return(

<div style={styles.container}>

<div style={styles.sidebar}>

<h3>Search History</h3>

{history.map((item,i)=>(
<div key={i}
style={styles.historyItem}
onClick={()=>getWeather(item)}
>
{item}
</div>
))}

</div>

<div style={styles.main}>

<h1>🌦 Weather App</h1>

<input
style={styles.input}
placeholder="Enter city"
onChange={(e)=>setCity(e.target.value)}
/>

<button
style={styles.button}
onClick={()=>getWeather(city)}
>
Search
</button>

{error && <p>{error}</p>}

{weather && (

<div style={styles.card}>

<h2>{weather.name}</h2>

<h1>{weather.temp} °C</h1>

<p>Wind Speed: {weather.wind} km/h</p>

</div>

)}

</div>

</div>

)

}

const styles={

container:{display:"flex",height:"100vh",fontFamily:"Arial"},

sidebar:{
width:"230px",
background:"#0f172a",
color:"white",
padding:"20px"
},

historyItem:{
padding:"10px",
marginTop:"10px",
background:"#1e293b",
borderRadius:"6px",
cursor:"pointer"
},

main:{
flex:1,
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
background:"linear-gradient(135deg,#1e3c72,#2a5298)",
color:"white"
},

input:{
padding:"10px",
width:"240px",
borderRadius:"6px",
border:"none",
marginBottom:"10px"
},

button:{
padding:"10px 20px",
border:"none",
background:"#06b6d4",
color:"white",
borderRadius:"6px",
cursor:"pointer"
},

card:{
marginTop:"20px",
padding:"30px",
borderRadius:"12px",
background:"rgba(255,255,255,0.2)",
textAlign:"center"
}

}

export default WeatherDashboard