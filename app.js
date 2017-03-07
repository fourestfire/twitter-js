const routes = require('./routes');
const nunjucks = require('nunjucks')
const express = require( 'express' );
const app = express(); // creates an instance of an express application

var locals = {};

app.set('view engine', 'html'); // sets res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true}); // points nunjucks to the templates directory, no caching
nunjucks.render('index.html', locals, function (err, output) {
});

app.listen(3000, function() {
    console.log("server listening!");
});

app.use(express.static('public')); // allows us to access all files in the public folder
app.use('/', routes);
