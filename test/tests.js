window.server='http://localhost:3000/'; //The AJAX calls fail if the IP address is used.
QUnit.asyncTest("Server test",function(){
    expect(1);
    $.ajax({
        url:server,
        type:'get',
        success:function(data){
            ok(data=="Working","Server is working");
            start();
        },
        error:function(xhr,status,error){
            console.log("Error:"+error);
            ok(0);
            start();
        }
    });
});

QUnit.asyncTest("Get score test",function(){
    expect(1);
    $.ajax({
        url:server+"getScores",
        type:'get',
        success:function(data){
            var len=Object.keys(data).length;
            ok(len==10,len);
            start();
        },
        error:function(xhr,status,error){
            console.log("Error:"+error);
            ok(0);
            start();
        }
    })
});

QUnit.asyncTest("Add high score test",function(){
    expect(2);
    var scoreInfo={};
    scoreInfo["player"]="test";
    scoreInfo["score"]="999";
    $.ajax({
        url:server+"addScores",
        type:'POST',
        data:scoreInfo,
        success:function(data){
            ok(Object.keys(data).length==10);
            var hasPlayer=false;
            Object.keys(data).forEach(function(info){
                var sInfo=data[info];
                if(sInfo["player"]=="test"&&sInfo["score"]=="999"){
                    hasPlayer=true;
                }
            });
            ok(hasPlayer);
            start();
        },
        error:function(xhr,status,error){
            console.log("Error:"+error);
            ok(0);
            start();
        }
    })
});

QUnit.asyncTest("Add low score test",function(){
    expect(2);
    var scoreInfo={};
    scoreInfo["player"]="Low_Score";
    scoreInfo["score"]="-99";
    $.ajax({
        url:server+"addScores",
        type:'POST',
        data:scoreInfo,
        success:function(data){
            ok(Object.keys(data).length==10);
            var hasPlayer=false;
            Object.keys(data).forEach(function(info){
                var sInfo=data[info];
                if(sInfo["score"]=="-99"){
                    hasPlayer=true;
                }
            });
            ok(hasPlayer==false);
            start();
        },
        error:function(xhr,status,error){
            console.log("Error:"+error);
            ok(0);
            start();
        }
    })
});
