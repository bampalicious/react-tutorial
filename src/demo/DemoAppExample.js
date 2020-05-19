import React from 'react'
import { TopMenu } from './TopMenu'

export const DemoAppExample = (props) => {
  return (
    <>
      <TopMenu />
      {props.children}
    </>
  )
}