import { useEffect, useState } from 'react';
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){

    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonList, setPokemonList] = useState([]);

    async function downloadPokemon(){
        const response = await axios.get(POKEDEX_URL);
        console.log(response.data);

        const pokemonResults = response.data.results;

        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))

        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData => {
            const pokemon = pokemonData.data;

            return {
                id : pokemon.id,
                name : pokemon.name,
                image : pokemon.sprites.other.dream_world.front_default,
                types : pokemon.types
            }
        })

        setPokemonList(pokemonFinalList)
        // console.log(pokemonFinalList);
    }

    useEffect(() => {
        downloadPokemon();
    }, []);

    return (
        <div className='pokemon-list-wrapper'>
            <div className='pokemon-heading'>
                Pokemon List    
            </div>
            <div className='prev-next-button'>
                <div>
                    <button>Prev</button>
                </div>
                <div>
                    <button>Next</button>
                </div>
            </div>
            <div className='pokemon-list'>
                {pokemonList.map(pokemon => <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} />)}
            </div>
        </div>
    )
}

export default PokemonList;