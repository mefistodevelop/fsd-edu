import './like-button.scss';

window.$ = window.jQuery = require('jquery');

(function($) {

  const $likeButtonItem = $('.js-like-button__item');
  const $mod = 'like-button__label_checked';

  $($likeButtonItem).on('change.likeButton', function(){
    $(this).parent().toggleClass($mod);
  });

})(jQuery);

