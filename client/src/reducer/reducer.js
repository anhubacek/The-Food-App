

let initialState = {
    recipes: [],
    allRecipes:[],
};

export default function rootReducer (state=initialState, action){ 
  switch(action.type) {
    case 'GET_ALL_RECIPES':
        return  {
          ...state,
          recipes: action.payload,
          allRecipes: action.payload
        };
        

    case 'FILTER_BY_DIET':
      const allRecipes = state.allRecipes;
      const filteredRecipes = action.payload === 'All'? allRecipes: allRecipes.filter(e => e.diets.includes(action.payload))
      return {
        ...state,
        recipes: filteredRecipes
      }
    case 'FILTER_CREATED':
      const allRecipes2 = state.allRecipes;
      const filteredRecipes2 = action.payload === 'Created'? allRecipes2.filter(e => e.created): allRecipes2.filter(e => !e.created);
      return{
        ...state,
        recipes: action.payload === 'All' ? allRecipes2 : filteredRecipes2,
      }
    default: return state;
  }; 
 
     
};

