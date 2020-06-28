// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import axios from "axios";
import {Table, Modal, Form, Container, Button, Alert} from "react-bootstrap";


const get_url = "http://localhost:8000/users";
const post_url = "http://localhost:8000/users/create";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      users: [],
      modal: false,
      name: "",
      email: "",
      phone: "",
      errorAlert: false,
      successAlert: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleCancel(){
    this.setState(state => ({
      modal: !state.modal,
      name: "",
      email: "",
      phone: "",
      errorAlert: false
    }));
  }

  handleAdd(event){
    event.preventDefault();
    const post_data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      successAlert: true
    };

    axios.post(post_url, post_data)
      .then((res) => {
        this.handleCancel();
        this.setState({successAlert:true})
        this.componentDidMount();
      })
      .catch((error) => {
        this.setState({errorAlert:true})
      });
  }



  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]:value
    });

  }

  toggleModal(){
    this.setState(state => ({
      modal: !state.modal
    }));
  }

  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers(){
    axios.get(get_url).then(res => this.setState({users: res.data}));
  }


  render(){
    const users = this.state.users.map((item, key) =>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>

    );
    return(
      <Container className="padded">
        <h1>Users</h1>
        <Button className="padded" onClick={this.toggleModal}>Add New User</Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </Table>

        <Modal show={this.state.modal} onHide={this.toggleModal}>
          <Modal.Header>
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={this.handleChange} name="name" type="text" placeholder="Your Name Here" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Your Email Here" />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={this.handleChange} name="phone" type="text" placeholder="Your Phone Number Here" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleAdd}>
              Add
            </Button>
          </Modal.Footer>
          <Alert className="padded" dismissible variant="danger" show={this.state.errorAlert} onClose={()=> this.setState({errorAlert: false})}>
            There was an error. Please check the fields and try again.
          </Alert>
        </Modal>
        <Alert className="padded fixed-bottom" dismissible variant="success" show={this.state.successAlert} onClose={()=> this.setState({successAlert: false})}>
          Successfully added new user.
        </Alert>
      </Container>
    )
  }
}

export default App;
