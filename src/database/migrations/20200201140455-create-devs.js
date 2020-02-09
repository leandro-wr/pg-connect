'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('devs', { 
      id: {
        type: Sequelize.INTEGER,
        
      } 

    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('devs');
  }
};
