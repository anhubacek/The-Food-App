import React from "react";

import './Home.css'
import {Link} from 'react-router-dom'

export default function Detail({title, id, resume, score, healthScore, image, dishType, diets, instructions}) {


    return (
        <div className= 'container'>
            <div className ='nav'>
                <Link to='/home'>
                <div className='title'> <h2>The Food App</h2></div>
                </Link>
                <div className='links'>
                    <Link to='/create'>
                    <h5>Create Recipe</h5>
                    </Link>
                </div>
            </div>
           
            <div >
                <div >
                    <p className="title">{title}</p>
                        <div >
                        <img src={image} alt=' '  />
                        </div>
                    <h6>{diets}</h6>
                </div>
           
            </div>
            


        </div>
    )
}