var slideIndex = 1;

// Initialize slideshow when page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded, initializing slideshow");
  initializeSlideshow();
  setupButtonListeners(); // Setup button event listeners after DOM loads
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


function setupButtonListeners() {
  // Slideshow navigation buttons
  let slidePrevButton = document.getElementById("slidePrevButton");
  let slideNextButton = document.getElementById("slideNextButton");
  
  // Accordion content buttons
  let leftButton = document.getElementById("leftButton");
  let rightButton = document.getElementById("rightButton");

  // Slideshow previous button
  if (slidePrevButton) {
    slidePrevButton.addEventListener("click", () => {
      console.log("Previous slide button clicked");
      // The onclick in HTML already handles this, but we can add extra functionality here
    });
  }

  // Slideshow next button
  if (slideNextButton) {
    slideNextButton.addEventListener("click", () => {
      console.log("Next slide button clicked");
      // The onclick in HTML already handles this, but we can add extra functionality here
    });
  }

  // Left accordion button - shows team page images
  if (leftButton) {
    leftButton.addEventListener("click", () => {
      console.log("Left accordion button clicked - showing team page");
      showTeamImages();
    });
  }

  // Right accordion button - shows products page images
  if (rightButton) {
    rightButton.addEventListener("click", () => {
      console.log("Right accordion button clicked - showing products page");
      showProductsImages();
    });
  }
}

// Function to show team images
function showTeamImages() {
  let teamImage = document.querySelector(".imageContainer img:first-child");
  let productsImage = document.querySelector(".imageContainer img:last-child");
  
  if (teamImage) {
    teamImage.classList.remove("w3-hide");
    console.log("Team image shown");
  }
  if (productsImage) {
    productsImage.classList.add("w3-hide");
    console.log("Products image hidden");
  }
}

// Function to show products images
function showProductsImages() {
  let teamImage = document.querySelector(".imageContainer img:first-child");
  let productsImage = document.querySelector(".imageContainer img:last-child");
  
  if (teamImage) {
    teamImage.classList.add("w3-hide");
    console.log("Team image hidden");
  }
  if (productsImage) {
    productsImage.classList.remove("w3-hide");
    console.log("Products image shown");
  }
}

