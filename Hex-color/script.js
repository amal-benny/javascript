function change(){
    var hexnumbers= ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode ='';

    for(var i =0;i<6;i++){
        var index= Math.floor(Math.random()*hexnumbers.length);
        hexcode+= hexnumbers[index];
    }
   document.getElementById("hex-code").innerHTML=hexcode;
   document.getElementsByTagName("body")[0].style.background="#" + hexcode;
}