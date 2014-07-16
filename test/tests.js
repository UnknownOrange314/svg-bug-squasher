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
            ok(Object.keys(data).length==10);
            start();
        },
        error:function(xhr,status,error){
            console.log("Error:"+error);
            ok(0);
            start();
        }
    })
});

QUnit.asyncTest("Add score test",function(){
    expect(1);
    var scoreInfo={};
    scoreInfo["player"]="test";
    scoreInfo["score"]="999";
    $.ajax({
        url:server+"addScores",
        type:'POST',
        data:scoreInfo,
        success:function(data){
            ok(Object.keys(data).length==10);
            start();
        },
        error:function(xhr,status,error){
            console.log("Error:"+error);
            ok(0);
            start();
        }
    })
});