const companyController = require('../controllers').company;
const employeeController = require('../controllers').employee;

module.exports = (app) => {
    app.get('api', (req, res) => {
        return res.status(200).send({
            message: 'Welcome to the TODOS API !'
        })
    });
    app.post('/api/company', companyController.create);
    //company creates routes for creating new records

    app.get('/api/company-list', companyController.list);

    app.post('/api/company/:companyId/employee', employeeController.create);
    //company creates routes for creating new records

    app.get('/api/employee-list', employeeController.list);

}