import $ from 'jquery';

$(document).ready(function() {
  $('.dropdown__label').each(function(i) {
    $(this).add('.dropdown__arrow', this).on('click', function() {
      $('.dropdown__top').eq(i).val('woopey-doopey');
      $('.dropdown__menu').eq(i).toggleClass('hidden');
    });
  });

  $(document).click(function (e) {
    var container = $(".dropdown__label");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".dropdown__menu").addClass('hidden');
    }
  });
});