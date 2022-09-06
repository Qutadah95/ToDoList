import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
// import { useCookies } from 'react-cookie';

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
   


    this.setState({ input: "" });
  };

  render() {
    // const [cookies, setCookie] = useCookies([]);

  //   const handle = () => {
  //     setCookie('todos', this.state.input, { path: '/' });
  //     console.log(cookies.get('todos'));
  //  };

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
