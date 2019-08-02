const burger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");
const navLink = document.querySelectorAll(".mobile-nav li");
burger.addEventListener('click',toggleNav)
// fuction to toggle nav
function toggleNav(){
    nav.classList.toggle('nav-active');
    // to animate nav
navLink.forEach((link,index) => {
  if(link.style.animation){ // without the if statement the list fade in will only implent on refresh of the page
      link.style.animation = "";
  }
  else{
    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
  }
});
// to animate the burger icon
    burger.classList.toggle("toggle");
}
