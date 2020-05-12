import React from 'react'
import { StepGenerator, Code } from '../shared'
import { TopMenu } from '../demo/TopMenu'

const steps = [
  {
    key: 'menu',
    title: '1. Top menu',
    text: (
      <React.Fragment>
        <p>Create a new file called 'TopMenu.js' and add the following import statements:</p>
        <Code language='javascript'>
          {`
          import React from 'react'
          import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap
          `}
        </Code>
        <p>Add the following code to create the menu:</p>
        <Code language='javascript'>
          {`
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
          `}
        </Code>
        <p>Import the <strong>{`<TopMenu />`}</strong> component in App.js and replace the header with it:</p>
        <Code language='javascript'>
          {`
            import React from 'react'
            import {TopMenu} from './TopMenu'
            
            function App() {
              return (
                <TopMenu />
              )
            }

            export default App
          `}
        </Code>
        <p>The app should now look like this:</p>
        <p>
          <TopMenu />
        </p>
      </React.Fragment>
    )
  }
]

export const BasicLayout = () => {
  return <StepGenerator steps={steps} />
}