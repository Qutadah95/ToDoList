import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const userNameS= localStorage.getItem("userName")

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

    this.setState({ input: "" });
    axios.post(`http://localhost:8080/addTodo/?userNameS=${userNameS}`,newTodo)
  };

  render() {

    return (
      <Form>
      <Form.Group  onChange={e => this.updateInput(e.target.value)} className="mb-3" value={this.state.input}>
        <Form.Label>Add Todo</Form.Label>
        <Form.Control type="text" placeholder="Add to do" />
      
      </Form.Group>

      
      <Button style={{ width:'100px' }} onClick={this.handleAddTodo } variant="success">Add Todo</Button>{' '}
      
    </Form>
     
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);