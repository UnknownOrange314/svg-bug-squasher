function Point(x,y){
    this.x=x;
    this.y=y;

}

Point.prototype.setX=function(x){
    this.x=x;
}

Point.prototype.setY=function(y){
    this.y=y;
}

Point.prototype.getX=function(){
    return this.x;
}

Point.prototype.getY=function(){
    return this.y;
}

Point.prototype.distance=function(loc){
    return Math.sqrt(Math.pow(loc.getX()-this.x,2)+Math.pow(loc.getY()-this.y,2));
}

Point.prototype.toString=function(){
    return this.x+":"+this.y;
}