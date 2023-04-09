window.addEventListener('load',time)
function time(){
    var date =new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour>= 12 ? 'PM': 'AM';
    var dayNames = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute< 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML=dayNames[day];
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML= minute;
    document.getElementById("ampm").innerHTML=ampm;

    setTimeout(time,200);
}