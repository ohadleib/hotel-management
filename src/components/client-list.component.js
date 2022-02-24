import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ClientTableRow from './ClientTableRow';


export default function ClientList() {

 const [clients, setClients]= useState([])

// guests = clients
//  get all the guests/clients list
  useEffect(()=>{
    axios.get('http://localhost:4000/guests/')
      .then(res => {
        setClients(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })

  // display guests/clients row
  const DataTable=()=> {
    return clients.map((res, i) => {
      return <ClientTableRow obj={res} key={i} />;
    });
  }
// return the guests/clients table
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
             
            <th>Name</th> 
            <th>Room</th>
             
          </tr>
        </thead>
        <tbody>
          {DataTable()}
        </tbody>
      </Table>
    </div>);
  
}