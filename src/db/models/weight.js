'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Weight.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Weight.init(
    {
      weight: DataTypes.DECIMAL,
      date: DataTypes.DATEONLY,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      sequelize,
      modelName: 'Weight',
    }
  );
  return Weight;
};
