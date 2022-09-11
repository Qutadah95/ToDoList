import axios from 'axios';
import React, {  useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

 function TodoRender() {
  const [todo,setTodo]=useState('')
  const [updatedTodo, setUpdatedTodo] = useState([{}])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    // let item={todo.todo,};
    // useEffect(()=>{
    //   fetch('http://localhost:8080/list').then(res=>{
    //     if(res.ok){
    //       return res.json()
    //     }
    //   }).then(jsonRes=>{setTodo(jsonRes)});
    // })
   
      axios.get('http://localhost:8080/list')
        .then((response) => {
          const data = response.data;
          setTodo(data)
          // console.log('Data has been received!!');
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        });
        // console.log("ddddd",todo);

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
      

    // ruselt=  ruselt.json();
 
  
  return (
    <>
    <div>
      <ul className="todo-row">

{todo && todo.length
   ? todo.map((todoo, index) => { 
     return<><li>{todoo.todo}</li> <button
     onClick={() => deleteTodo(todoo._id)}
    
   >
     DELETE
   </button>
   <button
                    onClick={() =>
                      updateTodo(todoo._id, todoo.todo)
                    }
                  >
                    UPDATE
                  </button>
   </> ; 
   }) 
    : "No todos, yay!"}
  </ul> 
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
{/* <ul className="todo-row">

{todo && todo.length
   ? todo.map((todo, index) => { 
     return <Todo key={`todo-${todo.id}`} todo={todo} />; 
   }) 
    : "No todos, yay!"}
  </ul> */}
  </div>
    {/* <div> {todo.map(note=>(<h1>{todo}</h1>))} </div> */}
    
    </>
  )
}

export default TodoRender