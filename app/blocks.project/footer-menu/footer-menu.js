'use strict';

$(function() {

  function regulationsForMq(mq) {
    if (mq.matches) {
      $('.footer-menu__item_has-child').click(function() {
        $(this)
          .toggleClass('footer-menu__item_open')
          .find('.footer-menu__submenu')
          .slideToggle();
      });

      $('.footer-menu__item_has-child')
        .find('.footer-menu__submenu')
        .css('display', 'none');
    } else {
      $('.footer-menu__item_has-child')
        .unbind('click')
        .removeClass('footer-menu__item_open')
        .find('.footer-menu__submenu')
        .css('display', 'block');
    }
  }

  let mq = window.matchMedia('screen and (max-width: 768px)');

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

});
