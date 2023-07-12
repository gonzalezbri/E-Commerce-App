'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      item_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      item_picture: {
        type: Sequelize.STRING,
        allowNull: false
      },
      item_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      item_description: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};