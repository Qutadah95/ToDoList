import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";

export default function TodoApp() {
  return (

    <>
    <NavBar/>
    <Routes>
    <Route path='/AddTodo' element={<AddTodo />} />
    </Routes>
    <Routes>
    <Route path='/ListTodo' element= {<TodoList />} />
 <Route path='/EditTodo' element=  {<VisibilityFilters />} />

   </Routes>
    
   
    </>
    // <div className="todo-app">
    //   <h1>Todo List</h1>
    //   <NavBar/>

    //   <AddTodo />
    //   <TodoList />
    //   <VisibilityFilters />
    // </div>
  );
}
