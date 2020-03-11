// EJS = Embeddded Javascript 
// 1 NodeJS looks for ejs files in 'views' 
// 2 ejs file end with .ejs
// 3 have to let the NodeJS engine know that we a re using ejs


var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("css")); // works with all files
app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    // res.send("HELLO!");
    res.render("home"); //home.ejs also works same thing
});

var friendList = ["Alice", "Clark", "Bellemy", "OCtavia"];

app.get('/friends', function(req, res) {
    res.render("friends", {friends: friendList});
});

app.post("/addfriend", function(req, res) {
    console.log(req.body);
    var newfriend = req.body.newfriend;
    friendList.push(newfriend);
    res.redirect('/friends'); // redirect to a get route 
});

app.get('*', function(req, res) {
//   res.send("ERROR\nPage not found"); 
    res.render("error");
});

app.listen(process.env.PORT, function() { // only one of these per application.
    console.log('Server is running');
});