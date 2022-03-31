const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    // timestamps: false
  });
};





// {
//   "results": [
//     {
//       "vegetarian": true,
//       "vegan": true,
//       "glutenFree": true,
//       "dairyFree": true,
//       "veryHealthy": true,
//       "cheap": false,
//       "veryPopular": true,
//       "sustainable": false,
//       "weightWatcherSmartPoints": 4,
//       "gaps": "no",
//       "lowFodmap": false,
//       "aggregateLikes": 3689,
//       "spoonacularScore": 100.0,
//       "healthScore": 76.0,
//       "creditsText": "Full Belly Sisters",
//       "license": "CC BY-SA 3.0",
//       "sourceName": "Full Belly Sisters",
//       "pricePerServing": 112.39,
//       "id": 716426,
//       "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//       "readyInMinutes": 30,
//       "servings": 8,
//       "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
//       "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//       "imageType": "jpg",
//       "summary": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>.",
//       "cuisines": [
//         "Chinese",
//         "Asian"
//       ],
//       "dishTypes": [
//         "side dish"
//       ],
//       "diets": [
//         "gluten free",
//         "dairy free",
//         "lacto ovo vegetarian",
//         "vegan"
//       ],
//       "occasions": [
        
//       ],
//       "analyzedInstructions": [
//         {
//           "name": "",
//           "steps": [
//             {
//               "number": 1,
//               "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
//               "ingredients": [
//                 {
//                   "id": 10011135,
//                   "name": "cauliflower florets",
//                   "localizedName": "cauliflower florets",
//                   "image": "cauliflower.jpg"
//                 },
//                 {
//                   "id": 10111135,
//                   "name": "cauliflower rice",
//                   "localizedName": "cauliflower rice",
//                   "image": "cauliflower.jpg"
//                 },
//                 {
//                   "id": 11135,
//                   "name": "cauliflower",
//                   "localizedName": "cauliflower",
//                   "image": "cauliflower.jpg"
//                 },
//                 {
//                   "id": 20028,
//                   "name": "couscous",
//                   "localizedName": "couscous",
//                   "image": "couscous-cooked.jpg"
//                 },
//                 {
//                   "id": 20444,
//                   "name": "rice",
//                   "localizedName": "rice",
//                   "image": "uncooked-white-rice.png"
//                 }
//               ],
//               "equipment": [
//                 {
//                   "id": 404771,
//                   "name": "food processor",
//                   "localizedName": "food processor",
//                   "image": "food-processor.png"
//                 }
//               ]
//             },