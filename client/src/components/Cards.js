import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getRecipes} from '../actions/actions.js';
import Card from './Card';
import './Cards.css';
import Pages from "./Pages";
import {Link} from 'react-router-dom';


export default function Cards({currentPage, setCurrentPage}){
        const dispatch  = useDispatch();
        useEffect( () => {dispatch(getRecipes())}, [dispatch] );
        //apenas se monta el componente
        //TRAIGO LAS RECETAS DEL ESTADO
        const allRecipes = useSelector(state => state.recipes);

        //ESTADOS PARA EL PAGINADO
        //  [currentPage, setCurrentPage] este estado viene de home
        const [recipesPerPage] = useState(9); //seteo la cant de recetas q quiero por pagina

        //guardo el indice de la ultima receta que va a estar en la pagina
        const lastRecipe = currentPage * recipesPerPage;

        //guardo elindice de la primera receta que va a estar en la pagina
        const firstRecipe = lastRecipe - recipesPerPage;

         // guardo en currentRecipes las recetas que van en cada pagina
         //cortando del arreglo total segun los indices first y last
        const currentRecipes = allRecipes.slice(firstRecipe, lastRecipe);

        //esta funcion setea la pagina actual a renderizarse, se la voy a pasar al paginado
         const pages = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container2">
         <div className="pagesContainer">
         
         {/* paso al paginado la cant de recetas que quiero por pagina, el estado de recipes
         y la funcion que setea la pagina actual a renderizarse */}
        <Pages recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} pages={pages}/>
        </div>
        <div className="map">

        { allRecipes.length? currentRecipes.map(e => { 
                 return (
                    <Link to={"/detail/" + e.id} key={e.id}> 
                    {/* al clickear me dirige a la ruta con el id de cada receta */}
                    <Card title={e.title} 
                    diets={e.diets? e.diets: "No diet type."} 
                    // score={e.score}
                    image={e.image? e.image: "https://media.istockphoto.com/photos/blank-recipe-book-on-wooden-table-picture-id481482102?b=1&k=20&m=481482102&s=170667a&w=0&h=68rhfYQV0RU3JLXrF6T1T7tWQQ4nzb24fMZ-KxBy8Hk="} key={e.id}/> 
                        {/* seteo una imagen por default en caso de que no se agregue una al crear la receta */}
                                      
                 </Link>
                 )
             }
             
         ): <p className="loading">...</p>
           }  
         
        </div>
        <div className="pagesContainer">
        <Pages recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} pages={pages}/>
           {/* agrego de nuevo las pages para que sea mas comodo cuando el usuario
           esta abajo de todo */}

        </div>
        </div>
     
    )
      }
