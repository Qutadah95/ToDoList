import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import NavBar from './components/NavBar'
import { useNavigate, Route, Routes } from "react-router-dom";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from './components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react';
import Home from "./components/Home";
import Login from "./components/Login";

const navigate=useNavigate();
const dataUser=JSON.parse(window.localStorage.getItem('user-info'));
export default function TodoApp() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (

    <div className="todo-app">
      {/* <LoginButton/>
      <LogoutButton/> */}

    <NavBar/>
    <Routes>
    <Route path='/' element={<Home />} />
    
    
    <Route path='/AddTodo' element={<AddTodo />} />
    
    
    <Route path='/ListTodo' element= {<TodoList />} />
 <Route path='/EditTodo' element=  {<><VisibilityFilters /><TodoList /></>} />
 
    <Route path='/login' element={<Login />} />
 {/* {dataUser?<Navigate path="/"/>:<></>} */}
   </Routes>
    
   
    </div>

  );
}
