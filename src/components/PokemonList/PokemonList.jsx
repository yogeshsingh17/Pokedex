import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList(){

    const [pokemonListState, setPokemonListState] = usePokemonList();

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