// app.use(function(request, response, next) {
//     // do your logging here
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     console.log(request.method + " " + request.url)
//     next();
// })
//
// app.get('/', function(request, response){
//     response.render( 'index', {title: 'Hall of Fame', people: people} )
// });
//
// app.get('/news', function(request, response){
//     response.send("Welcome to the news section!");
// });
//
//

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/news', function (req, res) {
  res.send("hi");
  console.log("hi")
});

module.exports = router;
