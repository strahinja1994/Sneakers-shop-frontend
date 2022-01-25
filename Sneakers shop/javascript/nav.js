const burgerBtn = document.querySelector('.nav__icons-burger');
const links = document.querySelector('.nav__links');

burgerBtn.addEventListener('click', () => {
    links.classList.toggle('nav__links-active');
    burgerBtn.classList.toggle('rotate');
});