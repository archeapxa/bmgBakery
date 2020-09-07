
const cakesRadioGroup = document.querySelectorAll('input[name=tabGroupCakes]');

const modal = document.querySelector('.modal'),
  modalWindow = document.querySelector('.modal__window'),
  modalBtn = document.querySelectorAll('[data-toggle=modal]'),
  modalCloseBtn = document.querySelector('.modal__close-btn'),
  modalFormSubmit = document.getElementById('modalFormSubmit'),
  modalForm = document.getElementById('formModal'),
  formMain = document.getElementById('formMain'),
  toTopBtn = document.getElementById('toTopBtn');

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
modal.addEventListener('click', e => {
  target = e.target;
  if (!modalWindow.contains(target)) {
    modalToggle();
  }
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 27) {
    if (modal.classList.contains('modal--active')) {
      modalToggle()
    }
  }
});
  

if (window.FormData) {

// ДЛЯ ФОРМЫ МОДАЛКИ
  // Добавляем обработчик на событие `submit`
  modalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Настройка AJAX запроса
    var request = new XMLHttpRequest();
    request.open('POST', 'send.php', true);
    // Это простой способ подготавливить данные для отправки (все браузеры и IE > 9)
    var formData = new FormData(modalForm);
    // Отправляем данные
    request.send(formData);

    // Функция для наблюдения изменения состояния request.readyState обновления statusMessage соответственно
    request.onreadystatechange = function () {
      // <4 =  ожидаем ответ от сервера
      if (request.readyState < 4) {
        console.log('waiting');
      // 4 = Ответ от сервера полностью загружен
      }
      else if (request.readyState === 4) {
        // 200 - 299 = успешная отправка данных!
        if (request.status == 200 && request.status < 300) {
          swal("Заявка принята!", "Мы вам позвоним!", "success");
          modalToggle(); 
          modalForm.reset();
        }
        else {
          swal("Oops", "Произошла ошибка.", "error");
          modalToggle();
        }
      }
    }
  });

  // ДЛЯ ФОРМЫ КОНТАКТОВ
  formMain.addEventListener('submit', function (event) {
    event.preventDefault();
    // Настройка AJAX запроса
    var request = new XMLHttpRequest();
    request.open('POST', 'send.php', true);
    // Это простой способ подготавливить данные для отправки (все браузеры и IE > 9)
    var formData = new FormData(formMain);
    // Отправляем данные
    request.send(formData);

    // Функция для наблюдения изменения состояния request.readyState обновления statusMessage соответственно
    request.onreadystatechange = function () {
      // <4 =  ожидаем ответ от сервера
      if (request.readyState < 4) {
        console.log('waiting');
        // 4 = Ответ от сервера полностью загружен
      }
      else if (request.readyState === 4) {
        // 200 - 299 = успешная отправка данных!
        if (request.status == 200 && request.status < 300) {
          swal("Заявка принята!", "Мы вам позвоним!", "success");
          formMain.reset();
        }
        else {
          swal("Oops", "Произошла ошибка.", "error");
        }
      }
    }
  });
}


// TOP TOP BUTTON
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    toTopBtn.style.visibility = "visible";
    toTopBtn.style.opacity = "1";

  } else {
    toTopBtn.style.visibility = "hidden";
    toTopBtn.style.opacity = "0";
  }
}

window.onscroll = function () { scrollFunction() };

toTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


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

// function XmlHttp() {
//   var xmlhttp;
//   try {
//     xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
//   } catch (e) {
//     try {
//       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     } catch (E) {
//       xmlhttp = false;
//     }
//   }
//   if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
//     xmlhttp = new XMLHttpRequest();
//   }
//   return xmlhttp;
// };





// function ajax(param) {
//   if (window.XMLHttpRequest) req = new XmlHttp();
//   method = (!param.method ? "POST" : param.method.toUpperCase());

//   if (method == "GET") {
//     send = null;
//     param.url = param.url + "&ajax=true";
//   }
//   else {
//     send = "";
//     for (var i in param.data) send += i + "=" + param.data[i] + "&";
//     send = send + "ajax=true";
//   }

//   req.open(method, param.url, true);
//   // if (param.statbox) document.getElementById(param.statbox).innerHTML = '<img src="images/wait.gif">';
//   req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   req.send(send);
//   req.onreadystatechange = function () {
//     if (req.readyState == 4 && req.status == 200) //если ответ положительный
//     {
//       console.log('success');
//       // if (param.success) param.success(req.responseText);
//     }
//   }
// };


// modalFormSubmit.addEventListener('click', ajax({
//   url: "send.php",
//   statbox: "status",
//   method: "POST",
//   data: { name: "value",
//   phone: "value" },
//   success: function (data) { console.log(data) }
// })
// );
// ajax({
//   url: "get_ajax.php",
//   statbox: "status",
//   method: "POST",
//   data: { name: "value" },
//   success: function (data) { document.getElementById("status").innerHTML = data; }
// });