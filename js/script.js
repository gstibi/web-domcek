$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 100px, adds/removes solid class
    if($(this).scrollTop() > 100)  { 
        $('.main-menu').addClass('solid');
        document.getElementById("logo").src="img/222x68.png";
        $('.logo').addClass('change-size');
        $('.navbar-nav').addClass('fontcolor');
        $('.back_to_top').addClass('show');
        $('.back_to_top').removeClass('hide');
      }
      
    else {
        $('.main-menu').removeClass('solid');
        document.getElementById("logo").src="img/222x68-color.png";
        $('.logo').removeClass('change-size');
        $('.navbar-nav').removeClass('fontcolor');
        $('.back_to_top').addClass('hide');
        $('.back_to_top').removeClass('show');
    }
  });

    $(document).ready(function() {
      $("#back_to_top").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
      });
    
  });
});