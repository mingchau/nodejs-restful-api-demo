const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app = express();
port = process.env.PORT || 3000;

app.listen(port);
console.log('RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes');
routes(app);

