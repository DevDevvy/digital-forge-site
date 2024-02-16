let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let slide of slides) {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

function moveSlide(n) {
  showSlide((slideIndex += n));
}

function autoScroll() {
  slideIndex++;
  showSlide(slideIndex);
  setTimeout(autoScroll, 3000); // Adjust time for your needs
}

// Initial setup
showSlide(slideIndex);
setTimeout(autoScroll, 3000); // Start auto-scrolling after 3 seconds
