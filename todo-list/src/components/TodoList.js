import React  from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
// const [todo,setTodo]=useState('')
// axios.get('http://localhost:8080/list')
// .then((response) => {
//   const data = response.data;
//   setTodo(data)
//   console.log('Data has been received!!');
// })
// .catch(() => {
//   alert('Error retrieving data!!!');
// });
// console.log("ddddd",todo);

const TodoList = ({ todos }) => (
  
  <ul className="todo-row">

{todos && todos.length
   ? todos.map((todo, index) => { 
     return <Todo key={`todo-${todo.id}`} todo={todo} />; 
   }) 
    : "No todos, yay!"}
  </ul>
);



const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);

  return { todos };
}
  export default connect(mapStateToProps)(TodoList);
