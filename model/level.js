function Level(diff,height,width){
    this.difficulty=diff;
    this.startTime=new Date().getTime();
    this.lastSpawn=this.startTime-999999;
    this.levelHeight=height;
    this.levelWidth=width;
}

Level.prototype.completed=function(){
    return false;
}

Level.prototype.getScore=function(){
    return -1;
}

Level.prototype.spawnBug=function(){
    var curTime=new Date().getTime();
    if(curTime-this.lastSpawn>Level.getSpawnRate(this.difficulty)){
        var mSpawn=1-Math.pow(2.0,-(this.difficulty)*0.5);
        var hSpawn=1-Math.pow(2.0,-(this.difficulty-1)*0.2);
        var typeRoll=Math.random();
        var spawnY=Math.random()*(this.levelHeight-100)+50;
        if(typeRoll>hSpawn){
            return new Bug(Bug.hard,Level.bugSpawnX,spawnY);
        }
        else if(typeRoll>mSpawn){
            return new Bug(Bug.medium,Level.bugSpawnX,spawnY);
        }else{
            return new Bug(Bug.easy,Level.bugSpawnX,spawnY);
        }
    }

    return null;

    /*
    * Choose to spawn a bug after a certain time interval has passed. The time interval will get shorter between each spawn.
    * -At low difficulties, only easy bugs will spawn. As the difficulty goes up, higher difficulty bugs will be more likely to spawn.
     */
}


Level.getSpawnRate=function(difficulty){
    var baseTime=5;
    var rate=Math.sqrt(baseTime*difficulty);
    return Math.min(rate,100);
}

Level.bugSpawnX=20;

Level.time=60000; //The time that will be spent on each level.