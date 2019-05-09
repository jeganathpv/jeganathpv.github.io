"use strict";


// //PRELOADER
//  $(window).load(function(){
//         $('.loader').fadeOut();    
//         $('#preloader').delay(350).fadeOut('slow');    
//         $('body').delay(700);   

//     });

$('[data-slick]').slick();
$(window).on('scroll', function () {
  Theme.Counter();
  Theme.NavBar();
});
$("#navbarCollapse").scrollspy({
  offset: 20
});
$(window).on('load', function () {
  $('.jarallax').jarallax({
    speed: 0.5
  });

  if ($('#work-filter').length > 0 && $('#work-filter').length > 0) {
    var Worksfilter = $('#work-filter');
    var $container = new Isotope('.work-filter', {
      filter: '*',
      // layoutMode: 'masonry',
      animationOptions: {
        duration: 750,
        easing: 'linear'
      }
    });
    Worksfilter.find('a').on("click", function () {
      var selector = $(this).attr('data-filter');
      Worksfilter.find('a').removeClass('active');
      $(this).addClass('active');
      $container.arrange({
        filter: selector,
        animationOptions: {
          animationDuration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  }
});
var a = 0;
var Theme = {
  Counter: function Counter() {
    if ($('.counter').length > 0) {
      var oTop = $('.counter').offset().top - window.innerHeight;

      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter__num').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 4000,
            easing: 'swing',
            step: function step(now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
        a = 1;
      }
    }
  },
  NavBar: function NavBar() {
    var scroll = $(window).scrollTop();

    if (scroll >= 90) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  }
};
$(document).ready(function () {
  Theme.Counter();
});

