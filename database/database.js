const Sequelize = require('sequelize')

const connection = new Sequelize('guia', 'root','',{ 
    host:'localhost',
    dialect:'mysql' 

});

module.exports = connection 