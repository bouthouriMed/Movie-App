import React from 'react'

function MovieCard({movie}) {

return (               

<div>
    <div className="card-image">
    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=""/>
    <span className="btn-floating halfway-fab waves-effect waves-light red"></span>
    </div>
    <div className="card-content">
        <span className="card-title">{movie.title}</span>
        <p>{movie.overview.slice(0,100)+"..."}</p>
    </div>

</div>
    )

}

export default MovieCard
