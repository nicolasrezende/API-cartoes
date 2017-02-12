var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    consign().
    include('routes').
    into(app);

    return app;
}
