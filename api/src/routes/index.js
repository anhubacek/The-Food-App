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
// // parse application/x-www-form-urlencoded
// router.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// router.use(bodyParser.json())






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
            diets: (e.diets.map(e =>(' ' + e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()))).toString(),
            instructions:e.analyzedInstructions.length? ((e.analyzedInstructions.map(e =>e.steps.map(e =>{
                return e.number + ' ' + e.step
              })
              
            ))[0]).toString(): 'No hay paso a paso'
      };
      
    });
    // apiData.forEach( async (e) => { 
    //   await Recipe.findOrCreate({
    //   where: {title: e.title},
    //   defaults: {
    //     title: e.title,
    //     id: e.id,
    //     resume: e.resume,
    //     score: e.score,
    //     healthScore: e.healthScore,
    //     image: e.image,
    //     instructions:e.instructions,
    //   }
    // })
    // })
 
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
          through: { attributes: [] }
        }});

        return dbData;
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


//FUNCIONA- 
router.get('/recipes', async (req,res) => {
  const {name} = req.query       
  try {
    const allRecipes = await getTotalRecipes() 
    console.log (allRecipes)
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




//FUNCIONA-
router.get('/recipes/:idRecipe', async (req,res) => {
  const {idRecipe} = req.params
  try {
    const idRecipeApi = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)

      const recipeId= {            
            title: idRecipeApi.data.title,
            id: idRecipeApi.data.id,
            resume: idRecipeApi.data.summary,
            score: idRecipeApi.data.spoonacularScore,
            healthScore: idRecipeApi.data.healthScore,
            image: idRecipeApi.data.image,
            instructions:idRecipeApi.data.analyzedInstructions? idRecipeApi.data.analyzedInstructions.map(e =>e.steps.map(e =>{
              return e.number + ' ' + e.step
            })): 'No hay paso a paso'
    };
      
    res.status(200).send(recipeId)
  }
  catch(e) {
    console.log("Error al buscar receta por ID" + e)
  }
});



// HASTA AHORA TRAE UN ARRAY CON DIETAS EN LA API
router.get('/types' , async (req, res) => {
  try{
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
  
  const apiData = apiUrl.data.results.map( e => { 
    return  e.diets
  });
  const data = apiData.flat(1) 

  const cleanData = data.filter((value, i) => {
    return data.indexOf(value) === i;
  }
);
const cleanData2 = cleanData.map( e => {
  return {name: e}
})

cleanData2.forEach( async (e) => { 
  await Diet.findOrCreate({
  where: {name: e.name},
  defaults: {
    name: e.name
  }
})
})
  res.status(200).send(cleanData2)
}
catch(e){
  console.log('Error en el llamado a la api' + (e))
}
})



// const getDietType = async () => {
//   try{
//     let dbTypes = await Diet.findAll();
//     if (!dbTypes) {
//         const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
      
//       const apiData = apiUrl.data.results.map( e =>  e.diets );
//       const data = apiData.flat(1) 
//       const cleanData = data.filter((value, i) => data.indexOf(value) === i);
//       const cleanData2 = cleanData.map( e => {
//         return {name: e}
//       })
//         await Diet.bulkCreate(cleanData2);
//         return cleanData2
      
//     }
//     return(dbTypes)
//   }
    
//   catch(e){
//   console.log('Error en el llamado a la api' + (e))
//   }
// }



router.post('/recipe', async (req, res) => {
  
  const {title, resume, image, instructions, diet} = req.body
  try{
    if (title, resume, image, instructions, diet){
      const recipecreated = await Recipe.findOrCreate({
        where: { title:title},
        defaults:{ 
        title,
        resume, 
        image, 
        instructions, 
      }
      })
      let dietType = await Diet.findAll({
        where: {name:diet }
      })
      const finalRecipe  = await recipecreated.addDiet([dietType.id])
      res.status(200).send(finalRecipe)
    } else {
      res.status(404).send('Please complete all fields')
    }
  }
  catch(e) {
    console.log('error en el post' + (e))
  }
  
})

module.exports = router;




// https://api.spoonacular.com/recipes/complexSearch?apiKey=ff267bd13730442abb449845b729d555&addRecipeInformation=true

// https://api.spoonacular.com/recipes/complexSearch?apiKey=ff267bd13730442abb449845b729d555&addRecipeInformation=true