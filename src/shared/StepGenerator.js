import React from 'react'
import _ from 'lodash'
import {Row, Card, Col} from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs'

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
                {s.code &&
                  <SyntaxHighlighter showLineNumbers={true} language={s.language} style={docco}>
                    {s.code}
                  </SyntaxHighlighter>
                }
              </Card.Body>
            </Card>
          </>
        ))}
      </Col>
    </Row>
  )
}