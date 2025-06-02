import { useEffect, useState } from 'react';
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){

    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);

    const [pokemonList, setPokemonList] = useState([]);

    const [nextUrl, setNextUrl] = useState(DEFAULT_URL);
    const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);

    async function downloadPokemon(){
        try{
            const response = await axios.get(pokedexUrl ? pokedexUrl : DEFAULT_URL);
            console.log(response.data);

            setNextUrl(response.data.next);
            setPrevUrl(response.data.previous);

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
        catch(error){
            console.log("Error occured : ", error)
        }
    }

    useEffect(() => {
        downloadPokemon();
    }, [pokedexUrl]);

    return (
        <div className='pokemon-list-wrapper'>
            <div className='pokemon-heading'>
                Pokemon List    
            </div>
            <div className='prev-next-button'>
                <div>
                    <button onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                </div>
                <div>
                    <button onClick={() => setPokedexUrl(nextUrl)}>Next</button>
                </div>
            </div>
            <div className='pokemon-list'>
                {pokemonList.map(pokemon => <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} id={pokemon.id} />)}
            </div>
        </div>
    )
}

export default PokemonList;