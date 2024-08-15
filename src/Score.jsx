export function Score ({loading, win, currentScore, highScore, handleRestart}) {
    return (
        <>
            {!loading && <div className="scores">
                {win && <div className='win'><div className='winner'>You win</div><button onClick={() => handleRestart()}>Play again</button></div>}
                <div className="score">
                    Score: {currentScore}
                </div>
                    Best Score: {highScore}
                <div className="bestscore">

                </div>
            </div>}
        </>

    )
}