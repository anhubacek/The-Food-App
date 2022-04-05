import React from "react";
import './Home.css'
import SearchBar from "./SearchBar.js";
import  Cards from './Cards.js'
import {Link} from 'react-router-dom';


export default function Home() {

    return (
        <div className= 'container'>
            <div className ='nav'>
                    <div className='title'> <h2>The Food App</h2></div>
                    <div className='links'>
                    <Link to='/create'> <h5>Create Recipe</h5> </Link>
                    </div>
            </div>
          <div className="searchbar">
              <SearchBar/>
          </div>
            <div className='pages'>
 
             <Cards/>
            </div>
         
        </div>
    )
}