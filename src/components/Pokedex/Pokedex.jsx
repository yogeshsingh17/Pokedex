// This file is going to be our main wrapper component for all files.

import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css'
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function Pokedex(){

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='pokedex-wrapper'>
            <h1>POKEDEX</h1>
            <Search updateSearchTerm={setSearchTerm} />
            {/* <PokemonList /> */}
            { searchTerm ? <div>{<PokemonDetails pokemonName={searchTerm} />}</div> : <PokemonList />}
        </div>
    )
}

export default Pokedex;