import React from 'react'
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import { TopMenu } from './TopMenu'

export const DemoApp = () => {
  return (
    <>
      <TopMenu />
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
    </>
  )
}