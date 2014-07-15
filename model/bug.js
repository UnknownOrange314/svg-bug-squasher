function Bug(type,startX,startY){
    this.ID=Bug.numBugs;
    Bug.numBugs++;
    this.data=type;
    this.location=new Point(startX,startY)
    this.type=type;
}

Bug.prototype.hashCode=function(){
    return this.ID;
}

Bug.prototype.move=function(){
    var newLoc=this.data.move(this.location);
    this.location=newLoc;
}

Bug.prototype.getX=function(){
    return this.location.getX();
}

Bug.prototype.getY=function(){
    return this.location.getY();
}

Bug.prototype.getLocation=function(){
    return this.location;
}

/**
 * Gets the radius of the bug.
 */
Bug.prototype.getSize=function(){
    return this.type.size;
}

Bug.prototype.getScore=function(){
    return this.type.score;
}

Bug.prototype.exportRenderState=function(){
    var arr={};
    arr["xPos"]=this.location.getX();
    arr["yPos"]=this.location.getY();
    arr["size"]=this.getSize();
    arr["id"]=this.ID;
    return arr;
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

Bug.numBugs=0;