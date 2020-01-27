import './range-slider.scss';

import noUiSlider from 'nouislider';
import wNumb from 'wnumb';


document.addEventListener('DOMContentLoaded', function(){

  const sliders = document.querySelectorAll('.range-slider__slider');

  if (sliders) {

    for (let i = 0; i < sliders.length; i++) {

      noUiSlider.create(sliders[i], {
        start: [5000, 10000],
        range: {
            'min': [0],
            'max': [16100]
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: '₽'
        }),
        connect: true,
        
      });


      function getValue() {
        
        const spanRange = document.querySelectorAll('.range-slider__range');

        for (let j = 0; j < spanRange.length; j++) {

          sliders[i].noUiSlider.on('update', function(values) {
            spanRange[i].innerHTML = values[0] + " - " + values[1];
          });
        }
      }
      
      getValue();

    }
  }

});
