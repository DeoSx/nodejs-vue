const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const itemRoutes = require('./routes/item.routes.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(itemRoutes);

module.exports = app;
