import React from 'react';
import {Container, Navbar, Row, Col, Jumbotron, NavDropdown, Nav} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import {InitialSteps} from './steps'

function App() {
  return (
    <>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>React Tutorial</Navbar.Brand>
          <Nav className='mr-auto'>
            <NavDropdown title='Tutorial'>
              <NavDropdown.Item href='#initialsteps'>Initial steps</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Welcome...</h1>
              <p>... to the React Tutorial. This is a step by step tutorial that starts off easy and introduces progressively more advanced concepts over time.</p>
              <p>Use the menu to navigate between the tutorial and the demo.</p>
            </Jumbotron>
          </Col>
        </Row>
        <InitialSteps />
      </Container>
    </>
  );
}

export default App;
