import React from 'react'
import { useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const dataUser=JSON.parse(window.localStorage.getItem('user-info'));
export const NavBar = () => {
  const navigate=useNavigate()
  const handelLogOut=  ()=>{

    navigate('/')
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    <>

    {dataUser?
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/AddTodo">AddTodo</Nav.Link>
          {/* <Nav.Link href="/ListTodo">ListTodo</Nav.Link> */}
          {/* <Nav.Link href="/EditTodo">EditTodo</Nav.Link> */}
          <Nav.Link href="/render">render</Nav.Link>
        </Nav>
      </Container>
      <Button onClick={handelLogOut} variant="danger">log out</Button>
    </Navbar>
    :<div onClick={()=>{    navigate('/Login')
  }}></div>}
    </>
  )
}
export default NavBar;