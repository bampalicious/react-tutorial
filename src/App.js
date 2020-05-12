import React from 'react';
import {Container, Navbar, Row, Col, Jumbotron, NavDropdown, Nav} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import {InitialSteps} from './steps'
import { BasicLayout } from './steps/BasicLayout';

function App() {
  return (
    <>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>React Tutorial</Navbar.Brand>
          <Nav className='mr-auto'>
            <NavDropdown title='Tutorial'>
              <NavDropdown.Item href='#initialsteps'>Initial steps</NavDropdown.Item>
              <NavDropdown.Item href='#basiclayout'>Basic layout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#demo'>Demo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Hello!</h1>
              <p>This is a step by step tutorial that starts off easy and introduces progressively more advanced concepts over time.</p>
              <p>Use the menu to navigate between the tutorial and the demo.</p>
            </Jumbotron>
          </Col>
        </Row>
        <h1 id='initialsteps'>Initial steps</h1>
        <InitialSteps />
        <h1 id='basiclayout'>Basic layout</h1>
        <BasicLayout />
      </Container>
    </>
  );
}

export default App;
