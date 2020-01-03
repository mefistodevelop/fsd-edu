import './input.scss';

import $ from 'jquery';
import "jquery-mask-plugin";

$(document).ready(function(){
  $('input[name="date"]').mask('00.00.0000');
});