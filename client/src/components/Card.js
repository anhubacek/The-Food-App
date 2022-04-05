import React from "react";
import './Card.css'

export default function Card ({title, image, diets}) {
    return(
        <div className='cardContainer'>
            <h6>{title}</h6>
            <img src={image} alt=' ' width='200px' />
            <h7>{diets}</h7>
        </div>
    )
}