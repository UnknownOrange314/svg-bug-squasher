function Bug(type,startX,startY){
    this.data=type;
    this.location=new Point(startX,startY)

}

Bug.prototype.move=function(){
    var newLoc=this.data.move(this.location);
}


Bug.easy=function(){}
Bug.easy.size=50.0;
Bug.easy.score=1.0
Bug.easy.move=function(pt){
    //Return new bug location.

}

Bug.medium=function(){}
Bug.medium.size=20.0;
Bug.medium.score=2.0;
Bug.medium.move=function(pt){
    //Return new bug location.
}

Bug.hard=function(){}
Bug.hard.size=10.0;
Bug.hard.score=5.0;
Bug.hard.move=function(pt){
    //Return new bug location.
}