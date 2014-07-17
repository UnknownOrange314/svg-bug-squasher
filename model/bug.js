function Bug(type,startX,startY){
    this.ID=Bug.numBugs;
    Bug.numBugs++;
    this.data=type;
    this.location=new Point(startX,startY);
    this.type=type;
}

Bug.prototype.hashCode=function(){
    return this.ID;
}

Bug.prototype.move=function(){
    this.data.move(this.location);
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
Bug.easy.size=25.0;
Bug.easy.score=1.0;
Bug.easy.move=function(pt){
    var newX=pt.getX()+1.0;
    pt.setX(newX);
}

Bug.medium=function(){}
Bug.medium.size=15.0;
Bug.medium.score=2.0;
Bug.medium.move=function(pt){
    var newX=pt.getX()+5.5*Math.random()-1.5;
    var newY=pt.getY()+10.0*Math.random()-5;
    if(newY<450&&newY>50){//TODO:Make sure that values here are not hardcoded.
        pt.setY(newY);
    }
    pt.setX(newX);
}

Bug.hard=function(){}
Bug.hard.size=7.0;
Bug.hard.score=5.0;
Bug.hard.move=function(pt){
    var newX=pt.getX()+20.0*Math.random()-7.0;
    var newY=pt.getY()+15.0*Math.random()-7.5;
    if(newY<450&newY>50){
        pt.setY(newY);
    }
    if(newX>4){
        pt.setX(newX);
    }
}

Bug.numBugs=0;