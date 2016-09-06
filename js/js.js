
$(document).ready(function() {
$('.hero-carousel').heroCarousel({
          easing: 'easeOutExpo',
          css3pieFix: true,
          timeout: 5000,
          pause: true,
          pauseOnNavHover: true,
          prevText: 'Предыдущая работа',
          nextText: 'Следующая работа',
          css3pieFix: true,
          currentClass: 'current',
        });

  $("#lnk").click(function(){
    $('body').find('#lnk').append("<p>VALUE</p>");
  });


 var $slider = $("#slider");
   $slider.parent().append("<div class='slider-nav'><a id='slide-prev'>PREV</i></a><a id='slide-next'>NEXT</a></div>");

  $slider.owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      pagination : true,
      singleItem:true,
  });

  // show first caption
  $("#slider .caption").addClass("animate-me");

   $("#slide-next").click(function(){
     $("#slider .caption").removeClass("animate-me");
      $slider.trigger('owl.next');
      $("#slider .caption").addClass("animate-me");
   });

   $("#slide-prev").click(function(){
     $("#slider .caption").removeClass("animate-me");
      $slider.trigger('owl.prev');
     $("#slider .caption").addClass("animate-me");
   });


 });// /.document-ready



$(window).resize(function(){

});


$('.offlink').click(function(){
  return false;
  e.preventDefault();
})

