const express = require('express');
const routes = require('./routes'); //não precisa colocar o index.js, por padrão ele já procura por ele.

const app = express();

routes(app);



module.exports = app;
