import React from "react";
import './SearchBar.css'




export default function SearchBar() {

    return (
        <div className= 'containerbar'>
            <input className='input' placeholder=""/>
            <button>Search</button>
            <select className="az">
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
            </select>
            <select className="diet"placeholder="Diet">
                <option value="All">All</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Ovo-Vegatarian">Ovo-Vegetarian</option>
                <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten Free">Gluten Free</option>
                <option value="Pescetarian">Pescetarian</option>
                <option value="Paleolithic">Paleolithic</option>
                <option value="Primal">Primal</option>
                <option value="Low FODMAP">Low FODMAP</option>
                <option value="Whole30">Whole30</option>
            </select>
            <select className="type">
                <option value="All">All</option>
                <option value="Existent">Existent</option>
                <option value="Created">Created</option>
            </select>
            <select className="score">
                <option value="Highest Score">Highest Score</option>
                <option value="Lowest Score">Lowest Score</option>
            </select>

            
        </div>
    )
}