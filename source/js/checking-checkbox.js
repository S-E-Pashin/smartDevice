'use strict';

$(document).ready(function () {
  $('#form__checkbox-id').on('click', function () {
    if ( $(this).is(':checked') ) {
      $('.form__button-submit').attr('disabled', false);
    } else {
      $('.form__button-submit').attr('disabled', true);
    }
  })

  $('#popup__checkbox-id').on('click', function () {
    if ( $(this).is(':checked') ) {
      $('.popup__button-submit').attr('disabled', false);
    } else {
      $('.popup__button-submit').attr('disabled', true);
    }
  })
});
