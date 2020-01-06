import './room-preview.scss';
require('./img/top-slide.jpg');
require('./img/bottom-slide.jpg');

import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
  $('.room-preview__carousel').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev" aria-label="previous slide"></button>',
    nextArrow: '<button type="button" class="slick-next" aria-label="next slide"></button>',
  });

  $('.js-room-preview__carousel-wrapper').hover(function() {
    const shadow = $(this).find('.js-room-preview__carousel-arrow');
    const arrow = $(this).find('.slick-arrow');

    $(shadow).toggleClass('visible');
    $(arrow).toggleClass('slick-arrow_visible');
  });
});