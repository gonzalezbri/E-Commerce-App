'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  }
  Inv.init({
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Item_type: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Item_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    item_picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_description: {
        type: DataTypes.DATE,
        allowNull: false
  }}, {
    sequelize,
    modelName: 'Inv',
    tableName: 'inv',
    timestamps: false
  })

  return Inv;
};