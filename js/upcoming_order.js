

var modalRev = document.getElementById("myRev");

// Get the button that opens the modal
var btnRev = document.getElementById("btn-review");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-rev")[0];

// When the user clicks the button, open the modal 
btnRev.onclick = function () {
  modalRev.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalRev.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalRev) {
    modalRev.style.display = "none";
  }
}

const setModal = document.querySelector('.other-modal');
setModal.addEventListener('click', onTheClick, false);

function onTheClick(e) {  
  if (e.target.matches('img')) {
    var preview = e.target.src;
    document.getElementById("main-modal").src = preview;
  }
}
