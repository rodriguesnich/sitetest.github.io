
$(document).ready(function(){
    $('.sidenav')
      .sidenav()
      .on('click tap', 'li a', () => {
          $('.sidenav').sidenav('close');
    });
});

$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

ScrollReveal().reveal('.linha_horizontal', {delay:600});
ScrollReveal().reveal('.title', {delay:600});

ScrollReveal().reveal('.container', {delay:600});
ScrollReveal().reveal('.carousel', {delay:600});


if(screen.width > 992){
  var scroll_pos = 0;
  $(document).ready(function(){       
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 50){
          $('#logo').attr('src','src/img/logo.png');
          var img = document.getElementById('logo');
          if(img && img.style) {
              img.style.height = '3vw';
          }
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
        }else{
            $('#logo').attr('src','src/img/logo_colorida.png');
            var img = document.getElementById('logo');
            if(img && img.style) {
                img.style.height = '3.27vw';
            }
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
}