'use strict';

$(function() {

  function eventCheck(e) {
    let container = $('.top-menu__list');

    if ( !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      !$(e.target).hasClass('hamburger') &&
      !$(e.target).hasClass('hamburger__btn') ) {
      container.fadeOut();

      $('.hamburger')
        .find('.hamburger__btn')
        .removeClass('hamburger__btn_on');
    }
  }

  function regulationsForMq(mq) {
    if (mq.matches) {
      $('.top-menu__item_has-child').click(function() {
        $(this)
          .find('.top-menu__submenu')
          .slideToggle();

        $(this).toggleClass('top-menu__item_open');
      });

      document.addEventListener('touchstart', eventCheck, false);
      document.addEventListener('click', eventCheck, false);

      $('.top-menu__submenu').css('display', 'none');
    } else {
      $('.top-menu__item_has-child')
        .unbind('click')
        .removeClass('top-menu__item_open');

      document.removeEventListener('touchstart', eventCheck, false);
      document.removeEventListener('click', eventCheck, false);

      $('.top-menu__submenu').css('display', 'block');
    }
  }

  let mq = window.matchMedia('screen and (max-width: 768px)');

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

});
