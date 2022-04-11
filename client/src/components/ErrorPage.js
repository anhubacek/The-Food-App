import './Detail.css'
import React  from "react";
import {Link}from 'react-router-dom'


export default function ErrorPage() {
return (
    <div>
    
    <div className= 'container1'>
        <div className ='nav'>
            <Link to='/home' >
            <div className='title'> <h2>The Food App</h2></div>
            </Link>
            <div className='links'>
                <Link to='/create'>
                <h5>Create Recipe</h5>
                </Link>
            </div>
        </div>
            <div className="pageserror">
        <p className="notfound">404  - </p> 
        <p className="notfound"> NOT FOUND</p> 
        </div>
        </div>
     
        
    </div>
)
}
