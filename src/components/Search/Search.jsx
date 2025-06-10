import useDebounce from '../../hooks/useDebounce';
import './Search.css'

function Search( {updateSearchTerm} ){

    const debounceUpdatedSearch = useDebounce((e) => {
        updateSearchTerm(e.target.value);
    });

    return (
        <>
            <input 
                type="text" 
                placeholder='Which pokemon are you looking for'
                id='search-pokemon'
                onChange={debounceUpdatedSearch}
            />
        </>
    )
}

export default Search;