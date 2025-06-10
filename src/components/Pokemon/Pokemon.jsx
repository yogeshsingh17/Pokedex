// This file defines a React component that displays a Pokémon's name and image.
// This file is used inside a Pokémon list component (PokemonList.jsx) to show individual Pokémon details.

import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon( { name, url, id } ){
    return (
        <div className='pokemon'>
            <Link to={`/pokemon/${id}`} className='pokemon-link'>
                <div className='pokemon-name'>
                    {name}
                </div>
                <div className='pokemon-image'>
                    <img src={url} alt="img" />
                </div>
            </Link>
        </div>
    )
}

export default Pokemon;