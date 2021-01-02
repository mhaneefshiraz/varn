$(function() {
  'use strict';

  if($('.owl-basic').length) {
    $('.owl-basic').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
    });
  }

  if($('.owl-auto-play').length) {
    $('.owl-auto-play').owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
  }

  if($('.owl-fadeout').length) {
    $('.owl-fadeout').owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoplay:false,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
    //  animateOut: 'fadeOut',
    //  items:1,
    //  margin:30,
    //  stagePadding:30,
    //  smartSpeed:450
    //});
  }

  if($('.owl-animate-css').length) {
    $('.owl-animate-css').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items:1,
      margin:30,
      stagePadding:30,
      smartSpeed:450
    });
  }

  if($('.owl-mouse-wheel').length) {
    var owl = $('.owl-mouse-wheel');
    owl.owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },            
            960:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

  }

});