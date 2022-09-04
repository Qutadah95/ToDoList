import React from 'react'
import {Link} from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import {useAuth0} from '@auth0/auth0-react'
import Home from './Home'
export const NavBar = () => {
 const isAuthenticated=useAuth0();
  console.log(isAuthenticated.isAuthenticated,'Auth0');
  return (
    <nav>
      {isAuthenticated.isAuthenticated?(<><Link to='/AddTodo'>AddTodo</Link><Link to='/ListTodo'>ListTodo</Link><Link to='/EditTodo'>EditTodo</Link></>):<><Home/></>}
{/* <Link to='/AddTodo'>AddTodo</Link>
<Link to='/ListTodo'>ListTodo</Link>
<Link to='/EditTodo'>EditTodo</Link> */}
<LoginButton/>
<LogoutButton/>




    </nav>
  )
}
export default NavBar;