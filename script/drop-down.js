const btn = document.querySelector('.menu-bar');
const nav = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('.close-menu');

function displayMenu() {
  nav.classList.replace('none', 'display');
  btn.classList.replace('block', 'none');
}

function closeMenu() {
  nav.classList.replace('display', 'none');
  btn.classList.replace('none', 'block');
}

closeBtn.addEventListener('click', () => {
  closeMenu();
});

btn.addEventListener('click', () => {
  displayMenu();
});