/**
 * Basic hash set implementation.
 * @param hFun The hash function that will be used.
 * @constructor
 */
function HashSet(hFun){

    var hash=hFun;
    var data={};
    var size=0;

    this.push=function(item){
        var hashCode=hash(item);
        if((hashCode in data)==false){
            size++;
        }
        data[hashCode]=item;
    }

    this.remove=function(item){
        var hashCode=hash(item);
        if((hashCode in data)==true){
            size--;
        }
        delete data[hashCode];
    }

    this.contains=function(item){
        var hashCode=hash(item);
        return hashCode in data;
    }

    /**
     * Exports the data of the set as an array for iteration.
     * TODO: Find a more efficient way of doing this.
     * @returns {Array}
     */
    this.exportArray=function(){
        var expArray=new Array();
        Object.keys(data).forEach(function(item){
            expArray.push(data[item]);
        });
        return expArray;
    }

    this.forEach=function(anon){
        this.exportArray().forEach(anon)
    }

    this.size=function(){
        return size;
    }

    this.clear=function(){
        data={};
        size=0;
    }
}