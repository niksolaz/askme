const express = require('express');
const compression = require('compression');
const app = express();
var router = express.Router();
const path = require('path');

const apiV1 = require('./v1')(router);

const PORT = process.env.API_PORT || 4000;

app.use(compression());
app.use(express.static(`${__dirname}/public`));


app.use('/api/v1', apiV1);


app.get('/', function (req, res) {
    res.send("Welcome to the API")
});

app.listen(PORT);
