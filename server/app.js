const express = require('express');
var cors = require('cors')
const app =express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const products = require('./routes/product')
const scrape = require('./utils/scrape')

app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api/v1',products);


module.exports = app