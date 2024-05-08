const express = require("express");
const { sequelize } = require("./src/db/models");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

const book = require('./src/routes/book');
const copy = require('./src/routes/copy');
const loan = require('./src/routes/loan');
const member = require('./src/routes/member');
const transaction = require('./src/routes/transaction');

app.use('/api/books',book);
app.use('/api/copies',copy);
app.use('/api/loan',loan);
app.use('/api/member',member);
app.use('/api/transaction',transaction);

module.exports=app


