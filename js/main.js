var mySwiper = new Swiper('.hero-slider', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 25,

  // Navigation arrows
  navigation: {
    nextEl: '.hero-slider__btn--next',
    prevEl: '.hero-slider__btn--prev',
  },

  noSwipingClass: 'hero-slider',

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 2,
      spaceBetween: 25,
      noSwipingClass: 'swiper-no-siping',
    }
  }

})