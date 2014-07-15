function Point(x,y){
    this.x=x;
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