$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $("#sitetitle").removeClass("scrolled");
    } else {
      $("#sitetitle").addClass("scrolled");
    }
  });
});