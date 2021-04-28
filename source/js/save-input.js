'use strict';

var inputNamePopup = '';
var inputTelPopup = '';
var inputMessagePopup = '';

$('#popup-id-name').keyup(function () {
  inputNamePopup = $('#popup-id-name').val();
  localStorage.setItem('inputNamePopup', inputNamePopup);
});

$('#popup-id-tel').keyup(function () {
  inputTelPopup = $('#popup-id-tel').val();
  localStorage.setItem('inputTelPopup', inputTelPopup);
});

$('#popup-id-message').keyup(function () {
  inputMessagePopup = $('#popup-id-message').val();
  localStorage.setItem('inputMessagePopup', inputMessagePopup);
});
// todo рассмотреть возможность применения замыкания и выполнения функции по ссылке. На будущее.
