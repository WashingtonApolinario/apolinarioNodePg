const enviroment = process.env.NODE_ENV || 'development';
//console.log(enviroment);
const config = require('../knexfile.js')[enviroment];
//config connection library
console.log(config);

module.exports = require('knex')(config);