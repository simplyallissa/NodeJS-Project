const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'rwxlnnzH14', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;