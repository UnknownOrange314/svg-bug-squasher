/**
 * This class shows the welcome screen.
 * @param canvas The canvas that the game will draw on.
 * @param gameTrans The function that will be called when a button is clicked on to start the game.
 * @constructor
 */
function WelcomeView(canvas,startFun){
    var title=canvas.text(300,100,"Welcome to the game");
    var startX=400;
    var startY=400;
    var startH=40;
    var startW=100;
    var startButton=canvas.rect(startX,startY,startW,startH);
    var gameTrans=canvas.text(startX+startW/2,startY+startH/2,"Start game");
    gameTrans.node.onclick=startFun;
    console.log("Showing welcome screen");
}
