function ModelCom(){

    var score=0;
    var difficulty=0;
    var level=new Level(difficulty,ModelCom.height,ModelCom.width);
    var gameOver=false;
    var bugs=new HashSet(function(bug){
        return bug.hashCode();
    });

    /**
     * This function test for collisions with bugs.
     * @param pt
     * @param r
     */
    this.bugCollision=function(pt,r){
        bugs.forEach(function(bug){
            if(pt.distance(bug.getLocation())<r+bug.getSize){
                bugs.remove(bug);
                score+=bug.getScore();
            }
        });
    }

    this.updateGame=function(){

        bugs.push(level.spawnBug());
        if(level.completed()){
            difficulty++;
            level=new Level(difficulty,ModelCom.height,ModelCom.width);
            score+=level.getScore();
        }

        var bugRenderState=[];
        bugs.forEach(function(bug){
            bug.move();
            if(bug.getX()+30>ModelCom.width){
                gameOver=true;
            }
            bugRenderState.push(bug.exportRenderState());
        });

        return {"bugState":bugRenderState,"score":score};
    }
}

ModelCom.maxBugs=10;

//The dimensions of the playing area.
ModelCom.height=500;
ModelCom.width=500;