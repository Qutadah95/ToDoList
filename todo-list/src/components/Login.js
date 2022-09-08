import React, { useState } from 'react'

function Login() {
  // const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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

  // const  handelLoginx=(e)=>{
  //   e.preventDefault();
  //   console.log('test');
  // }
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
            {/* <button onClick={handelLoginx}>test</button> */}
        </form>

    </div>
  )
}

export default Login;