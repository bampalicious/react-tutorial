import React from 'react'
import { StepGenerator } from '../shared/StepGenerator'
import { Code } from '../shared/Code'

const steps = [
  {
    key: 'setup',
    title: '1. Setup',
    language: 'bash',
    text: (
      <React.Fragment>
        <p>Begin with creating a new React app:</p>
        <Code language='bash'>
          {`
          npx create-react-app react-tutorial
          cd react-tutorial
          yarn add react-bootstrap bootstrap react-bootstrap-icons
          yarn start
          `}
        </Code>
      </React.Fragment>
    )
  },
  {
    key: 'css',
    title: '2. Add bootstrap css',
    language: 'javascript',
    text: (
      <React.Fragment>
        <p>Import <strong>bootstrap.min.css</strong> in <strong>index.js</strong> (line 7):</p>
        <Code language='javascript'>
          {`
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
          `}
        </Code>
        <p>Importing the bootstrap css file in index.js exposes the stylesheet <strong>globally</strong> (meaning we don't need to import it anywhere else).</p>
        <p>Note that the file is imported with a full file name (as compared to the import of <strong>React</strong>). This is because we're importing a file and not a module.</p>
      </React.Fragment>
    )
  },
  {
    key: 'setup-done',
    title: '3. Prepare App.js',
    text: (
      <React.Fragment>
        <p>Remove everything inside of <strong>return ()</strong> and add a simple header.</p>
        <Code language='javascript'>
          {`
          import React from 'react';
          import logo from './logo.svg';
          import './App.css';
          
          function App() {
            return (
             <h1>Content here</h1>
            );
          }
          
          export default App;
          
          `}
        </Code>
        <p>The app should now look like this:</p>
        <p><h1>Content here</h1></p>
      </React.Fragment>
    )
  }
]

export const InitialSteps = () => {
  return <StepGenerator steps={steps} />
}