var time = 0;
var t;
function timestart() {
    document.getElementById("currenttime").value = time;
    time += 1;
    t = setTimeout("timestart()",1000);
}
function timestop() {
    clearTimeout(t);
}
function timeclean() {
    time = 0;
    document.getElementById("currenttime").value = 0;
}