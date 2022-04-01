import React from "react";
import './SearchBar.css'




export default function SearchBar() {

    return (
        <div className= 'containerbar'>
            <input className='input' placeholder=""/>
            <button>Search</button>
            <select className="az">
                <option>A - Z</option>
                <option>Z - A</option>
            </select>
            <select className="diet"placeholder="Diet">
                <option>All</option>
                <option>Vegetarian</option>
                <option>Ovo-Vegatarian</option>
                <option>Lacto-Vegetarian</option>
                <option>Vegan</option>
                <option>Gluten Free</option>
                <option>Pescetarian</option>
                <option>Paleo</option>
                <option>Primal</option>
                <option>Low FODMAP</option>
                <option>Whole30</option>
            </select>
            <select className="type">
                <option>All</option>
                <option>Existent</option>
                <option>Created</option>
            </select>
            <select className="score">
                <option>Highest Score</option>
                <option>Lowest Score</option>
            </select>

            
        </div>
    )
}