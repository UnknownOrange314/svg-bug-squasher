function ModelCom(){

    var score=0;
    var difficulty=1;
    var level=new Level(difficulty,ModelCom.height,ModelCom.width);
    var gameOver=false;
    var bugs=new HashSet(function(bug){
        return bug.hashCode();
    });
    var deadBugs=new Array();



    /**
     * This function test for collisions with bugs.
     * @param pt
     * @param r
     */
    this.bugCollision=function(pt,r){
        bugs.forEach(function(bug){
            if(pt.distance(bug.getLocation())<r+bug.getSize()){
                level.addKill();
                bugs.remove(bug);
                deadBugs.push(bug.hashCode());
                score+=bug.getScore();
            }
        });
    }

    this.updateGame=function(){

        if(level==null){
            level=new Level(difficulty,ModelCom.height,ModelCom.width);
        }
        if(bugs.size()<20){
            bugs.push(level.spawnBug());
        }

        var bugRenderState=[];
        bugs.forEach(function(bug){
            //console.log("Bug:"+bug);
            bug.move();
            if(bug.getX()+30>ModelCom.width){
                gameOver=true;
            }
            bugRenderState.push(bug.exportRenderState());
        });

        var toRemove=[];
        deadBugs.forEach(function(bug){
            toRemove.push(bug);
        });
        deadBugs=[];

        var remTime=level.getRemainingTime();
        if(level.completed()){
            difficulty++;
            level=null;
            bugs.forEach(function(bug){
                toRemove.push(bug.hashCode());
            });
            bugs.clear();
        }

        var gameState= {
            "bugState":bugRenderState,
            "score":score,
            "level":difficulty,
            "dead":toRemove,
            "time":remTime
        };
        return gameState;
    }

    this.gameOver=function(){
        return gameOver;
    }
}

ModelCom.maxBugs=10;

//The dimensions of the playing area.
ModelCom.height=600;
ModelCom.width=500;