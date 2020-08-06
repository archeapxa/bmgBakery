var mySwiper = new Swiper('.hero-slider', {
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.hero-slider__btn--next',
    prevEl: '.hero-slider__btn--prev',
  },

})