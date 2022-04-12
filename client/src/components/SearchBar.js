import React from "react";
import './SearchBar.css'
import { useDispatch } from 'react-redux';
import { filterByDiet, searchByName } from "../actions/actions";
import { filterCreated } from "../actions/actions";
import { orderByName } from "../actions/actions";
import { orderByScore } from './../actions/actions';


export default function SearchBar({setCurrentPage, setOrder, name, setName}) {
    const dispatch = useDispatch();
   

    function handleFilterDiet(e) {
        e.preventDefault(e);
        dispatch(filterByDiet(e.target.value));
        setCurrentPage(1);
    }

    function handleFilterCreated(e) {
        e.preventDefault(e);
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
    }    

    function handleOrderByName(e) {
        e.preventDefault(e);
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder("names order:" + e.target.value);
    }

    function handleOrderByScore(e){
        e.preventDefault(e);
        dispatch(orderByScore(e.target.value));
        setCurrentPage(1);
        setOrder("scores order:" + e.target.value);
    }

    function handleSearchByName(e) {
        e.preventDefault(e);
        dispatch(searchByName(name))
        setName(" ")
        
    }

    function handleInputChange(e){
        setName(e.target.value)

    }    
    
    return (
        <div className= 'containerbar'>
            <input className='input' autoComplete="false" value={name}
            onChange={handleInputChange} placeholder="Recipe Name"/>
            <button type="submit" onClick={handleSearchByName}>Search</button>
            <select onChange={handleOrderByName} className="az">
                 <option >Order</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
            </select>
            <select onChange={handleFilterDiet}  className="diet"placeholder="Diet">
                <option value="All">All</option>
                <option value="Dairy free">Dairy Free</option>
                <option value="Lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten free">Gluten Free</option>
                <option value="Pescatarian">Pescatarian</option>
                <option value="Paleolithic">Paleolithic</option>
                <option value="Primal">Primal</option>
                <option value="Fodmap friendly">Low FODMAP</option>
                <option value="Whole 30">Whole 30</option>
            </select>
            <select onChange={handleFilterCreated} className="type">
                <option value="All">All</option>
                <option value="Existent">Existent</option>
                <option value="Created">Created</option>
            </select>
            <select onChange={handleOrderByScore} className="score">
                <option >Score</option>
                <option value="Highest Score">Highest Score</option>
                <option value="Lowest Score">Lowest Score</option>
            </select>

            
        </div>
    )
}