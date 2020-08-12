import React from 'react'
import {useEffect} from 'react'

import MovieCard from './MovieCard';

function Stars({value}) {


function getStar(value) {
    switch (value) {
        case 0:
            return  "fa fa-star";
        case 1:
            return "fa fa-star checked";
    } 
}

function getStars(value) {
    switch(value) {
        case 0:
            return [0,0,0,0,0];
        case 1:
            return [1,0,0,0,0]
        case 2:
            return [1,1,0,0,0]
        case 3:
            return [1,1,1,0,0];
        case 4:
            return [1,1,1,1,0]
        case 5:
            return [1,1,1,1,1]
        default:
            return [0,0,0,0,0]
    }
    
}



    return (
        <div>
        {
            getStars(value).map((value,index) => (
                <span key={index} className={getStar(value)}></span>
                // < img src={getStar(value)} style={{width:"30px",height:"30px"}}/>
            ))
        }         
        </div>
    )
}
export default Stars

