import axios from 'axios'

export function getRecipes() {  //TRAE TODAS LAS RECETAS
    return async function(dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/recipes')
            return dispatch({type:"GET_ALL_RECIPES", payload: json.data})
        }
        catch(e) {
            console.log('Error al traer todas las recetas' + (e))
        }
    }
}

export function getTypes(){ //TRAE LOS TIPOS DE DIETA
    return async function(dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/types')
            return dispatch({type:"GET_ALL_TYPES", payload: json.data})
        }
        catch(e) {
            console.log('Error al traer los tipos de dieta' + (e))
        }
    }
}

export function postRecipe(payload) {  //CREA LA NUEVA RECETA
    return async function() {
        try {
            const json = await axios.post('http://localhost:3001/recipe', payload)
            return json;
        }
        catch(e) {
            console.log('Error al crear la receta' + (e))
        }
    }
}



export function filterByDiet(payload) {
    return {type:"FILTER_BY_DIET", payload}
}

export function filterCreated(payload) {
    return { type:"FILTER_CREATED", payload}
}


export function orderByName(payload) {
    return {type:"ORDER_BY_NAME", payload}
}

export function orderByScore(payload) {
    return {type:"ORDER_BY_SCORE", payload}
}

export function cleanDetail() {
    return {type:"CLEAN_DETAIL"}
}

export function searchByName(payload) { // TRAE LA RECETA BUSCADA POR QUERY
    return async function(dispatch) {
        try {   
            const json= await axios.get('http://localhost:3001/recipes?name=' + payload)
            return dispatch ({type:"SEARCH_BY_NAME", payload: json.data})
        }
        catch (e) {
            console.log('Error al buscar por nombre' + (e))
        }
    }
}


export function getRecipeById(id){ // TRAE LA RECETA BUSCADA POR ID
    return async function(dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/recipe/${id}`)
            return dispatch({type:"GET_RECIPE_BY_ID", payload: json.data})
        }
        catch(e) {
            console.log('Error al traer la receta por ID' + (e))
        }
    }

}


export function deleteRecipe(id){
        return async function(dispatch) {
            try {
                await axios.delete(`http://localhost:3001/delete/${id}`)
                console.log(id)
                return dispatch({type: "DELETE_RECIPE"})
            }
            catch(e) {
                console.log("Error al eliminar la receta" + (e))
            }
        }
}