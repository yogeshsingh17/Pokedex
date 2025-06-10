// This file is being used inside PokemonDetail.jsx, this file contains the logic part of PokemonDetail.jsx file.
// It fetches the pokemon data from the API and returns it to the PokemonDetail.jsx file.

import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemons";
import { useParams } from "react-router-dom";

function usePokemon(pokemonName){

    const {id} = useParams();       //useParams is a hook provided by react-router-dom to access the dynamic segments of the URL

    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    const [pokemonListState, setPokemonListState] = useState({
        pokedexUrl : "",
        pokemonList : [],
        nextUrl : "",
        prevUrl : ""
    });

    async function downloadGivenPokemon(id){
        const response = await axios.get(POKEMON_DETAIL_URL + ((pokemonName) ? pokemonName : id));

        const pokemon = response.data;

        setPokemon({    
            name : pokemon.name,
            weight : pokemon.weight,
            height : pokemon.height,
            types : pokemon.types,
            image : pokemon.sprites.other.dream_world.front_default
        });

        const types = pokemon.types.map(t => t.type.name);
        return types[0];
    }

    async function downloadPokemonAndRelated(id){
        try{
            const type = await downloadGivenPokemon(id);
            await downloadPokemon(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}/`);
        }
        catch(e){
            // console.error("Error downloading pokemon data:", e);
            console.log("No pokemon found");
        }
    }

    useEffect(() => {
        downloadPokemonAndRelated(id);
        window.scrollTo({top : 0, left : 0, behavior : 'smooth'}); // Scroll to top when the component mounts
    }, [id, pokemonName]);

    return [pokemon, pokemonListState];
}

export default usePokemon;