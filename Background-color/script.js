var index=0;
var colors= ["red","blue","yellow","violet","orange","green","black"];
function change(){ 
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if(index>colors.length -1){
        index =0;
    }      
}
function red(){ 
    document.getElementsByTagName("body")[0].style.background=colors[0];
}
function blue(){
    document.getElementsByTagName("body")[0].style.background=colors[1];
}
function black(){
    document.getElementsByTagName("body")[0].style.background=colors[6];
}
function violet(){
    document.getElementsByTagName("body")[0].style.background=colors[3];
}