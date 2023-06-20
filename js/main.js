
$(function(){
  

  $('.burger, .menu__list a').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.menu__list').toggleClass('menu__list--active');

    if ($('.menu__list').hasClass('menu__list--active')) {
      $('body').css('overflow', 'hidden'); 
    } else {
      $('body').css('overflow', 'auto'); 
    }
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.menu').addClass('menu-fixed');
    } else {
      $('.menu').removeClass('menu-fixed');
    }
  });

  $(".menu a, .logo, .header__link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');
    var target = $(id);

    if (target.length) {
      event.preventDefault();
      var top = target.offset().top - 120;

      $('body,html').animate({ scrollTop: top }, 1000);
      $('body').css('overflow', 'auto'); 
      $('.menu__list').removeClass('menu__list--active'); 
      $('.burger').removeClass('burger--active'); 
    }
  });










  var mixer = mixitup('.works__content', {
    "animation": {
      "duration": 700,
      "nudge": false,
      
    }
  });
 

});

