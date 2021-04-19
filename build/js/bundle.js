/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************************!*\
  !*** ./source/js/footer-menu.js ***!
  \**********************************/


$(document).ready(function () {
  $('.main-nav__button').click(function () {
    if ($('.main-nav__button').hasClass('main-nav__button--open')) {
      $('.main-nav__button').removeClass('main-nav__button--open').addClass('main-nav__button--close');

      $('.main-nav__first-list').removeClass('main-nav__first-list--open').addClass('main-nav__first-list--close');
      $('.main-nav__second-list').removeClass('main-nav__second-list--open').addClass('main-nav__second-list--close');
      // main-nav__first-list

    } else if ($('.main-nav__button').hasClass('main-nav__button--close')) {


      $('.main-nav__button').removeClass('main-nav__button--close').addClass('main-nav__button--open');
      $('.main-nav__first-list').removeClass('main-nav__first-list--close').addClass('main-nav__first-list--open');
      $('.main-nav__second-list').removeClass('main-nav__second-list--close').addClass('main-nav__second-list--open');
    }

  });

  $('.contacts__button').click(function () {
    if ($('.contacts__button').hasClass('contacts__button--open')) {
      $('.contacts__button').removeClass('contacts__button--open').addClass('contacts__button--close');
      $('.contacts__body').removeClass('contacts__body--open').addClass('contacts__body--close');
    } else if ($('.contacts__button').hasClass('contacts__button--close')) {
      $('.contacts__button').removeClass('contacts__button--close').addClass('contacts__button--open');
      $('.contacts__body').removeClass('contacts__body--close').addClass('contacts__body--open');
    }
  });
});

}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./source/js/input-mask.js ***!
  \*********************************/


$(document).ready(function () {
  $('#form-id-tel').mask('+7 (999) 999 99 99');
  $('#popup-id-tel').mask('+7 (999) 999 99 99');
});

}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************************!*\
  !*** ./source/js/popup-open-close.js ***!
  \***************************************/


$(document).ready(function () {
  $('.header__callback').click(function () {
    if ($('.popup').hasClass('popup')) {
      $('.popup').removeClass('popup--close').addClass('popup--open');

      // setTimeout(()=>$('#popup-id-name').focus(), 100);

      setTimeout(function () {
        $('#popup-id-name').focus();
      }, 100);

      $('.popup__button').click(function () {
        $('.popup').removeClass('popup--open').addClass('popup--close');
      });

      $(document).keydown(function (e) {
        if (e.key === 'Escape' || e.key === 'x') {
          $('.popup').removeClass('popup--open').addClass('popup--close');
        }
      });
    }
  });
});

}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./source/js/save-input.js ***!
  \*********************************/


var inputNamePopup = '';
var inputTelPopup = '';
var inputMessagePopup = '';

$('#popup-id-name').keyup(function () {
  inputNamePopup = $('#popup-id-name').val();
  localStorage.setItem('inputNamePopup', inputNamePopup);
  // var lSN = localStorage.getItem('inputNamePopup');
  // console.log(lSN);
});

$('#popup-id-tel').keyup(function () {
  inputTelPopup = $('#popup-id-tel').val();
  localStorage.setItem('inputTelPopup', inputTelPopup);
  // console.log(inputTelPopup);
});

$('#popup-id-message').keyup(function () {
  inputMessagePopup = $('#popup-id-message').val();
  localStorage.setItem('inputMessagePopup', inputMessagePopup);
  // console.log(inputMessagePopup);
});
// todo рассмотреть возможность применения замыкания и выполнения функции по ссылке. На будущее.

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
// 'use strict';

// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

}();
/******/ })()
;