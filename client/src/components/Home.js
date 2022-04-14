import React, {useState}from "react";
import './Home.css'
import SearchBar from "./SearchBar.js";
import  Cards from './Cards.js'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRecipes } from './../actions/actions';


export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    //seteo la pagina actual a renderizarse en 1

    const [order, setOrder] = useState(' ');
    //este estado me va a permitir actualizar y volver a renderizar
    //cuando haga un cambio en los ordenamientos

    const [name, setName] = useState('');
    //este estado se lo paso a la searchbar para hacer la busqueda por nombre
 

    const dispatch = useDispatch()
    function handleFoodButton(e) { //con esta funcion seteo el nombre en vacio y me vuelve
        dispatch(getRecipes())    // a renderizar todas las recetas al apretar el boton FoodApp
    }
    return (
        <div className= 'container'>
            <div className ='nav'>
                    <div className='title'> 
                    <Link to="/home" onClick={handleFoodButton}>
                    <h2>The Food App</h2>
                    </Link>
                    </div>
                    <div className='links'>
                    <Link to='/create'> <h5>Create Recipe</h5> </Link>
                    </div>
            </div>
          <div className="searchbar">
              <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage}
                  order={order} setOrder={setOrder} name={name} setName={setName}
              />
          </div>
            <div className='pages'>
 
             <Cards currentPage={currentPage} setCurrentPage={setCurrentPage}
                  order={order} setOrder={setOrder}
             />
            </div>
         
        </div>
    )
}