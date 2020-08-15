import React, {useState,useEffect} from 'react'


 const MovieDetail=  ({match}) => {

    const [movie,setMovie] = useState([])
  
   
    
    const getmovie =() => {
       fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=5155abb095b67ea1829281b0d6a9fd75&append_to_response=videos`)
       .then( response => response.json())
        .then(data => setMovie(data) );
       
        }

    useEffect(() => {
      getmovie()
      
    }, [movie])


      
    

    return (
    <div className="card-detail-container">
        <div className="card-detail" >
                    <div className="card-detail-thumbnail">
                      <div className="card-detail-title">{movie.title}</div>
                      <img className="card-detail-image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=""/> 
                    </div>

                    <div className="card-detail-content">
                      <p className="overview"><h5>Overview :</h5> {movie.overview}</p>
                      <div className="status"><span>Status :</span> {movie.status}</div> <br/>
                      <div className="release-date"><span>Release date :</span> {movie.release_date}</div>
                    </div>     
        </div>
        <div className="card-similar-movie">
        
        </div>
  </div>

   
    )
}

export default MovieDetail
