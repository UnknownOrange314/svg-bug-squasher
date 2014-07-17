var express = require('express');
var storage = require('node-persist');


var scores = 10; //The number of high scores that will be stored.

storage.initSync();
storage.clear();
var data = {};

for(var i=0;i<scores;i++){
    var key=""+i;
    var sData={};
    sData["player"]="Nobody";
    sData["score"]="";
    data[key]=sData;
}

storage.setItem('scores',data);

var app = express();
app.use(express.bodyParser());

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
    var scores=storage.getItem('scores');
    res.send(scores);
});

app.post('/addScores',function(req,res){

    var reqData=req.body;


    var scores=storage.getItem('scores');
    var minScore=99999999999999;
    var minKey="";
    Object.keys(scores).forEach(function(key){
        if(scores[key]["score"]<minScore){
            minScore=scores[key]["score"];
            minKey=key;
        }
    });

    console.log(reqData["score"]+":"+minScore);
    if(reqData["score"]>minScore){
        console.log("Updating scores");
        scores[minKey]=reqData;
    }
    storage.setItem('scores',scores);
    res.send(scores);
});

app.listen(3000);