// 鼠标悬停出现Works的drop-down menu

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