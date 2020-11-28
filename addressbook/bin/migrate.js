require('dotenv').config();

const db = require('../models/database');
db.sequelize.sync()