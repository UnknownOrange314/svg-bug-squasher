function ModelCom(){

    var score=0;

    var difficulty=0;
    var level=new Level(difficulty);

    var bugs=new HashSet(nullFun());

    /**
     * This function test for collisions with bugs.
     * @param x
     * @param y
     * @param w
     * @param h
     */
    this.bugCollision=function(x,y,w,h){
        /**
         * Loop through all the bugs.
         * If any of the bugs have been hit, remove them from the game and update the score.
         */
    }
    this.updateGame=function(){

        level.spawnBugs();
        if(level.completed()){
            difficulty++;
            level=new Level(difficulty);
            score+=level.getScore();
        }
        /**
         * Move the bugs.
         * If any of the bugs have reached the end, w
         */
    }
}
