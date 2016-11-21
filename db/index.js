'use strict'
const chalk = require('chalk')
const Sequelize = require('sequelize')

let heroku_postgres_jade_url = 'postgres://jbydezplltxlvq:d9KHsia7_pjrdQGzrUBe0TW7Xz@ec2-54-163-245-3.compute-1.amazonaws.com:5432/das42mhgi72u43'
// let database_url_test = 'postgres://gqlrkasribbamg:aQTYfbHasfJJAw09Ozpom5CEX0@ec2-50-17-249-147.compute-1.amazonaws.com:5432/dbum6ska7v2mm8'


//MY CODE
let localDb = 'postgres://localhost:5432/voice_jeopardy'
console.log(chalk.yellow('Connecting to postgres'))

//setup the sequelize db
const db = new Sequelize(heroku_postgres_jade_url, {
  logging: false,  //no logs in console for SQL
  native: true   //use pg-native for 30% more speed
})

module.exports = db;