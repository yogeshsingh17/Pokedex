// This file is used inside usePokemonList.js to download the pokemon data from the API.

import axios from "axios";

async function downloadPokemon(pokemonListState, setPokemonListState, defaultUrl, limit = 20) {
    try{
        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defaultUrl);
        // console.log(response.data);

        let pokemonResults = response.data.results ? response.data.results : response.data.pokemon ;   // Array of pokemon objects with name and url
        pokemonResults = pokemonResults.slice(0, limit);
        // Array of promises to fetch each pokemon's details
        const pokemonPromise = pokemonResults.map((p) => {
            if(p.url){
                return axios.get(p.url)
            } else if(p.pokemon.url){
                return axios.get(p.pokemon.url)
            }
        });

        const pokemonListData = await axios.all(pokemonPromise);                        // Using axios.all to wait for all promises to resolve
        console.log(pokemonListData); // This will log an array of responses for each pokemon
        const pokemonFinalList = pokemonListData.map(pokemonData => {                   // Mapping through the resolved data to extract required details
            const pokemon = pokemonData.data;                                           // Each pokemonData contains the full details of the pokemon
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
        setPokemonListState({
            ...pokemonListState,
            pokemonList : pokemonFinalList,
            nextUrl : response.data.next,
            prevUrl : response.data.previous
        })
    }
    catch(error){
        console.log("Error occured : ", error)
    }
}

export default downloadPokemon;