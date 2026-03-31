const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}
