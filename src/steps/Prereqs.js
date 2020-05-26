import React from 'react'
import { StepGenerator } from '../shared/StepGenerator'

const steps = [
  {
    key: 'prereqs',
    title: '1. Prerequisites',
    text: (
      <React.Fragment>
        <p>
          Before you start, make sure you have installed the following:
          <ul>
            <li><a href='https://nodejs.org/en/'>Node.js (at least version 12)</a></li>
            <li>A code editor such as <a href='https://code.visualstudio.com/'>Visual Studio Code</a></li>
          </ul>
        </p>
        <p>
          For Windows I also recommend using something like <a href='https://eugeny.github.io/terminus/'>Terminus</a> in order to have multiple Powershell (or whatever shell you're using) open at once.
        </p>
      </React.Fragment>
    )
  }
]

export const Prereqs = () => {
  return <StepGenerator steps={steps} />
}