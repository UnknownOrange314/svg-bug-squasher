


//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template gameHelp.html and Controller AddOrderController
//Uri /ShowOrders -> template playGame.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/PlayGame', {
                templateUrl: 'view/templates/playGame.html',
                controller: 'PlayGameController'
            }).
            when('/Welcome', {
                templateUrl: 'view/templates/welcome.html',
                controller: 'WelcomeController'
            }).
            when('/Score',{
                templateUrl: 'view/templates/score.html',
                controller: 'ScoreController'
            }).
            otherwise({
                redirectTo: '/Welcome'
            });
    }]);

sampleApp.controller('ScoreController',function($scope){
    var score=GameInstance.endGame();
    var view=new ResultView(score);
});

sampleApp.controller('PlayGameController', function($scope,$location) {

    GameInstance.endGame();
    var cDiv=$('canvas_container');
    GameInstance.canvas = new Raphael(100,200,800,800);

    var endGame=function(score){
        GameInstance.score=score;
        window.location="#/Score";
        GameInstance.canvas.remove();

    }

    GameInstance.runner = new GameRunner(GameInstance.canvas,endGame);
    var PID=setInterval(function(){
        GameInstance.runner.gameLoop();
    },30);
    GameInstance.runner.setLoopId(PID);
});


sampleApp.controller('WelcomeController', function($scope) {
    GameInstance.endGame();
    ScoreCom.showScores($("#highScores"));
    console.log("Showing welcome screen");
});