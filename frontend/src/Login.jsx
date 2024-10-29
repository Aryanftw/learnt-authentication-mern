import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleemail = (e)=>{
    setEmail(e.target.value)
  }

  const handlepassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/login',{email,password}).then(response => console.log(response.data).catch(e=>console.log(e)))
    setEmail("")
    setPassword("")
    
  }


  return (
    <>
      <div>
        <h3>
          Not yet registered ? <Link to="/register">Register Here</Link>
        </h3>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your email" required onChange={handleemail}/>
        <input type= "password" required placeholder="Enter password" onChange={handlepassword}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
