import React from "react";
import AddTodo from "./components/AddTodo";
import "./styles.css";
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';
import TodoRender from "./components/TodoRender";
import Home from "./components/Home";
import Register from "./components/Register ";
import Login from "./components/Login";




export default function TodoApp() {

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>



  return (

    <div className="todo-app">

    <NavBar/>
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    <Routes>
    <Route path='/AddTodo' element={<AddTodo />} />
    </Routes>
    <Routes>
    <Route path='/register' element={<Register />} />
    </Routes>
    <Routes>
    <Route path='/render' element={<TodoRender />} />
   </Routes>
   <Routes>
    <Route path='/Login' element={<Login />} />
   </Routes>
    </div>

  );

}
