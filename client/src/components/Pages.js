import React from "react";
import './Pages.css'

export default function Pages ({recipesPerPage, allRecipes, pages}){

    const pageNumbers = []; //allrecipes es el estado "recipes" que va cambiando de acuerdo a la accion
                        //esta declarado asi en el componente Home
        //lo importo y lo divdimos por cantidad de recetas por pagina, esto nos da el numero
        // de paginas que tiene que haber
    for(let i=1; i<= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i);  // pusheamos los numeros en el array de paginas
    }


    return(
        <nav className="pageNumbers">
            <ul className="ulPages">
            { pageNumbers && pageNumbers.map( e => ( //por cada numero devolvemos una lista de botones
                <li className="number" key={e}>
                    <button className="pageButton" onClick={ () => pages(e)}>{e}</button> 
                </li> // pages es una funcion que setea la currentpage en el numero
                        // indicado en cada boton 
                // seteo el estado de la pagina actual y la cant de recetas que se tienen que renderizar
            ))}
            </ul>
        </nav>
    )
}