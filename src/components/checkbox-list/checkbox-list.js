import $ from 'jquery';

const $listHeader = $('.js-checkbox-list__header');
const $listItems = $('.js-checkbox-list__items');

$($listHeader).each(function(i) {
  $(this).on('click', function() {
    $($listItems).eq(i).toggleClass('checkbox-list__items_hidden');
    $($listHeader).eq(i).toggleClass('checkbox-list__header_opened');
  });
});