'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const db = require('../db/index')
// const passport = require('passport')

// Bones has a symlink from node_modules/APP to the root of the app.
// That means that we can require paths relative to the app root by
// saying require('APP/whatever').
//
// This next line requires our root index.js:
// const pkg = require('APP')

const app = express()

// if (!pkg.isProduction && !pkg.isTesting) {
  // Logging middleware (dev only)
  app.use(require('volleyball'))
// }

module.exports = app

// app
  // We'll store the whole session in a cookie
  // .use(require('cookie-session') ({
  //   name: 'session',
  //   keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
  // }))

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Authentication middleware
  // .use(passport.initialize())
  // .use(passport.session())
  
  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))

  // Serve our api
  .use('/api', require('./api'))

//**--------THIS MIGHT BE CAUSING MY BUNDLE JS "<" ISSUE-------**///////

  // Send index.html for anything else.
  // .use('/dist', express.static(resolve(__dirname, 'dist')))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

// if (module === require.main) {
//   // Start listening only if we're the main module.
//   // 
//   // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
//   // const server = app.listen(
//   //   process.env.PORT || 1337,
//   //   () => {
//   //     console.log(`--- Started HTTP Server for ${pkg.name} ---`)      
//   //     console.log(`Listening on ${JSON.stringify(server.address())}`)
//   //   }
//   // )
//   app.listen(1337, function(err) {
//     if(err) throw err;
//     console.log('Listening on port 1337')
//   })
// }

 app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
    console.log('Listening to port 3000');
});


//secure https server
// var http = require('http')
// var https = require('https');
// var fs = require('fs');

// var pkey = fs.readFileSync('./key.pem');
// var pcert = fs.readFileSync('./cert.pem')

// var options = {
//     key: pkey,
//     cert: pcert
// };


//another method
// https.createServer(options, function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
// }, app).listen(443);

//first method
// var server = https.createServer(options, function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
// }).listen(443);

//another one
//utf8 but my file might not be utf8
    // key: fs.readFileSync('/Users/brandonculp/fullstackAcademy/Senior_Phase/stackathon/voice_jeopardy/server/key.pem'),
    // key: fs.readFileSync('key.pem'),
    // cert: fs.readFileSync('cert.pem'),

    //doesnt throw an error but doesn't start server
    // key: fs.readFileSync('/Users/brandonculp/fullstackAcademy/Senior_Phase/stackathon/voice_jeopardy/server/key.pem'),
    // cert: fs.readFileSync('/Users/brandonculp/fullstackAcademy/Senior_Phase/stackathon/voice_jeopardy/server/cert.pem'),


// var options = {
    // key: fs.readFileSync('key.pem', 'utf8'),
    // cert: fs.readFileSync('cert.pem', 'utf8'),
//     requestCert: false,
//     rejectUnauthorized: false
// };

// var options = {
//     key: fs.readFileSync('/Users/brandonculp/fullstackAcademy/Senior_Phase/stackathon/voice_jeopardy/server/key.pem'),
//     cert: fs.readFileSync('/Users/brandonculp/fullstackAcademy/Senior_Phase/stackathon/voice_jeopardy/server/cert.pem')
//     // key: fs.readFileSync('key.pem'),
//     // cert: fs.readFileSync('cert.pem')
// }

// // var httpServer = http.createServer(app)
// var httpsServer = https.createServer(options, app);
// // httpServer.listen(8080)
// httpsServer.listen(8443)

// console.log(key)
// var server = https.createServer(options, app).listen(1337, function(){
//     console.log("server started at port 1337");
// });
