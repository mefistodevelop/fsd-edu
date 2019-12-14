import $ from 'jquery';

$(document).ready(function() {
  let name = '';
  let score = '';

  $('.dropdown__label').each(function(i) {
    $(this).add('.dropdown__arrow', this).on('click', function() {
      // $('.dropdown__top').eq(i).val(`${name}: ${score}`);
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


  function increment() {
    $('.dropdown__control_plus').on('click', function() {
      let num = +$(this).prev().text();
      if (num < 10) {
        $(this).prev().text(num + 1);
        score++;
      }
     
      $('.dropdown__top').val(`${name}: ${score}`);
    });
  }

  function decrement() {
    $('.dropdown__control_minus').on('click', function() {
      let num = +$(this).next().text();
      if (num > 0) {
        $(this).next().text(num - 1);
        score--;
      }
    });
  }

  increment();
  decrement();


  // function doit() {
  //   $('.dropdown__control_plus').on('click', function() {
  //       $('.dropdown__top').val(`${name} + ${score}`);
  //   });
  // }
  // doit();
//   function doit() {
//     let name = '';
//     let score = '';

    // $('.dropdown__item').each(function(z){
    //   let datas = {};
    //   let name = $('.dropdown__element').eq(z).text();
    //   let score = $('.dropdown__score').eq(z).text();
    //   datas += {name: score};
    //   console.log(datas);
    // });
    // score.on('change', ()=>{
    //   $('.dropdown__top').val(`${name}: ${score}`);
    // });
//   }
// doit();
  

});