

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

    case 'ORDER_BY_NAME':
      const allRecipes3 = state.allRecipes;
      const sortedRecipes = action.payload === 'A-Z' ?
      allRecipes3.sort(function (a,b) {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        return 0;
      }) :
      allRecipes3.sort(function (a,b) {
        if (a.title < b.title) return 1;
        if (b.title < a.title) return -1;
        return 0;
      });
      return {
        ...state,
        recipes: sortedRecipes
      }
    case 'ORDER_BY_SCORE':
      const allRecipes4 = state.allRecipes;
      const sortedRecipesByScore = action.payload === 'Highest Score' ?
      allRecipes4.sort(function (a,b) {
        if (a.score > b.score) return 1;
        if (b.score > a.score)  return -1;
        return 0;
      }) :
      allRecipes4.sort(function (a,b) {
        if (a.score < b.score)  return 1;
        if (b.score < a.score) return -1;
        return 0;
      });  
      return{
        ...state,
        recipes: sortedRecipesByScore
      }
    case 'SEARCH_BY_NAME':
      return {
        ...state,
        recipes: action
      }
    default: return state;
  }; 
 
     
};

