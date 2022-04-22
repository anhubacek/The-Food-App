import React from "react";
import './Card.css'


export default function Card ({title, image, diets, id}) {
    return(
       

            <div className='cardContainer'>
            <div className="divtitle">
                <p className="title">{title}</p>
                </div>
                    <div className= 'divimage'>
                    <img src={image} alt=' ' className="recipeImage" />
                    </div>
                    <div className="divdieta">
                <p className="dietcard">{diets}</p>
                </div>
               
            </div>
    
       
    )
}