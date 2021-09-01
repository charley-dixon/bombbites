var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  // if the next button is clicked and you are on the last slide, it will go back to the beginning of the show
  if (n > slides.length) {
    slideIndex = 1
  }
  // if the prev button is clicked and you are on the first slide it will go to the last slide
  if (n < 1) {
    slideIndex = slides.length
  }

  // loop thru everything and set display to none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // This is where the image is activated
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
