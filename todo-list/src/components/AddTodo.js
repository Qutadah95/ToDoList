import React from 'react'
import TodoForm from './TodoForm'
export default function AddTodo(props) {
  return (
    <div >


        <TodoForm addTodo={props.addTodo} />
    </div>
  )
}
