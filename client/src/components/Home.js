import React, {useState}from "react";
import './Home.css'
import SearchBar from "./SearchBar.js";
import  Cards from './Cards.js'
import {Link} from 'react-router-dom';


export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState(' ');
    const [name, setName] = useState('');
    // const [recipesPerPage, setRecipesPerPage] = useState(9);
    return (
        <div className= 'container'>
            <div className ='nav'>
                    <div className='title'> <h2>The Food App</h2></div>
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