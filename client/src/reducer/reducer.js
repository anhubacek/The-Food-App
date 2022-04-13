

let initialState = {
    recipes: [], //todas las recetas
    allRecipes:[], //copia de todas las recetas que voy a ir filtrando para renderizar
    types: [], //tipos de dieta
    detail: [], //trae por id
};

export default function rootReducer (state=initialState, action){ 
  switch(action.type) {
    case 'GET_ALL_RECIPES': //cargo el estado inicial con todas las recetas
        return  {      // y creo una copia que voy a usar para ir filtrando
          ...state,
          recipes: action.payload,
          allRecipes: action.payload
        };
        

    case 'FILTER_BY_DIET':
      const allRecipes = state.allRecipes; //guardo en una variable la copia del estado 
      //creo otra variable y le digo que si payload es "all" me retorne todas las recetas, y sino (o sea que
      //si el payload (value del select)es algun tipo de dieta, me filtra todas las recetas que incluyan esa dieta)
      const filteredRecipes = action.payload === 'All'? allRecipes: allRecipes.filter(e => e.diets.includes(action.payload))
      return {
        ...state,
        recipes: filteredRecipes
      }
      
    case 'FILTER_CREATED':
      const allRecipes2 = state.allRecipes;
      // si el payload es "created" me filtra las que tengan la propiedad "created", y sino
      // filtra solo las que no tengan esa propiedad
      const filteredRecipes2 = action.payload === 'Created'? allRecipes2.filter(e => e.created): allRecipes2.filter(e => !e.created);
      return{
        ...state,
        recipes: action.payload === 'All' ? allRecipes2 : filteredRecipes2,
      } // como tiene la opcion "all" primero pregunto eso para q devuelva todo y sino devuelve
      // solo el estado filtrado



    case 'ORDER_BY_NAME':
      const allRecipes3 = state.allRecipes;
      const sortedRecipes = action.payload === 'A-Z' ?
      allRecipes3.sort(function (a,b) { //compara de a dos y si el title de "a" es "mayor" lo pone adelante (1)
        if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
        if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;//si es menor lo pone atras (-1)
        return 0; // si son iguales no cambia nada
      }) :
      allRecipes3.sort(function (a,b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) return 1; //hago lo mismo a la inversa para el sentido Z-A
        if (a.title.toUpperCase() > b.title.toUpperCase()) return -1;
        return 0;
      });
      return {
        ...state,
        recipes: sortedRecipes //devuelvo el filtro que corresponda
      }

    case 'ORDER_BY_SCORE':
      const allRecipes4 = state.allRecipes; 
      const sortedRecipesByScore = action.payload === 'Lowest Score' ?
      allRecipes4.sort(function (a,b) {
        if (a.score > b.score) return 1;
        else if (a.score < b.score)  return -1;
        else return 0;
      }) :
      allRecipes4.sort(function (a,b) {
        if (a.score > b.score)  return -1;
        else if (a.score < b.score) return 1;
        else return 0;
      });  
      return{
        ...state, //devuelvo las dietas ordenadas segun corresponda al payload
        recipes: sortedRecipesByScore
      }
    case 'SEARCH_BY_NAME': // guardo las recetas que incluyan el nombre buscado
      return {
        ...state,
        recipes: action.payload
      }
    case 'GET_RECIPE_BY_ID': //guardo en detail la dieta buscada por ID 
      return {
        ...state,
        detail: action.payload
      }
    case 'GET_ALL_TYPES':  //guardo los tipos de dieta en el estado types
      return {
        ...state,
        types: action.payload
      }
    case 'CLEAN_DETAIL':  //limpio el estado del detalle para que no quede el anterior 
      return {
        ...state,
        detail: []
      }
    case 'DELETE_RECIPE':
      return {
        ...state,
        recipes: []
      }
      case 'CLEAN_RECIPES':  //limpio el estado de las recetas
      return {
        ...state,
        recipes: []
      }
    default: return state;
  }; 
 
     
};

