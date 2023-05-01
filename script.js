// Scroll to section on click 
function scrollToElement(id) {
    document.getElementById(id).scrollIntoView();
}
// mobile menu toggle
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }