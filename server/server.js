var express = require('express');
var storage = require('node-persist');

var scores = 10; //The number of high scores that will be stored.

storage.initSync();
var data = {};

for(var i=0;i<scores;i++){
    var key=i+":Nobody";
    data[key]="0";
}
storage.setItem('scores',data);


var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/',function(req,res){
    console.log("Connected to server");
    res.send('Working');
});

app.get('/getScores',function(req,res){
    storage.values(function(vals){
        res.send(vals);
    });
});

app.post('/addScores',function(req,res){
    console.log("New data:"+req)
    var scores=storage.getItem('scores');
    scores["11"]="9999";
    storage.setItem('scores',scores);
    res.send(scores);
});

app.listen(3000);