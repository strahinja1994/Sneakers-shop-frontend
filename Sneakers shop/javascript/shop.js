const itemsCenter = document.querySelector('.shop__items');
const articlesHolder = document.querySelector('.shop__article-image');
const shoes = document.querySelectorAll('.shop__items-item');
const covers = document.querySelectorAll('.shop__article-cover');

function connectItemsArticles (e) {
    shoes.forEach((shoe,index)=> {
            if (shoe === e.currentTarget) {
                covers[index].classList.add('shop__article-cover--active');
            }
            else {
                covers[index].classList.remove('shop__article-cover--active');
            }
        });
}

const mobileCovers = document.querySelectorAll('.shop__mobile-cover');
const mobileHolder = document.querySelector('.shop__mobile');
const closeMobile = document.querySelector('.shop__mobile-close');

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

function connectMobileArticles (e) {
    shoes.forEach((shoe,index) => {
        if (shoe === e.currentTarget) {
            mobileCovers[index].classList.add('shop__mobile-cover-active');
            mobileHolder.classList.add('shop__mobile-active');
        }
        if (window.matchMedia("(max-width: 499px)").matches) {
            disableScroll();
        }

        closeMobile.addEventListener('click', () => {
            mobileHolder.classList.remove('shop__mobile-active');
            mobileCovers[index].classList.remove('shop__mobile-cover-active');
            enableScroll();
        });
    });
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        mobileHolder.classList.remove('shop__mobile-active');
        enableScroll();
    }
});

shoes.forEach(shoe => {
    shoe.addEventListener('click',connectItemsArticles);
    shoe.addEventListener('click',connectMobileArticles);
});
