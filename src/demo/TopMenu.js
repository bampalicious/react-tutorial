import React, {useState} from 'react'
import {Container, Navbar,  Nav} from 'react-bootstrap'

export const TopMenu = (props) => {
  const [activeItem, setActiveItem] = useState('home')
  const changeTab = (eventKey, e) => setActiveItem(eventKey)
  const {noHref} = props
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href={(noHref) ? null : '#home'} style={(noHref) ? {cursor: 'pointer'} : null} onClick={() => setActiveItem('home')}>Home</Navbar.Brand>
        <Nav activeKey={activeItem} className='mr-auto'>
          <Nav.Link href={(noHref) ? null : '#todo'} eventKey='todo' onSelect={changeTab}>ToDo</Nav.Link>
          <Nav.Link href={(noHref) ? null : '#users'} eventKey='users' onSelect={changeTab}>Users</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
