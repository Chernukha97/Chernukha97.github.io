(function($) {
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 70
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  // $(".illustration-slider").magnificPopup({
  //   type: "image",
  //   preloader: true,
  //   modal: true,
  //   closeOnContentClick: true,
  //   closeBtnInside: true,
  //   closeOnBgClick: true,
  // });

  $(".sketches-link").magnificPopup({
    type: "image",
    preloader: true,
    verticalFit: true,

    modal: true,
    closeOnContentClick: true, 
    closeOnBgClick: true,
    showCloseBtn: true,
    

    gallery: {
      enabled: true, 

      preload: [0,2], // read about this option in next Lazy-loading section
    
      navigateByImgClick: true,

      arrowMarkup: '', // markup of an arrow button
      
    
      tPrev: 'Previous (Left arrow key)', // title for left button
      tNext: 'Next (Right arrow key)', // title for right button
      tCounter: '<span style="color: #FF8935; font-size: 20px;" class="mfp-counter"> %curr% of %total%</span>' // markup of counter

    }
  });



  $(document).on("click", ".mfp-container", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });



  $('.illustration-slider-for').slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    asNavFor: '.illustration-slider-nav'
  });

  $('.illustration-slider-nav').slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.illustration-slider-for',
    draggable: true,
    focusOnSelect: true
  });


  $('.sketches-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.sketches-slider-nav'
  });

  $('.sketches-slider-nav').slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.sketches-slider-for',
    draggable: true,
    focusOnSelect: true
  });

  $('.carousel').carousel({
    interval: 2000
  });

  $('.characters-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    asNavFor: '.characters-slider-nav'
  });

  $('.characters-slider-nav').slick({
    slidesToShow: 3,

    lazyLoad: 'ondemand',
    draggable: true,
    asNavFor: '.characters-slider-for',
    focusOnSelect: true
  });



  setTimeout(function(){
    $('.header__svg').addClass('header__svg_filled');
  }, 3000);

})(jQuery);
