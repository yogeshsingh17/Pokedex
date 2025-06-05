// This file is used inside PokemonList.jsx, this file contains the logic part of PokemonList.jsx file.

import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemons";

function usePokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState, setPokemonListState] = useState({
        pokedexUrl : DEFAULT_URL,
        pokemonList : [],
        nextUrl : DEFAULT_URL,
        prevUrl : DEFAULT_URL
    });

    useEffect(() => {
        downloadPokemon(pokemonListState, setPokemonListState, DEFAULT_URL);
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];
}

export default usePokemonList;