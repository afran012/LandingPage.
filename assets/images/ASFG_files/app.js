// Import


import {darkMode} from '../domain/darkMode/darkMode.js'
import { $ } from "../utils/domUtils.js";

$("#dark-mode").on("click", ()=>{
    let darkLocal = JSON.parse(localStorage.getItem('darkLocal'))
    
    if (darkLocal=="light" ) {
        $("#dark-mode").htmlElement.innerHTML = "MODO NOCTURNO"     
        
    } else {
        $("#dark-mode").htmlElement.innerHTML = "MODO DIURNO"       
    }
})

/*
import { GIFMAX } from "../configs/config.js";


/////  
GIFMAX.pathPage = "./"
let patho = GIFMAX.pathPage
*/


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  slideIndex++;

  setTimeout(() => {
    showSlides(slideIndex);
  }, 10000);
}

