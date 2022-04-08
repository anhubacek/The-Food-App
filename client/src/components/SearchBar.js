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
        dispatch(filterByDiet(e.target.value));
    }

    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value));
    }    

    function handleOrderByName(e) {
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder("name");
    }

    function handleOrderByScore(e){
        dispatch(orderByScore(e.target.value));
        setCurrentPage(1);
        setOrder("score");
    }

    function handleSearchByName(e) {
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
                <option value="Whole 30">Whole30</option>
            </select>
            <select onChange={handleFilterCreated} className="type">
                <option value="All">All</option>
                <option value="Existent">Existent</option>
                <option value="Created">Created</option>
            </select>
            <select onChange={handleOrderByScore} className="score">
                <option value="Any Score">Any Score</option>
                <option value="Highest Score">Highest Score</option>
                <option value="Lowest Score">Lowest Score</option>
            </select>

            
        </div>
    )
}