import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCookies } from 'react-cookie';

function Login() {
  const [password,setPassword]=useState("");
  const [username, setUsername] = useState("");
  const [cookies, setCookie] = useCookies(['user-info']);


  const handelLogin=async ()=>{
    console.log(cookies);
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
setCookie('user-info',ruselt);
localStorage.setItem('userName', username);




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