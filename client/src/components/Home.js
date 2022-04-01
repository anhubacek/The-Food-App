import React from "react";
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getRecipes} from '../actions/actions.js'
import './Home.css'
import SearchBar from "./SearchBar.js";
import  Card from './Card.js'
import {Link} from 'react-router-dom'

export default function Home() {
    const dispatch  = useDispatch();
    const allRecipes = useSelector( (state) => state.recipes)

    useEffect( () => {dispatch(getRecipes())}, [dispatch]);

    return (
        <div className= 'container'>
            <div className ='nav'>
           <div className='title'> <h2>The Food App</h2></div>
            <div className='links'>
            <Link to='/create'>
            <h5>Create Recipe</h5>
            </Link>
            </div>

            </div>
          <div className="searchbar">
              <SearchBar/>
          </div>
            <div className='pages'>
             { allRecipes && allRecipes.map(e => {
             return <Card title={e.title} image={e.image} diets={e.diets} />}
             
             )}
            </div>
            


        </div>
    )
}