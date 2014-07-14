function Level(diff){
    this.difficulty=diff;
}
Level.prototype.completed=function(){
    return false;
}

Level.prototype.getScore=function(){
    return -1;
}
Level.prototype.spawnBugs=function(){
    /*
    * Choose to spawn a bug after a certain time interval has passed. The time interval will get shorter between each spawn.
    * -At low difficulties, only easy bugs will spawn. As the difficulty goes up, higher difficulty bugs will be more likely to spawn.
     */
}



