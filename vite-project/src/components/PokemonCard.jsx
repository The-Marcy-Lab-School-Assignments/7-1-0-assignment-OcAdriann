// TODO: This component should render a single pokemon's stats and image.

const PokemonCard = ( {pokemon} ) => {
    const handleClick = (e) => {
        e.preventDefault();
        const img = e.target
        if(img.src === pokemon.front) {
            img.src = pokemon.back
        } else if(img.src === pokemon.back) img.src = pokemon.front
        console.log('click')
    }

    return (
        <div className="ui card">
            <button onClick={handleClick}>
            <div>
                <div className="image">
                    <img alt="pokemon name" src={pokemon.front} />
                </div>
                <div className="content">
                    <div className="header">{pokemon.name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {pokemon.hp}
                    </span>
                </div>
            </div>
        </button>
        </div>
    )
}

export default PokemonCard