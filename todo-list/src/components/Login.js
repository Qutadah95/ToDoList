import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const handelLogin=async (e)=>{
// e.preventDefault();
console.warn(userName,password);
let item={userName,password};
let ruselt= await fetch('http://localhost:8080/api/users',
{
  method:'POST',
  headers:{
   "Content-Type":"application/json","Accept":"application/json"
  },
  body:JSON.stringify(item)
});
ruselt= await ruselt.json();
console.warn('result',ruselt);
localStorage.setItem("user-info",JSON.stringify(ruselt));

// useNavigate('/')


  };

  const  handelLoginx=(e)=>{
    e.preventDefault();
    console.log('test');
  }
  return (
    <div>
        <form>
            <label>user name</label>
            <br/><br/>
            <input type='text' onChange={(e)=>setUserName(e.target.value)} placeholder='user name'></input>
            <br/><br/>
            <label>password</label>
            <br/><br/>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
            <br/><br/>
        
        
            <button onClick={handelLogin}>log in</button>
            <button onClick={handelLoginx}>test</button>
        </form>

    </div>
  )
}

export default Login;