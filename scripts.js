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


// =============picture shows on mouseover, picture moves when mouse moves================

const workTitles = document.querySelectorAll('.work-title');
// console.log (workTitles);

const previewImage = document.querySelector('#preview-image');

function handleMouseOver(e) {
    const imageSrc = e.target.dataset.imageSrc;
    previewImage.src = imageSrc;
    previewImage.style.display = 'block';
}

function handleMouseMove(e) {
    const xPos = e.clientX - 280;
    const yPos = e.clientY - 330;
    previewImage.style.left = `${xPos}px`;
    previewImage.style.top = `${yPos}px`;
}

function handleMouseOut() {
    previewImage.style.display = 'none';
}

for (let i = 0; i < workTitles.length; i++) {
  workTitles[i].addEventListener('mouseover', handleMouseOver);
  workTitles[i].addEventListener('mousemove', handleMouseMove);
  workTitles[i].addEventListener('mouseout', handleMouseOut);
}

// ====================  Handle Side Menu ===========================

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