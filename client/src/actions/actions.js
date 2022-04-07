import axios from 'axios'

export function getRecipes() {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/recipes')
            return dispatch({type:"GET_ALL_RECIPES", payload: json.data})
        }
        catch(e) {
            console.log('Error al traer todas las recetas' + (e))
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