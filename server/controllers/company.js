const Company = require('../../models').Company;
const Employee = require('../../models').Employee;
module.exports = {
    create(req, res) {
        return Company.create({
            name: req.body.name,
        }).then(company => res.status(200).send(company))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Company
            .findAll({
                include: [{
                    model: Employee, as: 'employees',
                    attributes: ['id', 'name', 'designation']

                }]
            })
            .then(companies => res.status(200).send(companies))
            .catch(error => {
                console.log(error)
                res.status(400).send(error)
            });
    },
};