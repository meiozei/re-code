var i = 0;
var txt = 'PROGRAM THE FUTURE. TODAY.'; /* The text */
typeWriter();

function typeWriter() {
if (i < txt.length) {
    document.getElementById("programming").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
    }
}