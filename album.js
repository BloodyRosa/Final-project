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

const slides = document.querySelectorAll('.animated-img');

let currentSlide = 0;   // <-------this is very important, do it first so to ensure the value of this variable is always existing

slides[currentSlide].classList.add('active'); //step 1: makes the 1st photo to be shown 

let slideInterval = setInterval(nextSlide, 1000); //step 2: every 1s, excutes the function 'nextSlide'

function nextSlide() {
  slides[currentSlide].classList.remove('active'); //step 2(1): change 'display block' back to 'display none' for 1st photo

  if(currentSlide < slides.length - 1){    //step 2(2): check the index of current slide (0-12), if it's less than 13, adds 1 to its index 
    currentSlide = currentSlide + 1; 
  }else{
    currentSlide = 0;   //step 2(3): when the index of current slide more than 12 or equal to 13, changes it back to 0 (1st photo)
  }
  console.log('currentSlide',currentSlide);

  slides[currentSlide].classList.add('active'); //step 3: adds 'display: block' to the following index
}

// ====================== setting mouse hover to stop photo changing ==================

const slideshow = document.querySelector('.slideshow');


slideshow.addEventListener('mouseover', pauseSlideshow);
slideshow.addEventListener('mouseout', startSlideshow);

function pauseSlideshow() {
  clearInterval(slideInterval);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 1000);
}


// ======================= setting Modal for photo Enlarge ==========================

// setting event: click image and open modal, click cross to close modal

  const gridImages = document.querySelectorAll('.grid-image');
  const modalCloseButton = document.querySelector('.close-button');

  for (let i = 0; i < gridImages.length; i++) {
      gridImages[i].addEventListener("click", openModal);
  }

  modalCloseButton.addEventListener("click", closeModal);


// function for open the Modal

function openModal() {
  const imageModal = document.querySelector('#image-modal');
  imageModal.style.display = "flex";

  const enlargedImage = document.querySelector('#enlarged-image');
  enlargedImage.src = this.src;

// disable the overflow (scroll of whole page)

  document.body.style.overflow = "hidden";
}

// function for closing the Modal

function closeModal() {
  const imageModal = document.querySelector('#image-modal');
  imageModal.style.display = "none";

// resume scroll

  document.body.style.overflow = "auto";
}
