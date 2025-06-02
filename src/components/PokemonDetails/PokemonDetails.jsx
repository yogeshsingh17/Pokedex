import { useEffect, useState } from 'react';
import style from './PokemonDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function PokemonDetails(){

    const {id} = useParams();

    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    async function downloadPokemon(){
        const response = await axios.get(POKEMON_DETAIL_URL + id);

        const pokemon = response.data;

        setPokemon({
            name : pokemon.name,
            weight : pokemon.weight,
            height : pokemon.height,
            types : pokemon.types,
            image : pokemon.sprites.other.dream_world.front_default

        });

        // console.log(response);
    }

    useEffect(() => {
        downloadPokemon();
    }, []);

    return (
        <div className=''>
            <Link to={"/"} className={style['home-page-button-container']}>
                <div className={style['home-page-button']}>
                    Pokedex
                </div>
            </Link>
            {pokemon && <div className={style['pokemon-details-body-container']}>
                            <div className={style['pokemon-details-container']}>
                                <div className={style['pokemon-name']}>
                                    {pokemon.name}
                                </div>
                                <div className={style['pokemon-image']}>
                                    <img className={style['pokemon-image-img']} src={pokemon.image} alt="pokemon-image" />
                                </div>
                                <div className={style['pokemon-detail']}>
                                    <div className={style['pokemon-detail-weight']}>
                                        <span>Weight :</span>
                                        {pokemon.weight}
                                    </div>
                                    <div className={style['pokemon-detail-height']}>
                                        <span>Height :</span>
                                        {pokemon.height}
                                    </div>
                                </div>
                                <div className={style['pokemon-type']}>
                                    <span>Type :</span> {pokemon.types.map(t => <div className={style['type']} key={t.type.name}>{t.type.name}</div>)}
                                </div>
                            </div>
                        </div>}
        </div>
    )
}

export default PokemonDetails;