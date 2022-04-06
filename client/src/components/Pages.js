import React from "react";
import './Pages.css'

export default function Pages ({recipesPerPage, allRecipes, pages}){

    const pageNumbers = [];
    for(let i=0; i<= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i+1);
    }

    return(
        <nav className="pageNumbers">
            <ul className="ulPages">
            { pageNumbers && pageNumbers.map( e => (
                <li className="number" key={e}>
                    <button className="pageButton" onClick={ () => pages(e)}>{e}</button> 
                </li> // seteo el estado de la pagina actual y las recetas que se tienen que renderizar
            ))}
            </ul>
        </nav>
    )
}