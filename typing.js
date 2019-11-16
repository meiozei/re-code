var txt = 'PROGRAM THE FUTURE. TODAY.'; /*picture text*/ 
var speed = 50; /*speed in which the text it typed out.*/ 
var pos=0;
var str=document.getElementById('program').innertext 


function type() { 
    if (pos<str.length) {
        document.getElementById("program").innerHTML += str.charAt(pos);
        pos++;
        setTimeOut(type, speed); //call
    }
}
