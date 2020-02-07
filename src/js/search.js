import $ from 'jquery';

$(document).ready(function() {
{
  const filterBlock = $('.search__filter');
  const filterButton = $('.search__filter-button');
  const filterButtonArrow = $('.search__button-arrow');

  $(filterButton).on('click', function() {
    $(filterBlock).toggleClass('search__filter_visible');
    filterButtonArrow.toggleClass('search__button-arrow_open');
  });

}
});