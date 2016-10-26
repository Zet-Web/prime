
$(document).ready(function() {

  //current position
  var pos = 0;
  //number of slides
  var totalSlides = $('#slider-wrap ul li').length;
  //get the slide width
  var sliderWidth = $('#slider-wrap').width();


  $(document).ready(function(){


    /*****************
     BUILD THE SLIDER
    *****************/
    //set width to be 'x' times the number of slides
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);

      //next slide
    $('#next').click(function(){
      slideRight();
    });

    //previous slide
    $('#previous').click(function(){
      slideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
    ************************/
    //automatic slider
    var autoSlider = setInterval(slideRight, 3000);

    //for each slide
    $.each($('#slider-wrap ul li'), function() {
       //set its color
       var c = $(this).attr("data-color");
       $(this).css("background",c);

       //create a pagination
       var li = document.createElement('li');
       $('#pagination-wrap ul').append(li);
    });

    //counter
    countSlides();

    //pagination
    pagination();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#slider-wrap').hover(
      function(){ $(this).addClass('active'); clearInterval(autoSlider); },
      function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
    );



  });//DOCUMENT READY



  /***********
   SLIDE LEFT
  ************/
  function slideLeft(){
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));

    //*> optional
    countSlides();
    pagination();
  }


  /************
   SLIDE RIGHT
  *************/
  function slideRight(){
    pos++;
    if(pos==totalSlides){ pos = 0; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));

    //*> optional
    countSlides();
    pagination();
  }




  /************************
   //*> OPTIONAL SETTINGS
  ************************/
  function countSlides(){
    $('#counter').html(pos+1 + ' / ' + totalSlides);
  }

  function pagination(){
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
  }




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


   $('.offlink').click(function(){
     return false;
     e.preventDefault();
   })

   var threeami=false;
   $("#threeami").html(threeami);
   function itemgo(num){
     var nonext=$("#threedsilder .item[data-pos='4']").next(".item").length==0;
     var noprev=$("#threedsilder .item[data-pos='4']").prev(".item").length==0;
     if(num<0 && !threeami && !nonext || num>0 && !threeami && !noprev){
       threeami=true;
       $("#threebtnprev,#threebtnnext").attr('disabled','disabled');
       $("#threeami").html(threeami);
       $("#threedsilder .item").each(function(){
         var getnowattr=Number($(this).attr("data-pos"));
         $(this).attr("data-pos",getnowattr+num);
       })
     }else if(num<0 && !threeami && nonext){
       var getfirstitem=Number($("#threedsilder .item").eq(0).attr("data-pos"));
       var facode=Math.abs(getfirstitem-4);
       threeami=true;
       $("#threebtnprev,#threebtnnext").attr('disabled','disabled');
       $("#threedsilder .item").each(function(){
         var getnowattr=Number($(this).attr("data-pos"));
         $(this).attr("data-pos",getnowattr+facode);
       })
     }else if(num>0 && !threeami && noprev){
       var getitemlength=$("#threedsilder .item").length;
       var getfinalitem=Number($("#threedsilder .item").eq(getitemlength-1).attr("data-pos"));
       var facode=getfinalitem-4;
       threeami=true;
       $("#threebtnprev,#threebtnnext").attr('disabled','disabled');
       $("#threedsilder .item").each(function(){
         var getnowattr=Number($(this).attr("data-pos"));
         $(this).attr("data-pos",getnowattr-facode);
       })
     }
     msgshow();
   }
   $("#threebtnprev").click(function(){
     itemgo(1);
   });
   $("#threebtnnext").click(function(){
     itemgo(-1);
   });
   $(".item").click(function(){
     var getpos=$(this).attr("data-pos");
     if(getpos>=3&&getpos<=5){
       itemgo(4-getpos);
     }
   })
   $(".item").on('transitionend', function(e){
     if(threeami){
       threeami=false;
       $("#threebtnprev,#threebtnnext").removeAttr('disabled');
       $("#threeami").html(threeami);
       $("#videomsg").addClass("_show");
     }
   });
   var msgfirst=true;
   function msgshow(){
     if($("#videomsg").hasClass("_show")){
        msgfirst=false;
     }
     $("#videomsg").removeClass("_show");
     $("#videomsg").html("");
     $("#videomsg").html($("#threedsilder .item[data-pos='4'] .msg").html());
     if(!$("#videomsg").hasClass("_show") && msgfirst){
        $("#videomsg").addClass("_show");
     }
   }
   msgshow();
   /*function module_clamp(){
     $(".item .msg").removeAttr("style");
     var msglength=document.getElementsByClassName("msg").length;
     for(na=0;na<msglength;na++){
       module=document.getElementsByClassName("msg")[na];
       $clamp(module, {clamp: 4});
     }
   }
   module_clamp();
   $(window).resize(function(){
     setTimeout("module_clamp()",500);
   })*/




 });// /.document-ready



$(window).resize(function(){

});

