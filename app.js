const express = require('express');
const compression = require('compression');
const app = express();
const path = require('path');
const userEndpoints = require('./src/services/api/v1/users.js');
console.log(userEndpoints);
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(`${__dirname}/public`));


// User Endpoints
app.use('/api/v1/users', userEndpoints);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT);
