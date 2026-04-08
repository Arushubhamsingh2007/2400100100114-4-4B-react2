// import React, { useState } from "react";

// function Registration() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(formData.password !== formData.confirmPassword){
//       alert("Passwords do not match ❌");
//       return;
//     }

//     alert("Registration Successful ✅");

//     console.log(formData);
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Register Here ✨</h2>

//       <form onSubmit={handleSubmit} style={styles.form}>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Register 🚀</button>

//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     width: "300px",
//     margin: "100px auto",
//     textAlign: "center",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 10px gray"
//   },

//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px"
//   }
// };

// export default Registration;

import React,{useState} from "react";

function Registration(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function register(){
alert("Registered Successfully " + name)
}

return(

<div>

<h2>Registration</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={register}>Register</button>

</div>

)

}

export default Registration