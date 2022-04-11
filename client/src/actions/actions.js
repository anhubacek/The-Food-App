import axios from 'axios'

export function getRecipes() {
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

export function getTypes(){
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

export function postRecipe(payload) {
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

export function searchByName(payload) {
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


export function getRecipeById(id){
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