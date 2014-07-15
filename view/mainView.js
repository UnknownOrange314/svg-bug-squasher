function MainView(canvas,x,y){

    var curView=null;
    var clearCanvas=null;

    var showGameScreen=null;
    var showScoreScreen=null;
    var showWelcomeScreen=null;

    var startGame=function(){
        canvas.clear();
        showGameScreen();
    }


    showScoreScreen=function(){
        var view=new ResultView(canvas,showWelcomeScreen)


    }

    showGameScreen=function(){
        var view=new GameView(canvas,showScoreScreen);
        var PID=setInterval(function(){
            view.gameLoop();
            if(view.gameOver()){
                clearInterval(PID);
                var score=view.getScore();
            }
        },30);

    }

    clearCanvas=function(){
        console.log("Canvas has to be cleared");
    }


    showWelcomeScreen=function(){
        curView=new WelcomeView(canvas,startGame)
    }

    this.init=function(){
        showWelcomeScreen()
    }




}