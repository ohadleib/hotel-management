import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function ClientTableRow(props) {
  // delete a specific client
  const deleteClient = () => {
    axios
      .delete("http://localhost:4000/guests/delete-client/" + props.obj._id)
      .then((res) => {
        console.log("Client successfully deleted!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   return client table where yoi can edit and delete client
  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.room}</td>
      <td>
        <Link className="edit-link" to={"/edit-client/" + props.obj._id}>
          Edit
        </Link>
        <Button onClick={deleteClient} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}
