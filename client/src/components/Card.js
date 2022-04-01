import React from "react";

export default function Card (title, image, diets) {
    return(
        <div className='cardContainer'>
            <h3>{title}</h3>
            <img src={image} alt=' ' width='280px' />
            <span>{diets}</span>
        </div>
    )
}