const menuButton = document.querySelector('.burger-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});