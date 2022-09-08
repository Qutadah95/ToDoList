import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';




export default function TodoApp() {

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>



  return (

    <div className="todo-app">

    <NavBar/>
    
    <Routes>
    <Route path='/AddTodo' element={<AddTodo />} />
    </Routes>
    <Routes>
    <Route path='/ListTodo' element= {<TodoList  />} />
 <Route path='/EditTodo' element=  {<><VisibilityFilters  /><TodoList /></>} />

   </Routes>

    </div>

  );

}
