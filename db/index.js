'use strict'
const chalk = require('chalk')
const Sequelize = require('sequelize')

console.log(chalk.yellow('Connecting to postgres'))

//setup the sequelize db
const db = new Sequelize('postgres://localhost:5432/voice_jeopardy', {
  logging: false,  //no logs in console for SQL
  native: true   //use pg-native for 30% more speed
})


module.exports = db;