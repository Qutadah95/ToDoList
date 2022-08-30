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
    console.log(text);
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, text: text, completed: false }
    let newTodo=[todo, ...todos]
    console.log(newTodo);
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
    console.log('value',todos)
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/AddTodo' element={<AddTodo />} />
    <Route path='/ListTodo' element={<ListTodo />} />

    </Routes>
    <div className="todo-app">
      <h1>to do list</h1>
{}
      <TodoForm addTodo={addTodo} />
<ListTodo todos={todos}/>
      {todos.map((todo)=>{
        return(
        <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo}/>
        )})} 
              {/* <ListTodo value={value}/> */}

    </div>
    </>
  );
}

export default App;
