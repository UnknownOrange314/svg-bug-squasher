window.onload=function(){

    var w=800;
    var h=800;
    var game = new Raphael(document.getElementById('canvas_container'), w, h);

    var view=new MainView(game,w,h);
    view.init();




}