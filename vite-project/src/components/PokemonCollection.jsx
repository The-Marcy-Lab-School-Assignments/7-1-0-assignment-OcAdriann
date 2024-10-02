import PokemonCard from './PokemonCard';

const PokemonCollection = ({ filteredPokemon }) => {
    return (
        <div className="ui six cards">
            {filteredPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonCollection;
