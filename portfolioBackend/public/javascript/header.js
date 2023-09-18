const $ = (element) => document.getElementById(element);
hamburger = document.querySelector(".header_title_menu");
const navbar = $('header_menu')
    
    hamburger.addEventListener("click", function () {
      navbar.classList.toggle('active')

    });