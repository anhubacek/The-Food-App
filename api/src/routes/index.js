const { Router } = require('express');

// Importar todos los routers;
//const authRouter = require('./auth.js');
const axios = require('axios');
const {Diet, Recipe} = require('../db')
const {
    API_KEY
  } = process.env;
  const cors= require ('cors')

const router = Router();
const bodyParser = require('body-parser')

// Configurar los routers
//router.use('/auth', authRouter);
router.use(cors())



//TRAIGO LA DATA DE LA API//

const getApiData = async () => {
  try{
      const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    
    const apiData = apiUrl.data.results.map( e => {
      return {         
            title: e.title,
            id: e.id,
            resume: e.summary,
            score: e.spoonacularScore,
            healthScore: e.healthScore,
            image: e.image,
            dishTypes:(e.dishTypes.map(e =>(' ' + e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()))).toString(),
            diets: (e.diets.map(e =>(' ' + e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()))).toString(),
            instructions:e.analyzedInstructions.length? ((e.analyzedInstructions.map(e =>e.steps.map(e =>{
                return e.number + ' ' + e.step
              })
              
            ))[0]).toString(): 'No instructions needed.'
      };
      
    });

 
    return apiData
  }
  catch(e){
    console.log('Error en el llamado a la api' + (e))
  }
};



//TRAIGO LA DATA DE LA BASE DE DATOS//
const getDbData = async () => {
  try{
    const dbData = await Recipe.findAll({ 
      include:
         {model: Diet, 
          attributes: ['name'], 
          through: { attributes:[] }
        }
      });
      
      const dataBaseOK = dbData.map( e => {
        return (
          {
            title: e.title,
            id: e.id,
            resume:e.resume,
            healthScore: e.healthScore,
            score: e.score,
            image: e.image,
            instructions: e.instructions,
            created: e.created,
            dishTypes: e.dishTypes,
            diets: ((e.diets.map(e => e.name)).map(e => ' '+ e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())).toString()
          }
      )})
           return dataBaseOK;
        }
  catch(e) {
    console.log('Error en llamado a la BD' + (e))
  }

};




//TRAIGO LA DATA DE API Y BASE DE DATOS//
const getTotalRecipes = async () => {
  const getApiInfo = await getApiData() // traigo la info de la api
  const getDbInfo = await getDbData() // traigo la info de la DB
  return getApiInfo.concat(getDbInfo) //retorno la info total
 
};  



//////////////////////////////////// R U T A S ////////////////////////////////////////////////


//TRAE TODAS LAS RECETAS- 
router.get('/recipes', async (req,res) => {
  const {name} = req.query       
  try {
    const allRecipes = await getTotalRecipes() 
    if(name) {
      const nameRecipe = allRecipes.filter(e => e.title.toLowerCase().includes(name.toLowerCase()))
          if(nameRecipe) {
          res.status(200).send(nameRecipe)
          } else {
          res.status(404).send('no existe la receta')
          }
  } else {
    console.log(allRecipes)
    res.status(200).send(allRecipes) 
  }
}
catch(e){

  console.log('error al buscar la receta' + e)
}
});




//TRAE LA RECETA BUSCADA POR ID

router.get('/recipe/:id', async (req,res) => {
  const {id} = req.params
  try {
    const recipes = await getTotalRecipes()
    const idRecipe = recipes.filter( e => e.id == id)
    console.log(idRecipe)
    res.status(200).send(idRecipe)
  }
  catch(e) {
    console.log("Error al buscar receta por ID" + e)
  }
});



//  TRAE TIPOS DE DIETAS DE LA API
router.get('/types' , async (req, res) => {
  try{
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
  
  const apiData = apiUrl.data.results.map( e => { 
    return  e.diets //traigo la prop diets de cada receta
  });
  const data = apiData.flat(1) //concateno todos los arreglos q llegan dentro del arreglo

  const cleanData = data.filter((value, i) => { //saco los elementos repetidos
    return data.indexOf(value) === i;
  }
);
const cleanData2 = cleanData.map( e => {
  return {name: e} //convierto el array en un array de objetos con la prop name: (nombre de la dieta)
})

cleanData2.forEach( async (e) => { //por cada objeto de este arreglo
  await Diet.findOrCreate({  //se fija si ya existe y sino lo crea en la bd
  where: {name: e.name}, 
  defaults: {
    name: e.name  //establezco la prop name del modelo diet en "nombre de la dieta"
  }
})
})
  res.status(200).send(cleanData2)
}
catch(e){
  console.log('Error en el llamado a la api' + (e))
}
})





router.post('/recipe', async (req, res) => {
  //recibo los parametros por body (formulario)
  const {title, resume, score, healthScore, image, instructions, dishTypes, diets, id} = req.body
  try{
    if (title, resume){ //si estan las propiedades obligatorias
        const recipecreated = await Recipe.create({
            title,  //creo la receta con los valores obtenidos
            resume, 
            score, 
            healthScore, 
            image, 
            instructions, 
            dishTypes, 
            id
        }
        ) //busco el tipo de dieta en la bd que coincida con el valor que llega por body "diets"
            const dietType = await Diet.findAll({
              where: {name:diets},
            });
             // se lo agrego a la receta, se vincula
             await recipecreated.addDiet(dietType);
         
            res.status(200).send("Recipe created");
        
    } else { 
      res.status(404).send('Please complete all fields')
    }
  }
  catch(e) {
    console.log('error en el post' + (e))
  }
  
})



router.delete('/delete/:id', async (req,res) =>{
const {id} = req.params
try{
  const recipe= await Recipe.destroy({
    where: {id:id},
  });
  res.status(200).send("Receta eliminada")
}
catch(e) {
  console.log("Error al eliminar la receta" + (e))
}
}) 













module.exports = router;







// https://api.spoonacular.com/recipes/complexSearch?apiKey=ff267bd13730442abb449845b729d555&addRecipeInformation=true

// https://api.spoonacular.com/recipes/complexSearch?apiKey=ff267bd13730442abb449845b729d555&addRecipeInformation=true