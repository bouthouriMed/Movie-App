import React, {useState} from 'react'
import AddMovie from './AddMovie'
import RateSearch from './RateSearch'

function SearchMovie({handleSearch,handleAdd}) {

    const [search,setSearch] = useState("")
    const [rate,setRate] = useState(0)

    let handleChange = e => {
        setSearch(e.target.value)
        
    }

    let handleClick = (e) => {
        e.preventDefault()
        handleSearch(search,rate)
        console.log(rate)

    }

    let grabData = data => {
        setRate(data)
    }
    return (
        <div>
            <form className="search-form">
                <div className="search-item">
                <label className="search-label" htmlFor="input" > Search by name : </label>
                <input className="input" type="text" autoComplete="off" name="input" placeholder="ex: The joker" icon="search" onChange={handleChange} />
                <RateSearch grabData={grabData} />
                </div>
                    <div className="buttons">
                        <button className="search-button"  onClick={handleClick}> Search </button>
                        <AddMovie handleAdd={handleAdd}/>
                    </div>
            </form>
            
        </div>
    ) 
}

export default SearchMovie



