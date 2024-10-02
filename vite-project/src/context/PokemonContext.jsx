import { createContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState([]);

    return (
        <PokemonContext.Provider value={{ allPokemon, setAllPokemon }}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonContext;
