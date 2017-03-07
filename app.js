const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks')
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); //when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.use(function(request, response, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(request.method + " " + request.url)
    next();
})

app.get('/', function(request, response){
    response.render( 'index', {title: 'Hall of Fame', people: people} )
});

app.get('/news', function(request, response){
    response.send("Welcome to the news section!");
});


app.listen(3000, function() {
    console.log("server listening!");
});
