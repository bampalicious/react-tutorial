import React, {useState, useEffect} from 'react'
import {Alert, Navbar, Container, Nav} from 'react-bootstrap'
import {StepGenerator} from '../shared/StepGenerator'
import {Code} from '../shared/Code'
import {TopMenu} from '../demo/TopMenu'

const steps = [
  {
    key: 'hooks-overview',
    title: '1. Hooks overview',
    text: (
      <>
        <Alert variant='info'>You can read a more in-depth introduction to hooks at: <a href='https://reactjs.org/docs/hooks-intro.html' target='_blank' rel='noopener noreferrer'>Reactjs.org</a></Alert>
        <p>
          Hooks are a fairly new concept in React that introduces new ways of dealing with (among other things) state and update changes. There are a number of standard hooks included in React, but it's also possible to create your own custom hooks.
          Custom hooks can be created in their own .js-files and be imported in one or more components. It's also possible to use hooks within other hooks, as long as the "main" hook is used within a React component or similar React context.
        </p>
        <p>For this tutorial we will mainly focus on the following standard hooks: <code>useState</code>, <code>useEffect</code> and <code>useContext</code>.</p>
        <p>
          As noted in the hooks introduction linked above, hooks require the use of <strong>functional</strong> components instead of class components.
          This means that components such as the following won't work with hooks since it's a class component:
        </p>
        <Code language='javascript'>
          {`
            import React, {Component} from 'react'

            export default class MyComponent extends Component {
              super(props) {}

              render () {
                return (
                  <p>This is a class component</p>
                )
              }
            }
          `}
        </Code>
        <p>
          In order to use hooks the component would have to be converted into the following:
        </p>
        <Code language='javascript'>
          {`
            import React from 'react'

            export default MyComponent = (props) => {
              return (
                <p>This is a functional component</p>
              )
            }
          `}
        </Code>
        <p>In the following sections we'll mostly cover the <code>useState</code> hook with a little bit of silly use of <code>useEffect</code> and later on we'll try out the (slightly) more complex <code>useContent</code> hook and some basic custom hooks.</p>
      </>
    )
  },{
    key: 'state',
    title: '2. State',
    text: (
      <>
        <p>
          State is the way in which a React app keeps track of changes <strong>within</strong> a component, such as when you enter text into a textfield or click on a link in the top navigation.
          When the state changes React will re-render the component (and any subcomponents if required) where the state change happened, and the app will display the effect of the change.
        </p>
        <p>
          By default state is only local to the component but there are libraries such as <a href='https://react-redux.js.org/' target='_blank' rel='noopener noreferrer'>react-redux</a> that enables a global state.
          It is also possible to use a combination of the hooks <code>useReducer</code> and <code>useContext</code> to create a global state with standard React hooks.
        </p>
        <p>
          This part of the tutorial will focus on local state with <code>useState</code>.
        </p>
        <p>Looking at our <code>{`TopMenu.js`}</code> component we can see that we're currently not tracking which menu item is active, but we're instead relying on the component to keep track of it for us.</p>
        <Code language='javascript'>
          {`
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
          `}
        </Code>
        <p>This works because we're using a matching <code>#href</code>, but if we want to control which menu item is active ourselves we'll need to add a <code>state</code> that we can use to set the active item.</p>
        <p>Begin with adding an import of <code>{useState}</code> after <code>import React</code> in the component:</p>
        <Code language='javascript'>
          {`
            import React, {useState} from 'react'
          `}
        </Code>
        <p>Next add the following code to create a state variable and function to update it:</p>
        <Code language='javascript'>
          {`
            export const TopMenu = (props) => {
              const [activeItem, setActiveItem] = useState('home')

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
        <p>
          This will add a state variable called <code>activeItem</code> that we can use to keep track of which menu item has been clicked (and is active), as well as a function that can update it.
          But how do we use it?
        </p>
        <p>
          The <code>{`<Nav />`}</code> component has a property called <code>activeKey</code> that is used to keep track of the active item in the menu. This property will be automatically set by the library if no value is provided
          and is based on the selected item (or <code>#href</code> if present). This is what enabled the component to highlight the active item without us providing a value, but we'll now add our state variable to the property to control it's value:
        </p>
        <Code language='javascript'>
          {`
            export const TopMenu = (props) => {
              const [activeItem, setActiveItem] = useState('home')

              return (
                <Navbar bg='dark' variant='dark'>
                  <Container>
                    <Navbar.Brand href='#home'>Home</Navbar.Brand>
                    <Nav className='mr-auto' activeKey={activeItem}>
                      <Nav.Link href='#todo'>ToDo</Nav.Link>
                      <Nav.Link href='#users'>Users</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
              )
            }
          `}
        </Code>
        <p>If you click on the menu you'll notice that the active item no longer changes:</p>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>Home</Navbar.Brand>
            <Nav className='mr-auto' activeKey={null}>
              <Nav.Link href='#todo'>ToDo</Nav.Link>
              <Nav.Link href='#users'>Users</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <hr />
        <p>
          This is because we're not changing the value of the state variable when we click the links, so we need to add some code that changes it based on what we click on. 
          And because we've added a value to the <code>activeKey</code>-property we've changed the component from being <strong>uncontrolled</strong> (i.e. using it's own state) to <strong>controlled</strong> the component will no longer keep track of the changes itself
        </p>
        <p>
          In order to make it work we'll be adding the following things: <code>eventKey</code>-properties to each menu item and a <code>function</code> that will be run on the <code>onSelect</code> property of each menu item:
        </p>
        <Code language='javascript'>
          {`
            export const TopMenu = (props) => {
              const [activeItem, setActiveItem] = useState('home')
              const changeTab = (eventKey, e) => setActiveItem(eventKey)
              return (
                <Navbar bg='dark' variant='dark'>
                  <Container>
                    <Navbar.Brand href='#home' onClick={() => setActiveItem('home')}>Home</Navbar.Brand>
                    <Nav activeKey={activeItem} className='mr-auto'>
                      <Nav.Link href='#todo' eventKey='todo' onSelect={changeTab}>ToDo</Nav.Link>
                      <Nav.Link href='#users' eventKey='users' onSelect={changeTab}>Users</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
              )
            }
          `}
        </Code>
        <p>The function <code>changeTab</code> on line <strong>4</strong> is what's being used to change the value of <code>activeItem</code> using the hook function <code>setActiveItem</code>.</p>
        <p>This function is called each time the user click on a menu item through the property <code>onSelect</code> (lines <strong>10 and 11</strong>) on each menu item and accepts the properties <code>eventKey</code> and <code>e</code> (short for event).</p>
        <p>When the function is called it will use the value of <code>eventKey</code> that is added to each menu item (again lines <strong>10 and 11</strong>) to update the value of <code>activeItem</code>.</p>
        <p>This causes an update of the component and the <code>{`<Nav />`}</code> component will be re-rendered with the new value of <code>activeItem</code> in the property <code>activeKey</code> and the correct menu item will be highlighted:</p>
        <TopMenu noHref />
      </>
    )
  }
]

export const HooksPropsState = () => {
  return <StepGenerator steps={steps} />
}