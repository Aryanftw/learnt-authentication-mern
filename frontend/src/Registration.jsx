import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleemail = (e)=>{
    setEmail(e.target.value)
  }

  const handlepassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await axios.post('http://localhost:8000/register',{email,password}).then(response => console.log(response.data).catch(e=>console.log(e)))
    setEmail("")
    setPassword("")
  }


  return (
    <>
      <div>
        <h1>
          Registration Page
        </h1>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your email" required onChange={handleemail}/>
        <input type= "password" required placeholder="Enter password" onChange={handlepassword}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Registration;
