'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Post', [{

      
      user_id: 1,
      content: "A história do tirano um dinossauro",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
