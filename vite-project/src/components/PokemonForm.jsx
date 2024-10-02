import { useState, useContext } from "react";
import PokemonContext from '../context/PokemonContext';

const PokemonForm = () => {
    const { allPokemon, setAllPokemon } = useContext(PokemonContext);
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !hp || !front || !back) {
            setError('All fields are required!');
            return;
        }

        const newId = allPokemon.length > 0 ? allPokemon[allPokemon.length - 1].id + 1 : 1;

        const newPokemon = {
            id: newId,
            name,
            hp: parseInt(hp),
            front,
            back,
        };

        try {
            const response = await fetch('http://localhost:4000/pokemon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPokemon),
            });

            const data = await response.json();
            if (response.ok) {
                setAllPokemon((prevPokemon) => [...prevPokemon, data]);
                setName('');
                setHp('');
                setFront('');
                setBack('');
                setError(null);
            } else {
                console.error('Error adding Pokémon:', data);
                setError('Failed to add Pokémon. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input 
                            type="text" 
                            name="hp" 
                            placeholder="HP" 
                            value={hp}
                            onChange={(e) => setHp(e.target.value)} 
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input 
                            type="text" 
                            name="front" 
                            placeholder="url" 
                            value={front}
                            onChange={(e) => setFront(e.target.value)} 
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input 
                            type="text" 
                            name="back" 
                            placeholder="url" 
                            value={back}
                            onChange={(e) => setBack(e.target.value)} 
                        />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PokemonForm;
