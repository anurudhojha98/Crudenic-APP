const employeeController = require('../controllers').employee;
module.exports = (app) => {

    app.post('/api/company/:companyId/employee', employeeController.create);
    //company creates routes for creating new records

    app.get('/api/employee-list', employeeController.list);

}
