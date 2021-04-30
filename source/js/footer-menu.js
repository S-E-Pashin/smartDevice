'use strict';

$(document).ready(function () {

  $('.main-nav').click(function (e) {
    let target = e.target;

    if ($(target).is(':not(p, li, a)')
    ) {

      if ($('.main-nav__button').hasClass('main-nav__button--open')) {
        closeMainNav();

      } else if ($('.main-nav__button').hasClass('main-nav__button--close')) {
        openMainNav();
        closeContacts();
      }
    }

  });

  $('.contacts').click(function (e) {
    const target = e.target;

    if ($(target).is(':not(p, ul, li, a, .contacts__adress)')
    ) {
      if ($('.contacts__button').hasClass('contacts__button--open')) {
        closeContacts();
      } else if ($('.contacts__button').hasClass('contacts__button--close')) {
        openContacts();
        closeMainNav();
      }
    }
  });

  const openMainNav = function () {
    $('.main-nav__button').removeClass('main-nav__button--close').addClass('main-nav__button--open');
    $('.main-nav__first-list').removeClass('main-nav__first-list--close').addClass('main-nav__first-list--open');
    $('.main-nav__second-list').removeClass('main-nav__second-list--close').addClass('main-nav__second-list--open');
  }

  const closeMainNav = function () {
    $('.main-nav__button').removeClass('main-nav__button--open').addClass('main-nav__button--close');
    $('.main-nav__first-list').removeClass('main-nav__first-list--open').addClass('main-nav__first-list--close');
    $('.main-nav__second-list').removeClass('main-nav__second-list--open').addClass('main-nav__second-list--close');
  }

  const openContacts = function () {
    $('.contacts__button').removeClass('contacts__button--close').addClass('contacts__button--open');
    $('.contacts__body').removeClass('contacts__body--close').addClass('contacts__body--open');
  }

  const closeContacts = function () {
    $('.contacts__button').removeClass('contacts__button--open').addClass('contacts__button--close');
    $('.contacts__body').removeClass('contacts__body--open').addClass('contacts__body--close');
  }

  closeMainNav();
});
