import React from 'react'
import { StepGenerator } from '../shared/StepGenerator'

const steps = [
  {
    key: 'setup',
    title: '1. Setup',
    language: 'bash',
    text: (
      <p>Begin with creating a new React app:</p>
    ),
    code: `
      npx create-react-app react-tutorial
      *wait*
      cd react-tutorial
      yarn add react-bootstrap bootstrap react-bootstrap-icons
      yarn start
    `
  },
  {
    key: 'css',
    title: '2. Add bootstrap css',
    language: 'javascript',
    text: (
      <p>Import <strong>bootstrap.min.css</strong> in <strong>index.js</strong> (line 7):</p>
    ),
    code: `
      import React from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      import App from './App';
      import * as serviceWorker from './serviceWorker';
      import 'bootstrap/dist/css/bootstrap.min.css'
      
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
      
      // If you want your app to work offline and load faster, you can change
      // unregister() to register() below. Note this comes with some pitfalls.
      // Learn more about service workers: https://bit.ly/CRA-PWA
      serviceWorker.unregister();
    `
  }
]

export const InitialSteps = () => {
  return <div id='initialsteps'><StepGenerator steps={steps} /></div>
}