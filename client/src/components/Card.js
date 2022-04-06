import React from "react";
import './Card.css'
import {Link} from 'react-router-dom';

export default function Card ({title, image, diets, id}) {
    return(
        <div className='cardContainer'>
        <Link to="/detail">
            <div className='cardContainer'>
                <p className="title">{title}</p>
                    <div className= 'imgContainer'>
                    <img src={image} alt=' ' className="recipeImage" />
                    </div>
                <h7>{diets}</h7>
            </div>
        </Link>
        </div>
    )
}