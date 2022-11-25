$(document).ready(function () {
    $(".carusel__wrapper").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        adaptiveHeight: true,
        appendArrows: ".carusel__controls",
        prevArrow: '<button type="button" class="slick-prev carusel__prev"></button>',
        nextArrow: '<button type="button" class="slick-prev carusel__next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: false,
                    appendArrows: ' ',
                }
            }
        ]
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.go-up').fadeIn();
        } else {
            $('.go-up').fadeOut();
        }
    });

    $('.go-up').click(function () {
        const _href = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    $(".catalog__tabs").on("click", "li:not(.catalog__tab--active)", function () {
        $(this)
            .addClass("catalog__tab--active")
            .siblings()
            .removeClass("catalog__tab--active")
            .closest(".container952")
            .find(".catalog__content")
            .removeClass("catalog__content--active")
            .eq($(this).index())
            .addClass("catalog__content--active");
    });

    toggleActiveClass(".card-catalog__frontflip");
    toggleActiveClass(".card-catalog__backflip");

    function toggleActiveClass(item) {
        $(item).each(function (i) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".card-catalog__frontflip").eq(i).toggleClass("card-catalog__frontflip--active");
                $(".card-catalog__backflip").eq(i).toggleClass("card-catalog__backflip--active");
            });
        });
    }
    // const hidder = document.querySelector('.hidder'),
    //     footerInfo = document.querySelector('.footer__info');
    // hidder.addEventListener('click', () => {
    //     console.log('hi');
    //     footerInfo.classList.toggle('footer__info--active');
    // });

    $(".hidder").on("click", () => {
        $(".footer__info").toggleClass("footer__info--active");
    });

    $("[data-modal=consultation]").on("click", () => {
        $(".overlay , #consultation").fadeIn();
    });

    $(".button--modal-close").on("click", () => {
        $("#consultation, #order, #thanks, .overlay").fadeOut();
    });



    $(".button--card").each(function (i) {
        $(this).on('click', () => {
            $('#order .modal__subtitle').text($('.card-catalog__title').eq(i).text());
            $(".overlay , #order").fadeIn();
        });
    });

    document.querySelectorAll('input[name=phone]').forEach(form => {
        new Cleave(form, {
            phone: true,
            phoneRegionCode: 'RU',
            blocks: [3, 3, 2, 2],
            // prefix: '+7',
            delimiters: ['-', '-', '-']
        });
    });

    formValidate("#consultation-section-form");
    formValidate("#order form");
    formValidate("#consultation form");

    function formValidate(form) {
        console.log('validation started');
        $(form).validate({
            rules: {
                name: {
                    required: true,
                },
                phone: {
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: 'Пожалуйста введите свое имя',
                },
                phone: {
                    required: 'Пожалуйста введите свой телефон',

                },
                email: {
                    required: 'Пожалуйста введите свой Email',
                    email: 'Вы забыли указать хостинг вашего почтового сервиса @почта.ру'
                }
            }
        });
    }


    $('form').submit(function (e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }
        console.log('letter send');
        console.log($('form'));
        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });

    new WOW().init();
});
