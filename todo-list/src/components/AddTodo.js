import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import axios from "axios";
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
   
const newTodo={
  todo:this.state.input,
  isComplet:false
}
console.log("this.state.input",newTodo);

    this.setState({ input: "" });
    axios.post("http://localhost:8080/create",newTodo)
  };

  render() {

    return (
      <div className="todo-form">
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          className='todo-input'
        />
        <button className="todo-button" onClick={this.handleAddTodo }>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);