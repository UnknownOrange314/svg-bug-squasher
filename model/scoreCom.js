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

            highScoreText+="<table cellspacing='10' align='center' >"
            highScoreText+="<tHead>" +
                "<th>Rank  </th>" +
                "<th>Player    </th>" +
                "<th>Score    </th>" +
                "</tHead>";
            highScoreText+="<tbody>";
            var i=1;
            Object.keys(data).forEach(function(sInfo){
                highScoreText+="<tr>";
                highScoreText+="<td>"+i+"</td>" +
                    "<td>"+data[sInfo]["player"]+"</td>"+
                    "<td>"+data[sInfo]["score"]+"</td>"
                highScoreText+="</tr>";
                i++;
            });
            highScoreText+="</tbody>";
            $(div).html(highScoreText);
        }
    })
}
