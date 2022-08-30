import React from 'react'
import {Link} from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav>
<Link to='/AddTodo'>AddTodo</Link>
<Link to='/ListTodo'>ListTodo</Link>



    </nav>
  )
}
