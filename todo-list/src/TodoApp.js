import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from "react-cookie";



export default function TodoApp() {
  const [cookies, setCookie] = useCookies(["user"]);

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  function handleCookie() {
    setCookie("todos", "gowtham", {
      path: "/"
    });
    console.log("test",);
  }
  return (

    <div className="todo-app">

    <NavBar/>
    
    <Routes>
    <Route path='/AddTodo' element={<AddTodo />} />
    </Routes>
    <Routes>
    <Route path='/ListTodo' element= {<TodoList />} />
 <Route path='/EditTodo' element=  {<><VisibilityFilters /><TodoList /></>} />

   </Routes>
    
   {/* <button onClick={handleCookie}>Set Cookie</button> */}
    </div>

  );

}
