const tweetBank = require('../tweetBank');
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser"); // this and the two lines below are requiring bodyParser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: false } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name)
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true, personName: name} );
});

router.post('/tweets',function(req,res){
var name = req.body.name;
var text = req.body.text;
tweetBank.add(name,text);
res.redirect("/");
});

module.exports = router;
