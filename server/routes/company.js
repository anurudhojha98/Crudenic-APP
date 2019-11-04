const companyController = require('../controllers').company;

module.exports = (app) => {

    app.post('/api/company', companyController.create);
    //company creates routes for creating new records

    app.get('/api/company-list', companyController.list);

}