$(document).ready(function () {
  $('.header__callback').click(function () {
    if ($('.popup').hasClass('popup')) {
      $('.popup').removeClass('popup--close').addClass('popup--open');

      setTimeout(()=>$('#popup-id-name').focus(), 100);


      $('.popup__button').click(function () {
        $('.popup').removeClass('popup--open').addClass('popup--close');
      })

      $(document).keydown(function (e) {
        if (e.key === 'Escape' || e.key === 'x') {
          $('.popup').removeClass('popup--open').addClass('popup--close');
        }
      })
    }
  })
});
