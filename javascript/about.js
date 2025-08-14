var slideIndex = 1;

// Initialize slideshow when page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded, initializing slideshow");
  initializeSlideshow();
});

function initializeSlideshow() {
  var slides = document.getElementsByClassName("mySlides");
  console.log("Found " + slides.length + " slides");

  // Hide all slides first
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the first slide
  if (slides.length > 0) {
    slides[0].style.display = "block";
    slideIndex = 1;
    console.log("Showing slide 1");
  }
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }

  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Show the current slide
  if (x.length > 0) {
    x[slideIndex - 1].style.display = "block";
    console.log("Showing slide " + slideIndex);
  }
}

function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
