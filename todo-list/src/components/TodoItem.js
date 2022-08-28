import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
export default function TodoItem(props) {


  return (
    <div className='todo-row'>
        
{props.todo.text}
<div className='iconsContainer'>
<AiOutlineCloseCircle onClick={()=>props.removeTodo(props.todo.id)}/>
</div>
    </div>
  )
}
