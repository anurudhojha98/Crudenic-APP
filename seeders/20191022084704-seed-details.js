'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [{
      name: 'Shauryam Solutions Pvt Ltd',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Neocepts IT',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Coding Mentors Pvt. Ltd',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
    const companyIds = await queryInterface.sequelize.query(
      `SELECT id from Companies;`
    );

    const companyIdRow = companyIds[0];
    return await queryInterface.bulkInsert('Employees', [
      { name: 'Anurudh Ojha', designation: 'Software Developer', companyId: companyIdRow[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Prashant Rai', designation: 'Sr. Software Developer', companyId: companyIdRow[0].id, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Varun Shauryam', designation: 'Software Developer Trainee', companyId: companyIdRow[0].id, createdAt: new Date(), updatedAt: new Date() },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {

    return () => {
      queryInterface.bulkDelete('Employees', null, {});
      queryInterface.bulkDelete('Companies', null, {});
    }
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
