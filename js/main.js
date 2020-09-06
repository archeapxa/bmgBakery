
const cakesRadioGroup = document.querySelectorAll('input[name=tabGroupCakes]');

const modal = document.querySelector('.modal'),
  modalWindow = document.querySelector('.modal__window'),
  modalBtn = document.querySelectorAll('[data-toggle=modal]'),
  modalCloseBtn = document.querySelector('.modal__close-btn');

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
  slidesPerView: 1,

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

  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    }
  },

})

// document.addEventListener

var cakesSliderMini = new Swiper('.cakes__slider--mini', {
  loop: true,
  slidesPerView: 1,
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

  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    }
  },

})


var cakesSliderBiscuit = new Swiper('.cakes__slider--biscuit', {
  loop: true,
  slidesPerView: 1,
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
  
  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    }
  },

})


// updating slider on tab change
cakesRadioGroup.forEach(radio => {
  radio.addEventListener('change', () => {
    cakesSliderBiscuit.update();
    cakesSliderMini.update();
    cakesSliderBiscuit.update();
  })
});

// zoom images in sliders plugin
const lightbox = GLightbox({ 
  touchNavigation: true,
});

// phone masking
const phone = document.getElementById('contact-us__phone');
const modalPhone = document.getElementById('modal__phone');
var maskPhone = {
  mask: '+38 (000) 000-00-00',
};
var mask = IMask(phone, maskPhone);
var maskModal = IMask(modalPhone, maskPhone);



const modalToggle = () => {
  modal.classList.toggle('modal--active');
  modalWindow.classList.toggle('modal__window--active');
}

modalBtn.forEach(element => {
  element.addEventListener('click', modalToggle);
});

modalCloseBtn.addEventListener('click', modalToggle);

// modalBtn.on('click', function () {
//   modal.addClass('modal--visible');
// });
// closeBtn.on('click', function () {
//   modal.removeClass('modal--visible');
//   modalSuccess.removeClass('modal--visible');
  // modal.val('');
  // $('#user-name').val('').removeClass('invalid');
  // $('#user-phone').val('').removeClass('invalid');
  // $('#user-email').val('').removeClass('invalid');
  // // $('div.invalid').css('display', 'none');
  // $('[data-modal]').find("div.invalid").css('display', 'none');
// });

