import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, text: text, completed: false }
    let newTodo=[todo, ...todos]
    setTodos(newTodo)
    
  }
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const value=todos.map((todo)=>{
    return(
    <TodoItem todo={todo} key={todo.id} />
    )})
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/AddTodo' element={<AddTodo addTodo={addTodo}/>} />
    </Routes>
    <Routes>
    <Route path='/ListTodo' element=  {todos.map((todo)=>{
        return(
        <ListTodo todo={todo} key={todo.id} />
        )})} />
 <Route path='/EditTodo' element=  {todos.map((todo)=>{
        return(
        <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo}/>
        )})} />

   </Routes>
    
   
    </>
  );
}

export default App;
