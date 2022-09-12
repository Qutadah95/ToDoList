import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
    
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>user name</Form.Label>
        <Form.Control  onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter User Name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
     
      <Button  onClick={handelLogin} variant="primary" type="submit">
      log in
      </Button>
    </Form>


   
  )
}

export default Login;