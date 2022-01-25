const loginWindow = document.querySelector('.login');
const loginBtn = document.querySelector('.nav__icons-login');
const closeBtn = document.querySelector('.login__close');

function disableScroll() {
    // Get the current page scroll position
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

loginBtn.addEventListener('click', login);

closeBtn.addEventListener('click', logout);

function login () {
    loginWindow.classList.add('login__active');
    disableScroll();
}

function logout () {
    loginWindow.classList.remove('login__active');
    enableScroll();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        loginWindow.classList.remove('login__active');
        enableScroll();
    }
});