import { useState, useContext } from 'react';
import PokemonForm from './components/PokemonForm';
import Filter from './components/Filter';
import PokemonCollection from './components/PokemonCollection';
import PokemonContext from './context/PokemonContext';

const App = () => {
  const { allPokemon } = useContext(PokemonContext);
  const [search, setSearch] = useState('');

  const filteredPokemon = allPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App ui container">
      <h1>Pokedex</h1>
      <br />
      <PokemonForm />
      <br />
      <Filter search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection filteredPokemon={filteredPokemon} />
    </div>
  );
}

export default App;
