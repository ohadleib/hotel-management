import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ClientList from "./components/client-list.component";

import CreateBedRoom from "./components/create-bedroom.component";
import EditBedRoom from "./components/edit-bedroom.component";
import BedRoomList from "./components/bedroom-list.component";

import CreateGuest from "./components/create-guest.component";
import EditGuest from "./components/edit-guest.component";
import RoomDetails from "./components/RoomDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Hotel Management
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <NavDropdown title="Client" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/create-guest">
                      {" "}
                      Create Guest
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/client-list">
                      Client List
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Nav>
                  <NavDropdown title="BedRoom" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/create-bedroom">
                      {" "}
                      Create BedRoom
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/rooms/available">
                      Available BedRooms
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/rooms/couples">
                      Couples Room
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route path="/create-guest" component={CreateGuest} />
                  <Route path="/edit-client/:id" component={EditGuest} />
                  <Route path="/client-list" component={ClientList} />

                  <Route path="/create-bedroom" component={CreateBedRoom} />
                  <Route path="/edit-bedroom/:id" component={EditBedRoom} />
                  <Route path="/rooms/available" component={BedRoomList} />
                  <Route path="/room/:id" component={RoomDetails} />

                  <Route
                    path="/rooms/couples"
                    render={() => <BedRoomList couples={true} />}
                  />
                  <Route
                    path="/"
                    render={() => <BedRoomList allRooms={true} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
