'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    item_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_name: {
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
      type: DataTypes.STRING(255)
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    timestamps: false
  });
  return Item;
};