import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


function TodoRender() {
  const [todo, setTodo] = useState('')
  const [updatedTodo, setUpdatedTodo] = useState([{}])
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userNameS= localStorage.getItem("userName")
  useEffect(() => {
    axios.get(`http://localhost:8080/user`)
    .then((response) => {
      const data = response.data;
      // const filterdData=dat
      let obj = data.find(o => o.username === `${userNameS}`);
      setUserData(obj._id)
    })
    .catch(() => {
      alert('Error retrieving data!!!');
    });
    //   console.log("data",userData);
    
    // console.log("userData",userNameData);
      axios.get(`http://localhost:8080/list/?userID=${userData}`)
        .then((response) => {
          const data = response.data;
          // const filterdData=dat
          setTodo(data)
          // console.log("data",data);
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        });  });
 
// console.log(todo);
  const deleteTodo = (id) => {
    console.log(id);

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };
  const updateTodo = (id, todo) => {
    setUpdatedTodo((prev) => {
      return {
        ...prev,
        id: id,
        todo: todo,
      };
    });
    handleShow();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const saveUpdatedTodo = () => {

    axios
      .put(`/update/${updatedTodo.id}`, updatedTodo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };




  return (
    <>
      <div>
        <ListGroup >

          {todo && todo.length
            ? todo.map((todoo, index) => {
              return <ListGroup.Item key={index}>{todoo.todo} <Button style={{ width:'100px' }}  onClick={() => deleteTodo(todoo._id)} variant="danger">DELETE</Button>{' '}

              <Button style={{ width:'100px' }} onClick={() =>
              updateTodo(todoo._id, todoo.todo)
            } variant="success">UPDATE</Button>{' '}
            </ListGroup.Item> ;

            })
            : "No todos, yay!"}
        </ListGroup>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Update a todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              placeholder="todo"
              name="todo"
              value={updatedTodo.todo ? updatedTodo.todo : ""}
              onChange={handleChange}
            />

          </Modal.Body>
          <Modal.Footer>
            <Button className='btn' variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className='btn' variant="primary" onClick={saveUpdatedTodo}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>


    </>
  )
}

export default TodoRender;