'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Food.init(
    {
      description: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      carb: DataTypes.INTEGER,
      fat: DataTypes.INTEGER,
      servingSize: DataTypes.INTEGER,
      servingUnit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Food',
    }
  );
  return Food;
};
