import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // click event handler for shuffling cards 
  function handleClick () {
    
  }

  // use effect display cards random order
  useEffect(() => {

  }, [])

  // api call to display cards pokeapi
  // cancel api on later calls so set ignore flag
  useEffect(() => {

  }, [])

  return (
    <>
      <header>
        <h1>Test your memory!</h1>
        <h2>Only click on a card once! Do not click the same card twice or you lose</h2>
      </header>

      <main>

      </main>
    </>
  )
}

export default App
