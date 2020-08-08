import React from 'react'

function MovieCard({movie}) {

return (               

<div>
    <div className="card-image">
    <img src={movie.imageSrc} alt=""/>
    <span className="card-title">{movie.title}</span>
    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"> ❤  </i></a>
    </div>
    <div className="card-content">
        <p>{movie.content}</p>
    </div>
</div>
    )

}

export default MovieCard
