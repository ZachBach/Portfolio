$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $('.menu-toggler').toggleClass('open')
        $('.top-nav').toggleClass('open')
    });
    
    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open')
        $('.top-nav').removeClass('open')
    })
    
    $('nav a[href*="#"]').not("#blog").on("click", function () {
        $("#nav-link").toggleClass('active');
     $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
     }, 500);
      });
    
    $("#up").on("click", function () {
        $("html, body").animate({
          scrollTop: 0
           }, 1000); 
      });
    
    AOS.init({
        easing: "ease",
        duration: 1200,
        once: true
      });
      
});