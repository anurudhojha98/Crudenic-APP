const Employee = require('../../models').Employee;
module.exports = {
    create(req, res) {
        return Employee
            .create({
                name: req.body.name,
                designation: req.body.designation,
                companyId: req.params.companyId,
            }).then(employee => res.status(200).send(employee))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Employee
            .findAll()
            .then(employees => res.status(200).send(employees))
            .catch(error => res.status(400).send(error));
    },
};