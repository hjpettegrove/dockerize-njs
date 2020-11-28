const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//  Parse .env for config data
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const personsRouter = require('./routes/persons');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/persons', personsRouter);

module.exports = app;
