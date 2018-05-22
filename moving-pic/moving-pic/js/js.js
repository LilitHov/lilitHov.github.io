document.onclick = function (e) {
    var photo = document.getElementById('photo');
    var left = e.clientX-75 ;
    var top = e.clientY-200;
    if (left > 1230){
        left -= 58;
    } else if(left < -74){
        left +=65
    } else if(top < -140){
        top +=60
    } else if(top > 265){
        top -= 180
    }
    photo.style.left = left + 'px';
    photo.style.top = top + 'px';
};
















