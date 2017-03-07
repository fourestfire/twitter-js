const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function(request, response, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(request.method + " " + request.url)
    next();
})

app.get('/', function(request, response){
    response.send("Welcome!");
});

app.get('/news', function(request, response){
    response.send("Welcome to the news section!");
});


app.listen(3000, function() {
    console.log("server listening!");
});
