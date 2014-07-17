function ScoreCom(){}

ScoreCom.server='http://localhost:3000/';

/**
 *
 * @param submit Should we enable submitting scores?
 */
ScoreCom.showScores=function(div){
    var highScoreText="";
    $.ajax({
        url:ScoreCom.server+'getScores',
        type:'get',
        success:function(data){
            var minScore=99999999999;
            Object.keys(data).forEach(function(sInfo){
                highScoreText+="<p>"+data[sInfo]["player"]+":"+data[sInfo]["score"]+"</p>"
                if(data[sInfo]["score"]<minScore){
                    minScore=data[sInfo]["score"];
                }
            });
            $(div).html(highScoreText);
        }
    })
}
