var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("Home.ejs");
    //res.send("welcom to the home page");
});

//const port = process.env.PORT || 3000
var listener = app.listen(3000, function(){
    console.log('Server is listening' + '' + listener.address().port );
});

