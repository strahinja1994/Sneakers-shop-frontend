const backgrounds = document.querySelectorAll('.home__brands-image');
const previousBtn = document.querySelector('.home__brands-previous');
const nextBtn = document.querySelector('.home__brands-next');
let counter = 0;

function slider (e) {
    if (e.currentTarget === nextBtn) {
        if (counter < backgrounds.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
    } else {
        if (counter > 0) {
            counter--;
        } else {
            counter = backgrounds.length - 1;
        }
    }

    backgrounds.forEach((background,i) => {
        if ( i === counter ) {
            background.classList.add('home__brands-image--active');
            background.classList.remove('home__brands-image--next');
            background.classList.remove('home__brands-image--previous');
        }
        else if (i < counter) {
            background.classList.remove('home__brands-image--active');
            background.classList.remove('home__brands-image--next');
            background.classList.add('home__brands-image--previous');
        }
        else {
            background.classList.remove('home__brands-image--active');
            background.classList.add('home__brands-image--next');
            background.classList.remove('home__brands-image--previous');
        }
    }
)};

nextBtn.addEventListener('click', slider);
previousBtn.addEventListener('click', slider);