import React from 'react'
import {Link} from 'react-router-dom'

import Login from './Login'

const dataUser=JSON.parse(window.localStorage.getItem('user-info'));
console.log(dataUser);
export const NavBar = () => {
  const handelLogOut=  ()=>{
    // let navigate = useNavigate();
    // navigate("/", { replace: true });
 
    // navigate('/');
    
    window.localStorage.clear();
    window.location.reload();
  }
//  const isAuthenticated=useAuth0();
//   console.log(isAuthenticated.isAuthenticated,'Auth0');
  return (
    <nav>
   {dataUser?(<><Link to='/AddTodo'>AddTodo</Link><Link to='/ListTodo'>ListTodo</Link><Link to='/EditTodo'>EditTodo</Link><button onClick={handelLogOut}>log out</button></>):<div className='todo-home'><Login/></div>}




    </nav>
  )
}
export default NavBar;