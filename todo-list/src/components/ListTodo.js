import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
export default function ListTodo(props) {


  return (

    <div className='todo-row'>
        {props.todo.text}

    </div>    

  )
}
