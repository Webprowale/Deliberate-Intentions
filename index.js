AOS.init();
$(document).ready(function() {
    // Close navbar when a link is clicked
    $(".navbar-nav a").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  });