/**
 *
 * @param canvas The canvas that is used to draw the text.
 * @param scoreFun The function used to transition to the score view.
 * @constructor
 */
function GameView(canvas,scoreFun){

    var score=canvas.text(700,100,"Score");
    score.attr({ "font-size": 16});
    var level=canvas.text(700,150,"Level");
    level.attr({ "font-size": 16});

    var modelCom=new ModelCom();//This object is responsible for updating the game state.
    var bugs={};//A list of bugs in the game. TODO: Figure out a way to make sure dead bugs are not rendered.

    var swatSize=40;
    var swatter=canvas.circle(-1,-1,40);
    swatter.attr("fill","black");

    var PID=-1;//The ID of the game loop.

    this.setLoopId=function(id){
        PID=id;
    }

    this.gameLoop=function(){
        var gameState=modelCom.updateGame();
        score.attr('text','Score:'+gameState["score"]);
        level.attr('text','Level:'+gameState["level"]);

        gameState["dead"].forEach(function(id){
            bugs[id].remove();
            delete bugs[id]
        });

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
            clearInterval(PID); //Stop the game loop
            scoreFun();
        }
    }

    var transformClick=function(e){
        var posx = e.pageX - $(document).scrollLeft() - $('#canvas_container').offset().left;
        var posy = e.pageY - $(document).scrollTop() - $('#canvas_container').offset().top;
        return new Point(posx,posy);
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