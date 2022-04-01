import React from "react";

import './Home.css'
import {Link} from 'react-router-dom'

export default function Detail() {


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
          {/* <div className="searchbar">
              <SearchBar/>
          </div> */}
            <div className='pages'>
           
            </div>
            


        </div>
    )
}