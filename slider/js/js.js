document.getElementById('arrow-left').onclick = sliderLeft;
document.getElementById('arrow-right').onclick = sliderRight;

var left = 0;
var cont = document.getElementById('content');
function sliderLeft() {
    left = left + 500;
    if(left > 0){
        left = 0;
    }
    cont.style.left = left + 'px';
}

function sliderRight() {
    left = left - 500;
    if(left < -4000){
        left = -4000;
    }
    cont.style.left = left + 'px';
}












// var cont = document.getElementById('content');
// document.onclick = function (e) {
//     var left=0 ;
//     if(e.target.getAttribute('id') == 'left-arrow') {
//         left = left + 143;
//     // if(left > 0){
//     //     left = 0;
//     // }
//     cont.style.left = left + 'px';
//     } else {
//         left = left - 143;
//         // if (left < -715) {
//         //     left = -715;
//         // }
//         cont.style.left = left + 'px';
//     }
//     };


