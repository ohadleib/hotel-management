import React, { Component, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function CreateGuest() {

const[name, setName]=useState('');
const[room, setRoom]=useState('');

// create a guest in backend
 const onSubmit=(e)=> {
    e.preventDefault()

    const roomObject = {
     name,
     room,
     
    };

    axios.post('http://localhost:4000/guests/create-guest', roomObject)
      .then(res => console.log(res.data));
setName('')
setRoom('')
 
  }
// form for creation of guets
    return (<div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter guest name" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="room">
          <Form.Label>Room</Form.Label>
          <Form.Control placeholder="Enter room No/Name" type="text" value={room} onChange={(e)=> setRoom(e.target.value)} />
        </Form.Group>
 
        <Button variant="danger" size="lg" block="block" type="submit">
          Create Guest
        </Button>
      </Form>
    </div>);
  
}
