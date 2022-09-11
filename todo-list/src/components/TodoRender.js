import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Todo from './Todo';

 function TodoRender() {
  const [todo,setTodo]=useState('')
    // let item={todo.todo,};
    // useEffect(()=>{
    //   fetch('http://localhost:8080/list').then(res=>{
    //     if(res.ok){
    //       return res.json()
    //     }
    //   }).then(jsonRes=>{setTodo(jsonRes)});
    // })
   
      axios.get('http://localhost:8080/list')
        .then((response) => {
          const data = response.data;
          setTodo(data)
          console.log('Data has been received!!');
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        });
        console.log("ddddd",todo);
    

    // ruselt=  ruselt.json();
    // console.warn('result',ruselt);
 
  
  return (
    <>
    <div>
      <ul className="todo-row">

{todo && todo.length
   ? todo.map((todoo, index) => { 
     return<li>{todoo.todo}</li> ; 
   }) 
    : "No todos, yay!"}
  </ul> 

{/* <ul className="todo-row">

{todo && todo.length
   ? todo.map((todo, index) => { 
     return <Todo key={`todo-${todo.id}`} todo={todo} />; 
   }) 
    : "No todos, yay!"}
  </ul> */}
  </div>
    {/* <div> {todo.map(note=>(<h1>{todo}</h1>))} </div> */}
    
    </>
  )
}

export default TodoRender