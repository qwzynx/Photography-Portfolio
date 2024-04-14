const overlay = document.getElementById("overlay");
const Oimg = document.getElementById("Oimg");

function scrollToId(section) {
  var scroll = document.getElementById(section);
  scroll.scrollIntoView();
}
function openPhoto(source) {
  overlay.style.display = "block";
  Oimg.src = source;
}
function off() {
  overlay.style.display = "none";
}
function webOpen(web) {
  window.open(web);
}