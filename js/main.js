$(document).ready(function(){

  $(document.body).css({"background-image": "url('./img/landing-background.jpg')"});

  $("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 700);
  });

  var offset = 400;

  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $('#floating-nav').addClass('show-this') : $('#floating-nav').removeClass('show-this');
  });

  $('#cd-top').on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, 700);
  });

});