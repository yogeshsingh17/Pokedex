// This file is being used inside PokemonDetail.jsx, this file contains the logic part of PokemonDetail.jsx file.

import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemons";

function usePokemon(id){
    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    const [pokemonListState, setPokemonListState] = useState({
        pokedexUrl : "",
        pokemonList : [],
        nextUrl : "",
        prevUrl : ""
    });

    async function downloadGivenPokemon(id){
        const response = await axios.get(POKEMON_DETAIL_URL + id);

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
        const type = await downloadGivenPokemon(id);
        await downloadPokemon(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}/`);
    }

    useEffect(() => {
        downloadPokemonAndRelated(id);
        window.scrollTo({top : 0, left : 0, behavior : 'smooth'}); // Scroll to top when the component mounts
    }, [id]);

    return [pokemon, pokemonListState];
}

export default usePokemon;