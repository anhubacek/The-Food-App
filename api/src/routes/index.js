const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const Diets = require('../models/Diets');
const { TimeoutError } = require('sequelize/types');
const Recipe = require('../models/Recipe');


const {
    API_KEY
  } = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiData = async () => {
  const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
  const apiData = apiUrl.map( e => { // el map recorre todas las recetas y
    return {            // me devuelve un arreglo solo con los datos que necesito de la api
          title: e.title,
          id: e.id,
          resume: e.summary,
          score: e.spoonacularScore,
          healthy: e.veryHealthy,
          image: e.image,
          instructions: e.analyzedInstructions,
    };
  }) 
};

const getDbData = async () => {
  const dbData = await Recipe.findAll({
    include: [
      {model: Diets,
      attributes: 'name'},
      through={  
        attributes: []
      },
    ]               // me devuelve todo lo q hay en la base de datos de receta
  })              // e incluye los tipos de dieta de cada una
  return dbData;
};

const getTotalRecipes = async () => {
  const getApiInfo = await getApiData() // traigo la info de la api
  const getDbInfo = await getDbData() // traigo la info de la DB
  return getApiInfo.concat(getDbInfo) //retorno la info total
};  //




// router.get('/recipes', async (req,res) => {
//   const allRecipes = await getTotalRecipes()
//   res.status(200).send(allRecipes)  
// })


router.get('/recipes?name=', async (req,res) => {
  const {name} = req.query        //
  const allRecipes = await getTotalRecipes() //las paso a minuscula para comparar si son iguales
  const nameRecipe = allRecipes.filter(e => e.name.toLowerCase.includes(name.toLocaleLowerCase))
  if (nameRecipe) {
    res.status(200).send(nameRecipe)
  } else {
    res.status(404).send('Recipe not found')
  }
})

router.get('/recipes/:idRecipe', async (req,res) => {
  const {idRecipe} = req.params
  const allRecipes = await getTotalRecipes()
  const nameRecipe = allRecipes.filter(e => e.id.toLowerCase === idRecipe)
  if (nameRecipe) {
    res.status(200).send(nameRecipe)
  } else {
    res.status(404).send('Recipe not found')
  }
})

router.get('/types' , async (req, res) => {
  const allRecipes = await getTotalRecipes()
  const types = allRecipes.map( e => e.diets) //entro a la prop diets de cada receta
  const types2 = types.forEach(e => {  //dentro e cada diets lo mapeo
      Diets.findOrCreate({    //y por cada elemento me fijo si esta y sino se crea en DB
        where: {name: e}  // la prop name de la DB pasa a ser el elemento
      })
    
  })
  const allTypes = await Diets.findAll()
  res.status(200).send(allTypes)
})

router.post('/recipe', async (req, res) => {
  const {title, resume, image, instructions, diet} = req.body
  if (title, resume, image, instructions, diet){
    const recipecreated = await Recipe.findOrCreate({
      title, 
      resume, 
      image, 
      instructions, 
    })
    const dietType = await Recipe.findAll({
      where: {name:diet }
    })
    res.status(200).json(await recipecreated.addDiets[dietType.id])

    
  } else {
    res.status(404).send('Please complete all fields')
  }
})







module.exports = router;




// https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true