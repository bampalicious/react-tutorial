import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const Code = (props) => {
  return (
    <SyntaxHighlighter language={props.language} style={docco} showLineNumbers={true}>
      {props.children}
    </SyntaxHighlighter>
  )
}