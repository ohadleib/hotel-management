import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import axios from "axios";


// room details page where you can check a specific room in detail
const RoomDetails = ({ history, match }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [noOfGuests, setNoOfGuests] = useState(0);


//   get a specific room
  useEffect(() => {
    axios
      .get("http://localhost:4000/rooms/edit-bedroom/" + match.params.id)
      .then((res) => {
        setName(res.data.name);
        setImage(res.data.image);
        setPrice(res.data.price);
        setNoOfGuests(res.data.noOfGuests);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, [match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/rooms">
        Go Back
      </Link>
      {loading ? (
        <div>Fetching data..</div>
      ) : error ? (
        alert(error)
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={image} alt={name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>Price: ${price}</ListGroup.Item>
                <ListGroup.Item>
                  Number of Guests: {noOfGuests}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Provider:</Col>
                      <Col>
                        <strong>{`Hotel Management`}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>{noOfGuests > 0 ? "Have Guests" : "Available"}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button className="btn-block" type="button">
                      Reserve Room
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default RoomDetails;
