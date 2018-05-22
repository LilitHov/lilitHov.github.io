// Time------------------------
function myTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes<10) {
        minutes += "0";
    }
    var seconds = date.getSeconds();
    if (seconds<10) {
        seconds += "0";
    }
    var clockBlock = document.getElementById('clock');
    clockBlock.innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(myTime, 1000);