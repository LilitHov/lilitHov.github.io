//get the modal
var modal = document.getElementById('modal');
// open modal when user clicks on button
document.getElementById('btn').onclick = function () {
    modal.style.display = 'block';
};

// close modal with X button
document.getElementById('closebtn').onclick = function () {
    document.getElementById('modal').style.display = 'none'
};

// close modal with modals button
var closeFirst = document.getElementById('content-button-first');
window.addEventListener('click',buttonClickFirs);

function buttonClickFirs(e) {
    if(e.target == closeFirst){
        modal.style.display = 'none';
    }
}

var closeSecond = document.getElementById('content-button-second');
window.addEventListener('click',buttonClick);


function buttonClick(e) {
    if(e.target == closeSecond){
        modal.style.display = 'none';
    }
}

//close modal with outside click
window.addEventListener('click',outsideClick);
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}



