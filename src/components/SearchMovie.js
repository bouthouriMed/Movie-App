import React, {useState} from 'react'
import AddMovie from './AddMovie'

function SearchMovie({handleSearch,handleAdd}) {

    const [search,setSearch] = useState("")

    let handleChange = e => {
        setSearch(e.target.value)
        
    }

    let handleClick = (e) => {
        e.preventDefault()
        handleSearch(search)

    }
    return (
        <div>
            <form className="search-form">
                <label className="label" htmlFor="input" > Search by name : </label>
                <input className="input" type="text" autoComplete="off" name="input" placeholder="ex: The joker" icon="search" onChange={handleChange} />
                    <div className="buttons">
                        <button className="search-button"  onClick={handleClick}> Search </button>
                        <AddMovie handleAdd={handleAdd}/>
                    </div>
            </form>
        </div>
    ) 
}

export default SearchMovie



