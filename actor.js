let slides = document.querySelector('.pics-slide').children;
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let index = 0;

nextBtn.onclick = () => {
    switchSlide('next');
}

prevBtn.onclick = () => {
    switchSlide('prev');
}

function switchSlide(direction) {
    slides[index].classList.remove("active");
    if (direction == 'next') {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
    } else {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
    }
    slides[index].classList.add("active");
}