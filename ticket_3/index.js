$(document).ready(function() {
   // Находим изображение по его классу или id
   var image = $(".image");
 
   // Устанавливаем исходный размер изображения
   var originalWidth = image.width();
   var originalHeight = image.height();
 
   // Устанавливаем начальные размеры изображения
   image.css({
     width: originalWidth,
     height: originalHeight
   });
 
   // Устанавливаем обработчик события наведения курсора мыши
   image.hover(
     function() {
       // При наведении курсора мыши выполняем анимацию увеличения размеров изображения
       $(this).stop().animate({
         width: originalWidth * 1.2, // Увеличиваем ширину на 20%
         height: originalHeight * 1.2 // Увеличиваем высоту на 20%
       }, 200); // Время анимации – 200 миллисекунд
     },
     function() {
       // При выходе курсора мыши выполняем анимацию восстановления исходного размера изображения
       $(this).stop().animate({
         width: originalWidth, // Устанавливаем исходную ширину
         height: originalHeight // Устанавливаем исходную высоту
       }, 200); // Время анимации – 200 миллисекунд
     }
   );
 });