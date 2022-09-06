import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

console.log("cookies.get('todos')",cookies.get('todos'));
const TodoList = ({ todos }) => (
  
  <ul className="todo-row">
        {cookies.set('todos', todos, { path: '/' })}

    {cookies.get('todos') && cookies.get('todos').length
      ? cookies.get('todos').map((todo, index) => {
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
