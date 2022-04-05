import axios from 'axios'

export function getRecipes() {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/recipes')
            return dispatch({type:"GET_ALL_RECIPES", payload: json.data})
        }
        catch(e) {
            console.log('error al traer todas las recetas' + e)
        }
    }
}
