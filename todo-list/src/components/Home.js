import React  from 'react'
import Login from './Login'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

// const [cookies, setCookie] = useCookies();
// const newCookies=new cookies()
// console.log(newCookies);
const cookies = new Cookies();
const dataUser=cookies.get('user-info');

// cookies.getAll()
console.table(cookies.getAll(),"TodoApp");
export const Home = () => {

  const navigate=useNavigate()
  const nav = ()=>{
    navigate('/AddTodo')
  
  }

  return (
    <>{!dataUser? <div onClick={()=>{    window.location.reload();
    }}><Login/></div>:<><h1>You are logged in go to add todo to start </h1> <Button variant="primary" onClick={nav}>
    Go to AddTodo
  </Button>  </>}
   
    </>
    )
}
export default Home;