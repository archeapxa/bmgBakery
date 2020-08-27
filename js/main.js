var heroSlider = new Swiper('.hero-slider', {
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

var reviewsSlider = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  centeredSlides: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.reviews__slider-button-next',
  //   prevEl: '.reviews__slider-button-prev',
  // },

  pagination: {
    el: '.reviews__slider-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      centeredSlides: false,
    }
  }

})

var cakesSliderMuss = new Swiper('.cakes__slider--muss', {
  loop: true,
  slidesPerView: 3,
  observer: true,
  observeParents: true,

  // If we need pagination
  pagination: {
    type: 'bullets',
    dynamicBullets: 'true',
    dynamicMainBullets: '3',
    el: '.cakes__slider-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.cakes__slider-button-next',
    prevEl: '.cakes__slider-button-prev',
  },

})

// document.addEventListener

var cakesSliderMini = new Swiper('.cakes__slider--mini', {
  loop: true,
  slidesPerView: 3,
  observer: true,
  observeParents: true,

  // If we need pagination
  pagination: {
    type: 'bullets',
    dynamicBullets: 'true',
    dynamicMainBullets: '3',
    el: '.cakes__slider-pagination--mini',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.cakes__slider-button-next',
    prevEl: '.cakes__slider-button-prev',
  },

})


var cakesSliderBiscuit = new Swiper('.cakes__slider--biscuit', {
  loop: true,
  slidesPerView: 3,
  observer: true,
  observeParents: true,

  // If we need pagination
  pagination: {
    type: 'bullets',
    dynamicBullets: 'true',
    dynamicMainBullets: '3',
    el: '.cakes__slider-pagination--biscuit',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.cakes__slider-button-next',
    prevEl: '.cakes__slider-button-prev',
  },

})

const cakesRadioGroup = document.querySelectorAll('input[name=tabGroupCakes]');
// console.log(cakesRadioGroup);
cakesRadioGroup.forEach(radio => {
  radio.addEventListener('change', () => {
    // console.log('change')
    cakesSliderBiscuit.update();
    cakesSliderMini.update();
    cakesSliderBiscuit.update();
  })
});