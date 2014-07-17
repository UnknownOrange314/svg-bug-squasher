function GameInstance(){}

/**
 * This function ends the currently running game and returns the score.
 * @returns {*}
 */
GameInstance.endGame=function(){
    if(GameInstance.runner!=undefined){
        GameInstance.runner.stop();
        return GameInstance.runner.getScore();
    }
    return -1;
}

/**
 *
 * @param canvas The canvas that is used to draw the text.
 * @param scoreFun The function used to transition to the score view.
 * @constructor
 */
function GameRunner(canvas,scoreFun){


    $("#levelDone").hide();
    var score=canvas.text(700,100,"Score");
    score.attr({ "font-size": 16});
    var level=canvas.text(700,150,"Level");
    level.attr({ "font-size": 16});
    var time=canvas.text(700,200,"Time");
    time.attr({"font-size":16});

    var modelCom=new ModelCom();//This object is responsible for updating the game state.
    var bugs={};//A list of bugs in the game. TODO: Figure out a way to make sure dead bugs are not rendered.

    var swatSize=40;
    var swatter=canvas.circle(-1,-1,40);
    var curScore=-9999;

    swatter.attr("fill","black");

    var PID=-1;//The ID of the game loop.

    var paused=false;

    this.getScore=function(){
        return curScore;
    }
    this.setLoopId=function(id){
        PID=id;
    }

    var showLevelCont=function(){
        paused=true;
        bugs={};
        $("#levelDone").show();
        score.attr('text','');
        level.attr('text','');
        time.attr('text','');


    }

    $("#nextForm").submit(function(e){
        console.log("Going to next level");
        $("#levelDone").hide();
        paused=false;
    });

    $("#quitForm").submit(function(e){
        scoreFun(curScore);
    });

    this.gameLoop=function(){
        if(!paused){
            var gameState=modelCom.updateGame();

            curScore=gameState["score"];
            score.attr('text','Score:'+curScore);
            level.attr('text','Level:'+gameState["level"]);
            time.attr('text','Remaining time:'+parseInt(gameState["time"]/1000));



            gameState["dead"].forEach(function(id){
                if(id in bugs){
                    bugs[id].remove();
                    delete bugs[id]
                }

            });

            if(gameState["time"]<0){
                console.log("Current bugs:"+JSON.stringify(Object.keys(bugs)));
                console.log("Dead bugs:"+gameState["dead"]);
                showLevelCont();
                return;
            }

            console.log("Number of bugs:"+Object.keys(bugs).length);

            gameState["bugState"].forEach(function(bug){
                var ID=bug["id"];
                if(ID in bugs){
                    bugs[ID].attr({ cx: bug["xPos"],cy:bug["yPos"]});
                }else{
                    var circle=canvas.circle(bug["xPos"],bug["yPos"],bug["size"]);
                    circle.attr("fill","blue");
                    bugs[ID]=circle;
                }

            });
            if(modelCom.gameOver()){
                console.log("Game over");
                clearInterval(PID); //Stop the game loop
                scoreFun(gameState[score]);
            }
        }

    }

    var transformClick=function(e){
        var posx = e.pageX  - 100;
        var posy = e.pageY  - 200;
        return new Point(posx,posy);
    }

    this.stop=function(){
        clearInterval(PID);
        canvas.remove();
    }

    window.onmousemove=function(e){
        var pt=transformClick(e);
        swatter.attr({ cx: pt.getX(),cy:pt.getY()});
    }


    window.onmousedown=function(e){
        var pt=transformClick(e)
        modelCom.bugCollision(pt,40);
    }
}