
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function EditGuest(props) {

const[name, setName]=useState('');
const[room, setRoom]=useState('');

// get a guest and update it
useEffect(()=>{
  axios.get('http://localhost:4000/guests/edit-client/' + props.match.params.id)
      .then(res => {
  
        setName(res.data.name)
        setRoom(res.data.room)
        
      })
      .catch((error) => {
        alert(error)
        console.log(error);
      })
}, [])
 const onSubmit=(e)=> {
    e.preventDefault()
    const bedroomObject = {
      name: name,
         room:room
    };

    axios.put('http://localhost:4000/guests/update-client/' + props.match.params.id, bedroomObject)
      .then((res) => {
        console.log(res.data)
        console.log('Guest successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to BedRoom List 
    props.history.push('/client-list')
  }
// for for guest updation
    return (<div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter Room Name/No" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Room</Form.Label>
          <Form.Control placeholder="Room Name" type="text" value={room} onChange={(e)=> setRoom(e.target.value)} />
        </Form.Group>
 
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Guest Details
        </Button>
      </Form>
    </div>);
  
}


