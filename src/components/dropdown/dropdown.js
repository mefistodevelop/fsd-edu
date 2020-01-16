import './dropdown.scss';

import $ from 'jquery';

$(document).ready(function() {

  $('.dropdown__label').each(function(i) {
    $(this).add('.dropdown__arrow', this).on('click', function() {
      $('.dropdown__menu').eq(i).toggleClass('hidden');
    });
  });

  // close dropdown when click on any palce of page
  $(document).click(function (e) {
    let container = $(".dropdown__label");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".dropdown__menu").addClass('hidden');
    }
  });
  let obj = {};
  function increment() {
    $('.dropdown__control_plus').on('click', function() {
      let item = $(this).parents('label:first');
      let items = $(this).parents('li:first');
      let input = item.find('.dropdown__top');
      let name = items.find('.dropdown__element').text();
      let num = +items.find('.dropdown__score').text();
      if (num < 10) {
        $(this).prev().text(num + 1);
        num++;
        obj[name] = num;
        // console.log(obj);
      }
      let str = '';
      for (let item in obj) {
        str += `${obj[item]} ${item}, `;
      }
      input.val(str);

      // if (name === "спальни") {
      //   if (num === 1) {
      //     input.val(`${num} спальня`);
      //   }
      //   else if (num > 1 && num < 5) {
      //     input.val(`${num} спальни`);
      //   }
      //   else if (num >= 5 && num <= 10) {
      //     input.val(`${num} спален`);
      //   }
      // }
      // else if (name === "кровати") {
      //   if (num === 1) {
      //     input.val(`${num} кровать`);
      //   }
      //   else if (num > 1 && num < 5) {
      //     input.val(`${num} кровати`);
      //   }
      //   else if (num >= 5 && num <= 10) {
      //     input.val(`${num} кроватей`);
      //   }
      // }
      // else if (name === "ванные комнаты") {
      //   if (num === 1) {
      //     input.val(`${num} ванная комната`);
      //   }
      //   else if (num > 1 && num < 5) {
      //     input.val(`${num} ванные комнаты`);
      //   }
      //   else if (num >= 5 && num <= 10) {
      //     input.val(`${num} ванных комнат`);
      //   }
      // }
      // input.val(`${num} ${name}`);
    });
  }

  function decrement() {
    $('.dropdown__control_minus').on('click', function() {
      let item = $(this).parents('label:first');
      let items = $(this).parents('li:first');
      let input = item.find('.dropdown__top');
      let name = items.find('.dropdown__element').text();
      let num = +items.find('.dropdown__score').text();
      if (num > 0) {
        $(this).prev().text(num - 1);
        num--;
        obj[name] = num;
        console.log(obj);
      }
      let str = '';
      for (let item in obj) {
        str += `${item} ${obj[item]} `;
      }
      input.val(str);
    });
  }

  increment();
  decrement();  

});