import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button, Card } from "react-bootstrap";

function App() {
  return (
    <>
      <header className="header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">BrandName</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#product">Product</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="light" size="lg" className="me-4">Login</Button>
                <Button variant="primary" size="lg" >JOIN US</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Card className="text-center">
        <Container >
        <Card.Text><h5>Online training</h5></Card.Text>
        <Card.Title><h1>In-depth, demanding courses</h1></Card.Title>
        <Card.Text><h4>We know how large objects will act, but things on a small scale just do not act that way.</h4></Card.Text>
        <div>
          <Button variant="primary" size="lg" className="me-3" >Get Quote Now</Button>
          <Button variant="outline-info" size="lg" >Learn More</Button>
        </div>
        </Container>
      </Card>
    </>
  );
}

export default App;
