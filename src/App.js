import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button, Card, Row, Col } from "react-bootstrap";
import coolicon1 from '../src/img/coolicon1.jpeg';
import coolicon2 from '../src/img/coolicon2.jpeg';
import coolicon3 from '../src/img/coolicon3.jpeg';

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


      <Container className="text-center" style={{ paddingTop: '4rem', }}>
        <Card.Text ><h6>Online training</h6></Card.Text>
        <Card.Title style={{ paddingTop: '2rem' }}><h1>In-depth, <br /> demanding <br /> courses</h1></Card.Title>
        <Card.Text style={{ paddingTop: '1.5rem' }}><h4>We know how large objects will act, but things on a <br /> small scale just do not act that way.</h4></Card.Text>
        <div style={{ paddingTop: '1rem' }}>
          <Button variant="primary" size="lg" className="me-3" >Get Quote Now</Button>
          <Button variant="outline-info" size="lg" >Learn More</Button>
        </div>
      </Container>


      <Container style={{ paddingTop: '7rem', paddingBotton: '2rem' }}>
        <Row>
          <Col>
            <Card className="p-4" style={{ width: '18rem', height: '16rem' }} border="light" >
              <Card.Img style={{ width: '4rem' }} src={coolicon1} />
              <Card.Body>
                <Card.Title>Evaluation Time</Card.Title>
                <Card.Text>The gradual accumulation of information about atomic and small-scale behaviour...</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="p-4" style={{ width: '18rem', height: '16rem' }} border="light" shadow-lg>
              <Card.Img  style={{ width: '4rem' }} src={coolicon2} />
              <Card.Body>
                <Card.Title>Sales Planning</Card.Title>
                <Card.Text>The gradual accumulation of information about atomic and small-scale behaviour...</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="p-4" style={{ width: '18rem', height: '16rem' }} border="light" >
              <Card.Img style={{ width: '4rem' }} src={coolicon3} />
              <Card.Body>
                <Card.Title>Lifetime access</Card.Title>
                <Card.Text>The gradual accumulation of information about atomic and small-scale behaviour...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
