var hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links-mobile");
const click =document.querySelector(".nav-links-mobile li a");
const links = document.querySelector(".nav-links-mobile li");
var navbar =document.getElementById("navbars");
hamburger.addEventListener("click",() => {
    navLinks.classList.toggle("nav-active");
   hamburger.classList.toggle("toggle");})

function formatDate(inputStr) {
    var timestamp = parseInt(inputStr, 10);
    var date = new Date(timestamp);
    return date.toISOString().substr(0, 10);
}

console.log(formatDate("19999999"));