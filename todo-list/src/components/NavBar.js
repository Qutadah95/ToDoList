import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Login from './Login'

const dataUser=JSON.parse(window.localStorage.getItem('user-info'));
// console.log(dataUser);

export const NavBar = () => {
  const navigate = useNavigate();
  const handelLogOut=  ()=>{
    // let navigate = useNavigate();
    navigate("/", { replace: true });
 
    // navigate('/');
    window.localStorage.clear();
    // window.location.reload();
  }
  return (
    <nav className='todo-nav'>
   
      {dataUser?(<><Link to='/AddTodo'>AddTodo</Link><Link to='/ListTodo'>ListTodo</Link><Link to='/EditTodo'>EditTodo</Link><button onClick={handelLogOut}>log out</button></>):<div className='todo-home'><Login/></div>}




    </nav>
  )
}
export default NavBar;