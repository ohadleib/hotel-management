import React, { Component, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function CreateBedRoom() {

const[name, setName]=useState('');
const[image, setImage]=useState('');
const[price, setPrice]=useState('');
const[noOfGuests, setNoOfGuests]=useState(0);


// create a room in backend 
 const onSubmit=(e)=> {
    e.preventDefault()

    const roomObject = {
     name,
     image,
     price,
     noOfGuests,
    };

    axios.post('http://localhost:4000/rooms/create-room', roomObject)
      .then(res => console.log(res.data));
setName('')
setImage('')
setPrice('')
setNoOfGuests(0)
  }
// for for room creation
    return (<div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter Room Name/No" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control placeholder="Url of Image" type="text" value={image} onChange={(e)=> setImage(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder="Enter Price" type="number" value={price} onChange={(e)=> setPrice(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>No of guests</Form.Label>
          <Form.Control placeholder="Enter No of Guests" type="number" value={noOfGuests} onChange={(e)=> setNoOfGuests(e.target.value)} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Room
        </Button>
      </Form>
    </div>);
  
}
