import React, {useState} from 'react'

function RateSearch({grabData}) {

    const [rateSearch,setRateSearch] = useState(0)

    const handleRateSearch = (value) => {
        setRateSearch(value);
        grabData(value)
    }

    // const clearRate = () => {
    //     setRateSearch(0)
    // }

    return (
        
        <div className="stars">
            
            <span onClick={()=>handleRateSearch(1)} className={rateSearch>=1?('fas fa fa-star checked'):("fas fa fa-star")}></span>
            <span onClick={()=>handleRateSearch(2)} className={rateSearch>=2?('fas fa fa-star checked'):("fas fa fa-star")}></span>
            <span onClick={()=>handleRateSearch(3)} className={rateSearch>=3?('fas fa fa-star checked'):("fas fa fa-star")}></span>
            <span onClick={()=>handleRateSearch(4)} className={rateSearch>=4?('fas fa fa-star checked'):("fas fa fa-star")}></span>
            <span onClick={()=>handleRateSearch(5)} className={rateSearch>=5?('fas fa fa-star checked'):("fas fa fa-star")}></span>
            <span onClick={()=>handleRateSearch(0)} className="fas fa fa-star" style={{color:"red",borderRadius:'15px'}}></span>

        </div>
    )
}

export default RateSearch
