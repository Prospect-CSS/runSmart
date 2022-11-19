$(document).ready(function () {
    $('.carusel__wrapper').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        adaptiveHeight: true,
        appendArrows: '.carusel__controls',
        prevArrow: '<button type="button" class="slick-prev carusel__prev"></button>',
        nextArrow: '<button type="button" class="slick-prev carusel__next"></button>',

    });
});