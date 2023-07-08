import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://prfernano.blogspot.com/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://entrelinhasbiblicas.blogspot.com/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>F E R N A D O - DEV</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          CONTADOR {count}
        </button>
        <p>
           Aperte o Contador 
        </p>
      </div>
      <p className="read-the-docs">
              
        <a>Clique nos logotipos Vite e React para saber mais</a>
      </p>
    </>
  )
}

export default App
