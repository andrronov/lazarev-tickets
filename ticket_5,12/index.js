$(document).ready(function() {
   $('#increaseButton').click(function() {
     $('p').css('font-size', '20px');
     $('p:first').css('color', 'red');
     $('p:last').css('color', 'green');
   });
 });