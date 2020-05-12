import React from 'react'
import _ from 'lodash'
import {Row, Card, Col} from 'react-bootstrap'

export const StepGenerator = (props) => {
  return (
    <Row>
      <Col>
        {_.map(props.steps, s => (
          <>
            <Card>
              <Card.Header>{s.title}</Card.Header>
              <Card.Body>
                {s.text}
              </Card.Body>
            </Card>
          </>
        ))}
      </Col>
    </Row>
  )
}