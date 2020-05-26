import React from 'react'
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import { StepGenerator, Code } from '../shared'
import { TopMenu } from '../demo/TopMenu'
import { DemoAppExample } from '../demo/DemoAppExample'

const steps = [
  {
    key: 'menu',
    title: '1. Top menu',
    text: (
      <>
        <p>Create a new file in the <code>src</code> folder called <code>TopMenu.js</code> and add the following import statements:</p>
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
              <Navbar bg='dark' variant='dark'>
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
        <p>Clean upp <code>App.js</code> by removing the old imports, then import the <code>{`<TopMenu />`}</code> component and replace the header with it:</p>
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
      </>
    )
  },{
    key: 'container',
    title: '2. Content container',
    text: (
      <>
        <p>
          Next we'll add a simple container that will hold the main content of the app.
          Import the <code>Container</code> component from <strong>react-bootstrap</strong> in <code>App.js</code>:
        </p>
        <Code language='javascript'>
          {`
            import React from 'react';
            import {TopMenu} from './TopMenu'
            import {Container} from 'react-bootstrap'
            // Rest of the App.js code below
          `}
        </Code>
        <p>
          Update the code in the return () in <code>App.js</code> to look like this:
        </p>
        <Code language='javascript'>
          {`
            return (
              <TopMenu />
              <Container><h1>This is a container</h1></Container>
            )
          `}
        </Code>
        <p>
          The app will now crash with an error similar to the following:
        </p>
        <Code language='javascript'>
          {`
            ./src/demo/DemoApp.js
            Line 8:5:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
          
             6 |   return (
             7 |     <TopMenu />
          >  8 |     <Container><h1>This is a container</h1></Container>
               |     ^
             9 |   )
            10 | }
          `}
        </Code>
        <p>
          This happens because you can only return one root element per component and in the code above we're trying to return two.
          The way to solve this is to wrap the two elements inside of another element such as a <code>{`<div></div>`}</code>, or a <code>fragment</code> if you don't want to render anything on the page.
          It is recommended to use a <code>fragment</code> if you're only wrapping elements as it won't be rendered on the page:
        </p>
        <Code language='javascript'>
          {`
            return (
              <>
                <TopMenu />
                <Container><h1>This is a container</h1></Container>
              </>
            )
          `}
        </Code>
        <p>If you still receive an error you might have to use the full <code>{`<React.Fragment></React.Fragment>`}</code> tag instead:</p>
        <Code language='javascript'>
          {`
            return (
              <React.Fragment>
                <TopMenu />
                <Container><h1>This is a container</h1></Container>
              </React.Fragment>
            )
          `}
        </Code>
        <p>The app should now look like this:</p>
        <DemoAppExample>
          <Container><h1>This is a container</h1></Container>
        </DemoAppExample>
      </>
    )
  },{
    key: 'fleshing-it-out',
    title: '3. Fleshing it out',
    text: (
      <>
        <p>
          The current app looks rather empty so let's fix that by adding some more content.
          First update the import statement from <strong>react-bootstrap</strong> in <code>App.js</code> with the following components:
        </p>
        <Code language='javascript'>
          {`
            import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
          `}
        </Code>
        <p>Update the <code>{`<Container></Container>`}</code> in <code>App.js</code> with the following code:</p>
        <Code language='javascript'>
          {`
            <Container>
              <Row>
                <Col>
                  <Jumbotron>
                    <h3>Welcome to the Tutorial Demo App!</h3>
                  </Jumbotron>
                </Col>
              </Row>
              <Row>
                <Col>
                  This is a simple tutorial introducing different things in React.
                </Col>
              </Row>
            </Container>
          `}
        </Code>
        <p>The app should now look like this:</p>
        <DemoAppExample>
          <Container>
            <Row>
              <Col>
                <Jumbotron>
                  <h3>Welcome to the Tutorial Demo App!</h3>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col>
                This is a simple tutorial introducing different things in React.
              </Col>
            </Row>
          </Container>
        </DemoAppExample>
      </>
    )
  }
]

export const BasicLayout = () => {
  return <StepGenerator steps={steps} />
}