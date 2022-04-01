import React from "react";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getRecipes} from '../actions/actions.js'
import './Home.css'
import SearchBar from "./SearchBar.js";
import  Cards from './Cards.js'

export default function Home() {
    const dispatch  = useDispatch();
    const allRecipes = useSelector( (state) => state.recipes)

    useEffect( () => {dispatch(getRecipes())}, [])
    return (
        <div className= 'container'>
            <div className ='nav'>
           <div className='title'> <h1>The Food App</h1></div>
            <div className='links'><h4>Create Recipe</h4></div>

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