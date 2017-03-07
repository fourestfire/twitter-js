const routes = require('./routes');
const nunjucks = require('nunjucks')
const express = require( 'express' );
const app = express(); // creates an instance of an express application

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
    //console.log(output);
});

app.listen(3000, function() {
    console.log("server listening!");
});

app.use(express.static('public'));

app.use('/', routes);
