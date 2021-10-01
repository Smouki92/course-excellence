import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from "react-bootstrap";

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
    
    <div >

    </div>
    </>
  );
}

export default App;
