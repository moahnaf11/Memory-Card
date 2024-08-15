export function PokiDisplay ({loading, poki, handleClick, win}) {
    return (
        <>
            {!loading && <div className="gridwrapper">
                {poki && poki.map((pokemon) => {
                return (
                    <div className='card' key={pokemon.id} data-id={pokemon.id} onClick={!win ? (e) => handleClick(e) : null}>
                    <img src={pokemon.imgUrl} alt="poki image" />
                    <div className="name">{pokemon.name}</div>
                    </div>
                )
                })}
            </div>}
        </>
    )

}