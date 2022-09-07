import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';
import { Cookies, useCookies } from "react-cookie";
import store from "./redux/store";
import TodoRender from "./components/TodoRender";
import Todo from "./components/Todo";
// import Cookies from 'universal-cookie';

const cookies = new Cookies();

// cookies.getAll()
console.table(cookies.getAll(),"TodoApp");

export default function TodoApp() {
  const [cookies, setCookie] = useCookies(["todos"]);
const {state,setState}=useState('')
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
const arr=[];

  function handleCookie() {

    setCookie("todos", store.getState(0).todos.byIds, {
      path: "/"
    });
    // console.log(arr);
    arr.push(cookies)
    console.log(arr[0].todos,"arr");
  }
console.log(cookies.todos,"dddddd");
const data=cookies.todos;
  return (

    <div className="todo-app">

    <NavBar/>
    
    <Routes>
    <Route path='/AddTodo' element={<AddTodo handleCookie={handleCookie} />} />
    </Routes>
    <Routes>
    <Route path='/ListTodo' element= {<TodoList  />} />
 <Route path='/EditTodo' element=  {<><VisibilityFilters  /><TodoList /></>} />

   </Routes>
{/* <>{cookies.todos.map((todo, index) => {
    return <todo key={`todo-${todo.id}`} todo={todo.content} />;
  })}</> */}
  <ul className="todo-row">

{data && data.length
  ? data.map((todo, index) => {
    return <Todo key={`todo-${todo.id}`} todo={todo} />;
  })
  : "No todos, yay!???"}
</ul>
{/* <>{data[1].content}</>
<>{data[2].content}</>
<>{data[3].content}</> */}
    </div>

  );

}
