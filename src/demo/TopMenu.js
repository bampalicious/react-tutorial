import React from 'react'
import {Container, Navbar,  Nav} from 'react-bootstrap'

export const TopMenu = (props) => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>Home</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#todo'>ToDo</Nav.Link>
          <Nav.Link href='#users'>Users</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
