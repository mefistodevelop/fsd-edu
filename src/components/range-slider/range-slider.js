import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
document.addEventListener('DOMContentLoaded', function() {
  var handlesSlider = document.getElementById('range1');

  noUiSlider.create(handlesSlider, {
      start: [5000, 10000],
      range: {
          'min': [0],
          'max': [15000]
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: '₽'
      }),
      connect: true,
      
  });

  function getValue() {
    const spanRange = document.querySelector('.range-slider__range');
    handlesSlider.noUiSlider.on('update', function(values) {
      spanRange.innerHTML = values[0] + " - " + values[1];
    })
  }
  
  getValue();
});
