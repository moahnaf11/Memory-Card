import { useState, useEffect } from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [poki, setPoki] = useState([]);
  const [clickedPokis, setClickedPokis] = useState([]);
  // click event handler for shuffling cards 
  function handleClick (e) {
    let id = e.currentTarget.dataset.id;
    if (!clickedPokis.includes(id)) {
      setClickedPokis((prev) => {
        const updatedPokis = [
          ...prev,
          id
        ]
        console.log(updatedPokis);
      })

      
    }
    console.log(id);
    

    
  }

  // use effect display cards random order
  useEffect(() => {

  }, [])

  // api call to display cards pokeapi
  // cancel api on later calls so set ignore flag
  useEffect(() => {
    async function fetchPoki () {
      const pokiArray = [];
      for (let count = 1; count < 17; count +=1) {
        const pokiImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`);
        const data = await pokiImage.json()
        const imgUrl = data.sprites.front_default;
        pokiArray.push({id: count, imgUrl});

      }
      console.log(pokiArray);
      setPoki(pokiArray);
    }
    fetchPoki();


    

  }, [])

  return (
    <>
      <header>
        <h1>Test your memory!</h1>
        <h2>Only click on a card once! Do not click the same card twice or you lose</h2>
        <h2>Score 16 points to win</h2>
      </header>

      <main>
        <div className="scores">
          <div className="score">
            Score: {currentScore}
          </div>
            Best Score: {highScore}
          <div className="bestscore">

          </div>
        </div>
        <div className="gridwrapper">
          {poki && poki.map((pokemon) => {
            return (
              <div className='card' key={pokemon.id} data-id={pokemon.id} onClick={(e) => handleClick(e)}>
                <img src={pokemon.imgUrl} alt="poki image" />
              </div>
            )
          })}
        </div>
        

      </main>
    </>
  )
}

export default App
