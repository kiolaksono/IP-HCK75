'use strict';

const { hashPass } = require('../helpers/hash');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let customers = require('../../data_customer.json').map(el=>{
      el.createdAt = el.updatedAt = new Date()
      el.password = hashPass(el.password)

      return el
    })

    await queryInterface.bulkInsert("Customers", customers, {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Customers", null, {})
  }
};
