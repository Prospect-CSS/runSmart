$(document).ready(function () {
    $('.carusel__wrapper').slick({
        // autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        adaptiveHeight: true,
        appendArrows: '.carusel__controls',
        prevArrow: '<button type="button" class="slick-prev carusel__prev"></button>',
        nextArrow: '<button type="button" class="slick-prev carusel__next"></button>',

    });




    $('.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
        $(this)
            .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
            .closest('.container952').find('.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

    toggleActiveClass('.card-catalog__frontflip');
    toggleActiveClass('.card-catalog__backflip');

    function toggleActiveClass(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.card-catalog__frontflip').eq(i).toggleClass('card-catalog__frontflip--active');
                $('.card-catalog__backflip').eq(i).toggleClass('card-catalog__backflip--active');
            });
        });
    }
});
