const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('recipe', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  };
  

//   "gluten free",
//   "dairy free",
//   "lacto ovo vegetarian",
//   "vegan"