$(document).ready(function () {
  $(".carusel__wrapper").slick({
    // autoplay: true,
    autoplaySpeed: 5000,
    speed: 1200,
    adaptiveHeight: true,
    appendArrows: ".carusel__controls",
    prevArrow: '<button type="button" class="slick-prev carusel__prev"></button>',
    nextArrow: '<button type="button" class="slick-prev carusel__next"></button>',
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

  $(".button--card").on("click", (i) => {
    $(".overlay , #order").fadeIn();
  });
});
