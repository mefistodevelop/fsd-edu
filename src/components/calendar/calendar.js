import './calendar.scss';

window.$ = window.jQuery = require('jquery');
require('air-datepicker');

$(document).ready(function(){
  $('.calendar__field').datepicker({
    inline: true,
    toggleSelected: true,
    multipleDates: 2,
    range: true,
    clearButton: true,
    prevHtml: '<span class="datepicker__arrow datepicker__arrow_back">&#xe909</span>',
    nextHtml: '<span class="datepicker__arrow datepicker__arrow_next">&#xe909</span>',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    }
  });

});