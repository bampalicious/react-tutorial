import React, {useState} from 'react';
import {Container, Navbar, Row, Col, Jumbotron, NavDropdown, Nav, Alert} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import {InitialSteps, BasicLayout, HooksPropsState, Prereqs} from './steps'
import {DemoApp} from './demo/DemoApp'

function App() {
  const [activeTab, setActiveTab] = useState('#tutorial')

  const goToTutorial = () => () => setActiveTab('#tutorial')

  const tutorial = (
    <>
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
        <Row>
          <Col>
            <Alert variant='info'>The use of react-bootstrap's components and layout might not be optimal since I'm trying it out for the first time.</Alert>
          </Col>
        </Row>
        <h1 id='prereqs'>Before you start</h1>
        <Prereqs />
        <h1 id='initialsteps'>Initial steps</h1>
        <InitialSteps />
        <h1 id='basiclayout'>Basic layout</h1>
        <BasicLayout />
        <h1 id='hooksstateprops'>Hooks, state and props</h1>
        <HooksPropsState />
      </Container>
    </>
  );

  const view = (activeTab === '#tutorial') 
    ? tutorial 
    : <Container fluid style={{marginTop: '20px'}}><DemoApp /></Container>

  return (
    <>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>React Tutorial</Navbar.Brand>
          <Nav className='mr-auto'>
            <NavDropdown title='Tutorial'>
              <NavDropdown.Item href='#prereqs' onClick={goToTutorial()}>Before you start</NavDropdown.Item>
              <NavDropdown.Item href='#initialsteps' onClick={goToTutorial()}>Initial steps</NavDropdown.Item>
              <NavDropdown.Item href='#basiclayout' onClick={goToTutorial()}>Basic layout</NavDropdown.Item>
              <NavDropdown.Item href='#hooksstateprops' onClick={goToTutorial()}>Hooks, state and props</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#demo' onClick={() => setActiveTab('#demo')}>Demo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {view}
    </>
  )
}

export default App;
