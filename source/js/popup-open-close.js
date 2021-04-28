'use strict';

$(document).ready(function () {
  $('.header__callback').click(function () {
    if ($('.popup').hasClass('popup')) {
      $('.popup').removeClass('popup--close').addClass('popup--open');
      $('.body').addClass('body--restricted-travel');
      // setTimeout(()=>$('#popup-id-name').focus(), 100);

      setTimeout(function () {
        $('#popup-id-name').focus();
      }, 100);

      $('.popup__button').click(function () {
        $('.popup').removeClass('popup--open').addClass('popup--close');
        $('.body').removeClass('body--restricted-travel');
      });

      closingClickOverlay();

      $(document).keydown(function (e) {
        if (e.key === 'Escape') {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      });
    }
  });

  var closingClickOverlay = function () {
    $(document).mousedown(function (e) {
      if ($('.popup').hasClass('popup--open')) {
        var popup = $('.popup__wrapper');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      }
    });
  };

//  TODO позже подумать как разбить код на отдельные функции и экспортировать, их можно будет использовать отдельно для других проектов.
});
