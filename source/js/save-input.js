'use strict';

let inputNamePopup = '';
let inputTelPopup = '';
let inputMessagePopup = '';

$('#popup-id-name').keyup(function () {
  inputNamePopup = $('#popup-id-name').val();
  localStorage.setItem('inputNamePopup', inputNamePopup);
  let lSN = localStorage.getItem('inputNamePopup');
  console.log(lSN);
})

$('#popup-id-tel').keyup(function () {
  inputTelPopup = $('#popup-id-tel').val();
  localStorage.setItem('inputTelPopup', inputTelPopup);
  console.log(inputTelPopup);
})

$('#popup-id-message').keyup(function () {
  inputMessagePopup = $('#popup-id-message').val();
  localStorage.setItem('inputMessagePopup', inputMessagePopup);
  console.log(inputMessagePopup);
})
//todo рассмотреть возможность применения замыкания и выполнения функции по ссылке. На будущее.
