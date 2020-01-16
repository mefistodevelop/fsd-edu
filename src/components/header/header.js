import './header.scss';
require('./img/toxin-logo.svg');

window.$ = window.jQuery = require('jquery');

(function($) {

  const $burger = $('.js-header__burger');
  const $header = $('.js-header');
  const $buttonLogin = $('.js-header__button_login');
  const $buttonReg = $('.js-header__button_registration');

  $header.each(function(i){
    $($burger).eq(i).on('click.header-burger', function(){
      $(this).toggleClass('header__burger_open');
      $(this).prev().toggleClass('header__list_visible');
      $($buttonLogin).toggleClass('header__button_ghost').children().toggleClass('button_ghost');
      $($buttonReg).children().toggleClass('button_ghost');
    });
  })

})(jQuery);


