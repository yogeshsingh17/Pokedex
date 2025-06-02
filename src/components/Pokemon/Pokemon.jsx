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