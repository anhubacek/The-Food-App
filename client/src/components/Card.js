import React from "react";
import './Card.css'


export default function Card ({title, image, diets, id}) {
    return(
        <div className='cardContainer'>

            <div className='cardContainer'>
                <p className="title">{title}</p>
                    <div className= 'imgContainer'>
                    <img src={image} alt=' ' className="recipeImage" />
                    </div>
                <h6>{diets}</h6>
            </div>
    
        </div>
    )
}