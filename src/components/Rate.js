import React, {useState} from 'react'
import ReactStars from "react-rating-stars-component";



function Rate ({grabData}) {

  const [rate,setRate] = useState(0)

  const ratingChanged = (newRating) => {
    grabData(newRating)
  };

    return (
      <ReactStars classNames="stars"
      count={5}
      onChange={ratingChanged}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
    )
    
}

export default Rate
