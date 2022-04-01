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
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>
            <select className="type">
                <option>All</option>
                <option>Existent</option>
                <option>Created</option>
            </select>
            <select className="score">
                <option>Hight</option>
                <option>Low</option>
            </select>

            
        </div>
    )
}