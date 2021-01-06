/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });*/

//document.getElementById("myVideo").autoplay;

$(document).ready(function(){
  $('.tooltipped').tooltip();
});

$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 50) {
          $('.nav-wrapper')[0].style.setProperty('background-color', '#004d6e', 'important');
          $('.nav-wrapper')[0].style.setProperty('height', '75px', 'important');
          $('.nav-wrapper')[0].style.setProperty('line-height', '75px', 'important');

          //Itens da navbar
          //Cor
          $('#item1')[0].style.setProperty('color', 'white', 'important');          
          $('#item2')[0].style.setProperty('color', 'white', 'important');
          $('#item3')[0].style.setProperty('color', 'white', 'important');
          //Peso
          $('#item1')[0].style.setProperty('font-weight', 'bolder', 'important');
          $('#item2')[0].style.setProperty('font-weight', 'bolder', 'important');
          $('#item3')[0].style.setProperty('font-weight', 'bolder', 'important');
          //Tamanho
          $('#item1')[0].style.setProperty('font-size', '1.2rem', 'important');
          $('#item2')[0].style.setProperty('font-size', '1.2rem', 'important');
          $('#item3')[0].style.setProperty('font-size', '1.2rem', 'important');

      } else {
          $('.nav-wrapper')[0].style.setProperty('background-color', 'white', 'important');
          $('.nav-wrapper')[0].style.setProperty('height', '90px', 'important');
          $('.nav-wrapper')[0].style.setProperty('line-height', '90px', 'important');
          //Itens da navbar
          //Cor
          $('#item1')[0].style.setProperty('color', '#004d6e', 'important');
          $('#item2')[0].style.setProperty('color', '#004d6e', 'important');
          $('#item3')[0].style.setProperty('color', '#004d6e', 'important');

          //Peso
          $('#item1')[0].style.setProperty('font-weight', 'normal', 'important');
          $('#item2')[0].style.setProperty('font-weight', 'normal', 'important');
          $('#item3')[0].style.setProperty('font-weight', 'normal', 'important');

          //Tamanho
          $('#item1')[0].style.setProperty('font-size', '1.3rem', 'important');
          $('#item2')[0].style.setProperty('font-size', '1.3rem', 'important');
          $('#item3')[0].style.setProperty('font-size', '1.3rem', 'important');

      }
  });
});