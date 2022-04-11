import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getRecipes} from '../actions/actions.js';
import Card from './Card';
import './Cards.css';
import Pages from "./Pages";
import {Link} from 'react-router-dom';
const defaultImg = require ('../images/images.jpg')




export default function Cards({currentPage, setCurrentPage}){
        const dispatch  = useDispatch();
        useEffect( () => {dispatch(getRecipes())}, [dispatch] );

        //TRAIGO LAS RECETAS DEL ESTADO
        const allRecipes = useSelector(state => state.recipes);

        //ESTADOS PARA EL PAGINADO
        // const [currentPage, setCurrentPage] = useState(1);
        const [recipesPerPage, setRecipesPerPage] = useState(9);

        //ultima receta en la pagina
        const lastRecipe = currentPage * recipesPerPage;

        // primera receta de la pagina
        const firstRecipe = lastRecipe - recipesPerPage;

         // selecciono la cantidad de recetas que va en cada pagina
        const currentRecipes = allRecipes.slice(firstRecipe, lastRecipe);

         const pages = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container2">
         <div className="pagesContainer">
        <Pages recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} pages={pages}/>
        </div>
        <div className="map">

        { allRecipes? currentRecipes.map(e => { 
                 return (
                    <Link to={"/detail/" + e.id} key={e.id}>
                    <Card title={e.title} diets={e.diets? e.diets: "No diet type."} image={e.image? e.image: "Image not found"} key={e.id}/> 
                    </Link>
                 )
             }
             
         ): <p>Loading...</p>}
        </div>
        <div className="pagesContainer">
        <Pages recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} pages={pages}/>
        </div>
        </div>
     
    )
      }
