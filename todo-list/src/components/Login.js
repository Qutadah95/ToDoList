import React, { useState } from 'react'

function Login() {
  const [password,setPassword]=useState("");
  const [username, setUsername] = useState("");


  const handelLogin=async (e)=>{
console.warn(username,password);
let item={username,password};
let ruselt= await fetch('http://localhost:8080/api/login',
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



  };


  return (
    <div>
        <form>
            <label>user name</label>
            <br/><br/>
            <input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='user name'></input>
            <br/><br/>
            <label>password</label>
            <br/><br/>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
            <br/><br/>
        
        
            <button onClick={handelLogin}>log in</button>
        </form>

    </div>
  )
}

export default Login;