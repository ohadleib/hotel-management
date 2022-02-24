import React, { useEffect, useState } from "react";
import axios from 'axios';
import Room from "./Room";
import { Col, Row } from "react-bootstrap";


export default function BedRoomList({couples, allRooms}) {

 const [bedrooms, setBedrooms]= useState([])

//  get all the rooms or couples rooms or available rooms only depending on the route visited
useEffect(()=>{
  const url= couples?'http://localhost:4000/rooms/couples': allRooms?'http://localhost:4000/rooms':'http://localhost:4000/rooms/available'

  axios.get(url)
  .then(res => {
   setBedrooms(res.data)
  })
  .catch((error) => {
    console.log(error);
  })
},[])

// using Room component return the Room Component with room card adn room overview
    return ( <>
      <Row>
        {bedrooms.map((room, i) => (
          <Col key={room._id} sm={12} md={6} lg={4} xl={3}>
            <Room room={room} />
          </Col>
        ))}
      </Row>
    </>);
  }
