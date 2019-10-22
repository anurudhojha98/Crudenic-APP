var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.

var models = require('./models');

models.sequelize.sync().then(() => {
    console.log('Nice,Database looks fine')
}).catch(err => {
    console.log(err, 'Something went wrong with database update !')
})

require('./server/routes')(app);

app.get('*', (req, res) => {
    return res.status(200).send({
        message: 'Welcome to beginning of nothingness !'
    })
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server started !")
})

module.exports = app;



