// other product

var product1 = document.getElementById("product1").src;
var product2 = document.getElementById("product2").src;
var product3 = document.getElementById("product3").src;
var product4 = document.getElementById("product4").src;
var product5 = document.getElementById("product5").src;

var mainProd1 = document.getElementById("product1");
var mainProd2 = document.getElementById("product2");
var mainProd3 = document.getElementById("product3");
var mainProd4 = document.getElementById("product4");
var mainProd5 = document.getElementById("product5");

mainProd2.onclick = function() {
  mainProd1.src = product2;
}

mainProd3.onclick = function() {
  mainProd1.src = product3;
}

mainProd4.onclick = function() {
  mainProd1.src = product4;
}

mainProd5.onclick = function() {
  mainProd1.src = product5;
}


var modal1 = document.getElementById("modal1").src;
var modal2 = document.getElementById("modal2").src;
var modal3 = document.getElementById("modal3").src;
var modal4 = document.getElementById("modal4").src;
var modal5 = document.getElementById("modal5").src;

var mainModal1 = document.getElementById("modal1");
var mainModal2 = document.getElementById("modal2");
var mainModal3 = document.getElementById("modal3");
var mainModal4 = document.getElementById("modal4");
var mainModal5 = document.getElementById("modal5");

mainModal2.onclick = function() {
  mainModal1.src = modal2;
}

mainModal3.onclick = function() {
  mainModal1.src = modal3;
}

mainModal4.onclick = function() {
  mainModal1.src = modal4;
}

mainModal5.onclick = function() {
  mainModal1.src = modal5;
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("product1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
