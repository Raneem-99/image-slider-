let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let slides = document.querySelectorAll('.slide');
let slideIcons = document.querySelectorAll('.slide-icon');
let slider = document.querySelector('.slider')
let numberOfSlides = slides.length;

let slideNumber = 0;

// Button 
nextBtn.addEventListener('click', () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');

});

// Button presedent
prevBtn.addEventListener('click', () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');

})

// AutoPlay
let playSlider;

let repeater = () => {
    playSlider = setInterval(function() {

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        })

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active');


    }, 4000);
}

// call autoplay
repeater();


// autoplay to mouseOver
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
});


// autoplay to mouseOut
slider.addEventListener('mouseout', () => {
    repeater();
});