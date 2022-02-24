
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function CreateBedRoom(props) {

const[name, setName]=useState('');
const[image, setImage]=useState('');
const[price, setPrice]=useState('');
const[noOfGuests, setNoOfGuests]=useState(0);


// get a room and then updated it
useEffect(()=>{
  axios.get('http://localhost:4000/rooms/edit-bedroom/' +props.match.params.id)
      .then(res => {
        setName(res.data.name)
        setImage(res.data.image)
        setPrice(res.data.price)
        setNoOfGuests(res.data.noOfGuests)
      })
      .catch((error) => {
        console.log(error);
      })
}, [])
 const onSubmit=(e)=> {
    e.preventDefault()
    const bedroomObject = {
      name: name,
          image: image,
          price: price,
          noOfGuests: noOfGuests
    };

    axios.put('http://localhost:4000/rooms/update-bedroom/' + props.match.params.id, bedroomObject)
      .then((res) => {
        console.log(res.data)
        console.log('BedRoom successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to BedRoom List 
    props.history.push('/rooms/available')
  }

  // form for updating room
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
          Update Room
        </Button>
      </Form>
    </div>);
  
}


