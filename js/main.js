$(document).ready(function(){
  
  addScrollReveal();

  $("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 700);
  })

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

function addScrollReveal (){
  var sr = ScrollReveal();
  sr.reveal('#about-me', {duration: 2000, scale:1, origin: 'left'});
  sr.reveal('#education', {duration: 2000, scale:1, origin: 'right'});
  sr.reveal('.exp-section', {duration: 2000});
  sr.reveal('.card', {duration: 2000}, 100);
}
