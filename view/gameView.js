/**
 *
 * @param canvas The canvas that is used to draw the text.
 * @param scoreFun The function used to transition to the score view.
 * @constructor
 */
function GameView(canvas,scoreFun){

    var score=canvas.text(300,100,"Score");

    var modelCom=new ModelCom();//This object is responsible for updating the game state.

    var bugs={}//A list of bugs in the game. TODO: Figure out a way to make sure dead bugs are not rendered.

    this.gameLoop=function(){
        console.log("Running game");
        var gameState=modelCom.updateGame();
        score.attr('text','Score:'+gameState["score"]);
        gameState["bugState"].forEach(function(bug){
            var ID=bug["ID"];
            if(ID in bugs){
                bugs[ID].attr("x",bug["x"]);
                bugs[ID].attr("y",bug["y"]);
            }else{
                var circle=canvas.circle(bug["x"],bug["y"],bug["size"])
            }

        });
        //Render the game state.

        //Render the flyswatter at the mouse position.
    }

    /**
     * Mouse click function.
     *
     *  -Create new flyswatter animation and slowly move flyswatter.
     *      -After the flyswatter has moved, query the game state to see if the flyswatter has done anything and update accordingly.
     */

}
