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
const parser = require("body-parser");
const express = require('express');
const router = express.Router();
router.use(parser.urlencoded({ extended: false }))
router.use(parser.json())
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true  } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list , showForm:true, name:name} );
});
router.post('/tweets',function(req,res){
var name = req.body.name;
var text = req.body.text;
tweetBank.add(name,text);
//res.redirect("/")
})
module.exports = router;
