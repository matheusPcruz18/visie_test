const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa  = require('../models/Pessoa');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);

module.exports = connection;
