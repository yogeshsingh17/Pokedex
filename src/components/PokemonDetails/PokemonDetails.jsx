import style from './PokemonDetails.module.css'
import { Link } from 'react-router-dom';
import usePokemon from '../../hooks/usePokemon';        //Custom Hook
import Pokemon from '../Pokemon/Pokemon';

function PokemonDetails( {pokemonName} ){

    const [pokemon, pokemonListState] = usePokemon(pokemonName);

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

                        <div className={style['similar-pokemons']}>
                            <h2>
                                Similar Pokemons
                            </h2>
                            <div className={style['pokemon-similar-boxes']}>
                                {pokemonListState.pokemonList.length > 0 && pokemonListState.pokemonList.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} id={pokemon.id} /> )}
                            </div>
                        </div>
        </div>
    )
}

export default PokemonDetails;