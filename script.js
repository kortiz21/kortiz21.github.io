// Scroll to section on click 
function scrollToElement(id) {
    document.getElementById(id).scrollIntoView();
}
// Mobile menu toggle
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// Typed.js library
var typed = new Typed(".mov",{
  strings: [, "Hi i'm Kevin Ortiz","Graduated August 2023","Software Engineer", "Full Stack Web Developer", "Game Developer"] ,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
