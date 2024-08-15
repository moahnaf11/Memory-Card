import { useState, useEffect } from 'react'
import './index.css'
import { Header } from './Header';
import { Score } from './Score';
import { PokiDisplay } from './PokiDisplay';


function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [poki, setPoki] = useState([]);
  const [clickedPokis, setClickedPokis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [win, setWin] = useState(false);

  // click event for restart game
  function handleRestart() {
    setWin(false);
    setClickedPokis([]);
    setCurrentScore(0);
    setHighScore(0);
  }


  // click event handler for shuffling cards 
  function handleClick (e) {
    let id = e.currentTarget.dataset.id;
    if (!clickedPokis.includes(id)) {
      setClickedPokis((prev) => {
        const updatedPokis = [
          ...prev,
          id
        ]
        if (updatedPokis.length === 16) {
          setWin(true);

        }
        console.log(updatedPokis);
        return updatedPokis;
      })
      // increment score
      setCurrentScore((prev) => prev + 1);


      
    } else {
      // reset score
      if (currentScore > highScore) {
        setHighScore(currentScore);
      } 

      setCurrentScore(0);
      setClickedPokis([]);
    }

    // shuffles poki array randomly

    setPoki(shuffleArray(poki));
    console.log(id);
    

    
  }

  // fisher-yates knuth shuffle method

  function shuffleArray(array) {
    const arr = [...array];
    // Loop over the array from the last element to the first
    for (let i = arr.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at positions i and j
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // api call to display cards pokeapi
  useEffect(() => {
    async function fetchPoki () {
      const pokiArray = [];
      for (let count = 1; count < 17; count +=1) {
        const pokiImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`);
        const data = await pokiImage.json()
        const imgUrl = data.sprites.front_default;
        const name = data.name;
        pokiArray.push({id: count, name, imgUrl});

      }
      console.log(pokiArray);
      setLoading(false);
      setPoki(shuffleArray(pokiArray));
    }
    fetchPoki();

  }, [])


  

  return (
    <>
      <Header></Header>

      <main>
  
      {loading && <div className='loading'>Loading...</div>}
        <Score loading={loading} win={win} currentScore={currentScore} highScore={highScore} handleRestart={handleRestart}></Score>
        <PokiDisplay loading={loading} poki={poki} handleClick={handleClick} win={win}></PokiDisplay>

      </main>
    </>
  )
}

export default App
