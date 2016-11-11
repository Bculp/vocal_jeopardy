'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  // .use('/someroute', require('./someroute'))
  .get('/testing', (req, res) => {
    // let sportsCat = [], entertainmentCat = [], scienceCat = [];
	// Question.findAll({
	// 	include: [{ model: Answer}]
	// })
	// .then(allQuestions => {
		
	// 	allQuestions.forEach(index => {
	// 		if (index['category'] === "SPORTS") {
	// 			sportsCat.push(index)
	// 		}
	// 		else if (index['category'] === "ENTERTAINMENT") {
	// 			entertainmentCat.push(index)
	// 		}
	// 		else if (index['category'] === "SCIENCE") {
	// 			scienceCat.push(index)
	// 		}
	// 	})
	// 	res.render('index', {sports: sportsCat, entertainment: entertainmentCat})
	// })
  })

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())