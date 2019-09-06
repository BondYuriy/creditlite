$(document).ready(function() {
  //================================================

  jQuery(function() {
    jQuery(window).scroll(function() {
      var winTop = jQuery(window).scrollTop();
      if (winTop >= 30) {
        jQuery("body").addClass("sticky-header");
      } else {
        jQuery("body").removeClass("sticky-header");
      }
    });
  });

  //=================================================

  $(function() {
    $("#slider-price").slider({
      value: 1500,
      min: 500,
      max: 5000,
      step: 50,
      slide: function(event, ui) {
        $("#amount-price").val(ui.value);
      }
    });
    $("#amount-price").val($("#slider-price").slider("value"));
  });

  $(function() {
    $("#slider-day").slider({
      value: 20,
      min: 3,
      max: 30,
      step: 1,
      slide: function(event, ui) {
        $("#amount-day").val(ui.value);
      }
    });
    $("#amount-day").val($("#slider-day").slider("value"));
  });

  //================================================

  $(".navbar-toggler").click(function() {
    $(this).toggleClass("open");
  });

  //=================================================
});
