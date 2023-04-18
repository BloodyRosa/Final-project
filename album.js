// =================dropdown menu on mouseover on 'Works'==============

const works = document.querySelector('#works');
const dropdown = document.querySelector('#dropdown');

function showDropdown() {
    dropdown.style.display = 'block';
}

function hideDropdown() {
    dropdown.style.display = 'none';
}

works.addEventListener('mouseover', showDropdown);
works.addEventListener('mouseout', hideDropdown);


// ====================== Handle Side Menu ========================

const burgerButton = document.querySelector('.hamburger-menu');
const hiddenMenuPage = document.querySelector('.side-menu');
const closeButton = document.querySelector('.close-menu');
const openMenuWorks = document.querySelector('.side-menu-works');
const worksButton = document.querySelector('#works-button');

burgerButton.addEventListener('click', showBurgerMenu);

function showBurgerMenu(){
  hiddenMenuPage.classList.add('side-menu-open');
}

closeButton.addEventListener('click', hideBurgerMenu);

function hideBurgerMenu(){
  hiddenMenuPage.classList.remove('side-menu-open');
}

worksButton.addEventListener('click', openWorks);

function openWorks(){
  if (openMenuWorks.style.display==="block"){
    openMenuWorks.style.display="none";
  }
  else (openMenuWorks.style.display="block")
}

// =================== setting Auto-changing Album ========================

const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('img');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 900);
let isPaused = false;

slideshow.addEventListener('mouseover', pauseSlideshow);
slideshow.addEventListener('mouseout', startSlideshow);

slides[currentSlide].classList.add('active');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function pauseSlideshow() {
  clearInterval(slideInterval);
  isPaused = true;
}

function startSlideshow() {
  if (isPaused) {
    slideInterval = setInterval(nextSlide, 900);
    isPaused = false;
  }
}

function enlargeSlide(e) {
  if (e.target.tagName === 'IMG') {
    if (e.target.classList.contains('enlarged')) {
      e.target.classList.remove('enlarged');
    } else {
      e.target.classList.add('enlarged');
    }
  }
}

// ======================= setting Modal for photo Enlarge ==========================

// setting event: click image and open modal, click cross to close modal

document.addEventListener("DOMContentLoaded", function () {
  const gridImages = document.querySelectorAll('.grid-image');
  for (let i = 0; i < gridImages.length; i++) {
      gridImages[i].addEventListener("click", openModal);
  }
  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", closeModal);
});

// function for open the Modal

function openModal() {
  const imageModal = document.getElementById("image-modal");
  imageModal.style.display = "flex";

  const modalImage = document.getElementById("modal-image");
  modalImage.src = this.src;

  const caption = document.getElementById("caption");
  caption.innerHTML = this.alt;

// disable the overflow (scroll)

  document.body.style.overflow = "hidden";
}

// function for closing the Modal

function closeModal() {
  const imageModal = document.getElementById("image-modal");
  imageModal.style.display = "none";

// resume scroll

  document.body.style.overflow = "auto";
}
