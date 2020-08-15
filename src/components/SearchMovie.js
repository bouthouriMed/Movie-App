import React, {useState,useEffect} from 'react'
import MovieList from './MovieList'




function SearchMovie() {

    const [search,setSearch] = useState("")
    const [movies,setMovies] = useState([])


    let handleChange = e => {
        setSearch(e.target.value)
        
    }

    let handleClick = async (e) => {
        e.preventDefault()
        const url=`https://api.themoviedb.org/3/search/movie?api_key=5155abb095b67ea1829281b0d6a9fd75&query=${search}`
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        
        

   
    }

 

  


    
    return (
        
        <div>
            
            <form className="search-form">
                <div className="search-item">
                <label className="search-label" htmlFor="input" > Search by name : </label>
                <input className="input" type="text" autoComplete="off" name="input" placeholder="ex: The joker" icon="search" onChange={handleChange} value={search}/>
                
                </div>
                    <div className="buttons">
                        <button className="search-button"  onClick={handleClick}> Search </button>
                    </div>
            </form>

            <MovieList search={search} movies={movies} />
            
        </div>
    ) 
}

export default SearchMovie



