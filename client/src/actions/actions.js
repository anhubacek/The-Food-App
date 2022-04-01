import axios from 'axios'

export function getRecipes() {
    return async function(dispatch) {
        var json = await axios.get('https://localhost:3001/allrecipes')
        return dispatch({type:"GET_ALL_RECIPES", payload: json.data})
    }
}