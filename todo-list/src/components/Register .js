import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Register () {
    const [password,setPassword]=useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const handelregister =async ()=>{
      let item={username,password,email};
      let ruselt= await fetch('http://localhost:8080/register',
      {
        method:'POST',
        headers:{
         "Content-Type":"application/json","Accept":"application/json"
        },
        body:JSON.stringify(item)
      });
      ruselt= await ruselt.json();
      console.log(ruselt);
    }
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Email" />
      </Form.Group>
     
      <Button  onClick={handelregister } variant="primary" type="submit">
      register 
      </Button>
    </Form>
  )
}

export default Register 