import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button, Card, Row, Col, } from "react-bootstrap";
import { Link } from './Components/Link';
import coolicon1 from '../src/img/coolicon1.jpeg';
import coolicon2 from '../src/img/coolicon2.jpeg';
import coolicon3 from '../src/img/coolicon3.jpeg';
import coolicon4 from '../src/img/coolicon4.jpeg';

function App() {
  return (
    <>
    <div style={{position: 'absolute', left: 0, top: 84, height: 485, right: '10%', background: '#FFDCD1'}} />
    <div style={{position: 'absolute', left: '50%', top: 0, height: 440, right: 0, background: '#E2F5FF'}} />
      <Navbar expand="lg">
        <Container style={{ marginTop: '10px', marginBottom: '10px' }}>
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



      <Container className="text-center" style={{ paddingTop: '8rem', position: 'relative' }}>
        <h6 className="text-primary">Online training</h6>
        <h1 style={{ paddingTop: '2rem' }}>In-depth, <br /> demanding <br /> courses</h1>
        <h4 style={{ paddingTop: '1.5rem' }}>We know how large objects will act, but things on a <br /> small scale just do not act that way.</h4>
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
              <Card.Img style={{ width: '4rem' }} src={coolicon2} />
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


      <Container style={{ paddingTop: '8rem' }} >
        <Row>
          <Col>
            <img src={coolicon4} height={570} width={500} />
          </Col>
          <Col md={5} style={{ paddingTop: '6rem' }}>
            <h1>Make online <br /> education</h1>
            <p>Problems trying to resolve the confict between <br /> the two major realms of Classical physics: <br /> Newtonian mechanics</p>
            <Link href="#">Learn More &gt;</Link>
          </Col>
        </Row>
      </Container>


      <Container style={{ paddingTop: '8rem', paddingBotton: '5rem' }}>
        <Row>
          <h6 className="text-primary">Practice Advice</h6>
          <h2>Watch our Courses</h2>
          <p>Problems trying to resolv the conflict between <br /> the two major reaml of Classical physics: Newtonian mechanics</p>
        </Row>
      </Container>
    </>
  );
}

export default App;
