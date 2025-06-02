import { useEffect, useState } from 'react';
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){

    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState, setPokemonListState] = useState({
        pokedexUrl : DEFAULT_URL,
        pokemonList : [],
        nextUrl : DEFAULT_URL,
        prevUrl : DEFAULT_URL
    });

    async function downloadPokemon(){
        try{
            const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL);
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

            /*Passing the updater callback to update the state. If updater callback is not used and we 
              directly use the currentState, it might be stale and not updated in case multiple changes occur.
              So to avoid using stale state we use updater callback to ensure that we are working with the 
              latest updated state.*/
            setPokemonListState((state) => ({
                ...state,
                pokemonList : pokemonFinalList,
                nextUrl : response.data.next,
                prevUrl : response.data.previous
            }))
        }
        catch(error){
            console.log("Error occured : ", error)
        }
    }

    useEffect(() => {
        downloadPokemon();
    }, [pokemonListState.pokedexUrl]);

    return (
        <div className='pokemon-list-wrapper'>
            <div className='pokemon-heading'>
                Pokemon List    
            </div>
            <div className='prev-next-button'>
                <div>
                    <button onClick={() => setPokemonListState((state) => ({...state, pokedexUrl: state.prevUrl}))}>Prev</button>
                </div>
                <div>
                    <button onClick={() => setPokemonListState((state) => ({...state, pokedexUrl : state.nextUrl}))}>Next</button>
                </div>
            </div>
            <div className='pokemon-list'>
                {pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} id={pokemon.id} />)}
            </div>
        </div>
    )
}

export default PokemonList;