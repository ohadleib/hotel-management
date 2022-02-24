import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'


// room component it's the card overview of room
const Room = ({ room }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/room/${room._id}`}>
        <Card.Img src={room.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/room/${room._id}`}>
          <Card.Title as='div'>
            <strong>{room.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text className='p-1 bg-dark bg-gradient text-white text-center my-3 ' as='div'>
           <span> Guests: </span>
            <strong>{room.noOfGuests}</strong>
        </Card.Text>

        <Card.Text as='h3'>${room.price}</Card.Text>
        
              <Link className="edit-link" to={"/edit-bedroom/" + room._id}>
              Edit
              </Link>
           

        
      </Card.Body>
    </Card>
  )
}

export default Room
