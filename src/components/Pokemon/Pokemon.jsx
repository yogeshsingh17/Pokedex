import './Pokemon.css'

function Pokemon( { name, url } ){
    return (
        <div className='pokemon'>
            <div className='pokemon-name'>
                {name}
            </div>
            <div className='pokemon-image'>
                <img src={url} alt="img" />
            </div>
        </div>
    )
}

export default Pokemon;