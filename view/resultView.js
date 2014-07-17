/**
 *
 * @param canvas The canvas that is responsible for the rendering.
 * @param tFun The function that should be called when we want to transition to the welcome screen.
 * @constructor
 */
function ResultView(score){

    var server='http://localhost:3000/';
    var THIS=this;
    $("#scoreForm").submit(function(e){
        var $inputs = $('#scoreForm :input');
        var scoreInfo={};
        scoreInfo["player"]=$("input:first").val();
        scoreInfo["score"]=score;
        $.ajax({
            url:server+"addScores",
            type:'POST',
            data:scoreInfo,
            success:function(data){
                window.location="#/Welcome";
            },
            error:function(xhr,status,error){
                console.log("Error:"+error);
            }
        })

    });

}
