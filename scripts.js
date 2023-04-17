// ===================鼠标悬停出现Works的drop-down menu==============

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



// ==============鼠标悬停出现图片，图片随着鼠标移动而移动=================

const workTitles = document.querySelectorAll('.work-title');
const previewImage = document.getElementById('preview-image');

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
  const title = workTitles[i];
  title.addEventListener('mouseover', handleMouseOver);
  title.addEventListener('mousemove', handleMouseMove);
  title.addEventListener('mouseout', handleMouseOut);
}


// =========================设置动态切换图片框=================================

const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('img');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 900);
let isPaused = false;

slideshow.addEventListener('mouseover', pauseSlideshow);
slideshow.addEventListener('mouseout', startSlideshow);
// slideshow.addEventListener('click', enlargeSlide);

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

// ===========================设置modal放大图片==============================

document.addEventListener("DOMContentLoaded", function () {
  const gridImages = document.querySelectorAll('.grid-image');
  for (let i = 0; i < gridImages.length; i++) {
      gridImages[i].addEventListener("click", openModal);
  }
  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", closeModal);
});

// 打开模态框的函数
function openModal() {
  const imageModal = document.getElementById("image-modal");
  imageModal.style.display = "flex";

  const modalImage = document.getElementById("modal-image");
  modalImage.src = this.src;

  const caption = document.getElementById("caption");
  caption.innerHTML = this.alt;

  // 禁止滚动
  document.body.style.overflow = "hidden";
}

// 关闭模态框的函数
function closeModal() {
  const imageModal = document.getElementById("image-modal");
  imageModal.style.display = "none";

  // 恢复滚动
  document.body.style.overflow = "auto";
}